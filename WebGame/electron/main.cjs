// ============================================================
// Electron shell — wraps the built game (dist/game) as a desktop
// application. Loads from disk (file://) so it is fully offline.
// ============================================================
const { app, BrowserWindow, ipcMain, shell, dialog, Menu, screen } = require('electron');
const path = require('path');
const fs = require('fs');

const isDev = !app.isPackaged;
const GAME_DIR = isDev
  ? path.join(__dirname, '..', 'dist', 'game')
  : path.join(process.resourcesPath, 'game');

let win = null;

// single instance
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) { app.quit(); } else {
  app.on('second-instance', () => {
    if (win) { if (win.isMinimized()) win.restore(); win.focus(); }
  });
}

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  win = new BrowserWindow({
    width: Math.min(1600, width - 80),
    height: Math.min(900, height - 80),
    minWidth: 900,
    minHeight: 560,
    backgroundColor: '#05070d',
    show: false,
    autoHideMenuBar: true,
    title: 'Ambedkar — The Digital Heritage Journey',
    icon: path.join(__dirname, '..', 'res', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      backgroundThrottling: false,
      spellcheck: false,
    },
  });

  Menu.setApplicationMenu(buildMenu());
  win.loadFile(path.join(GAME_DIR, 'index.html'));
  win.once('ready-to-show', () => win.show());
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) shell.openExternal(url);
    return { action: 'deny' };
  });
  // F11 fullscreen, Esc leaves fullscreen before the game sees it
  win.webContents.on('before-input-event', (e, input) => {
    if (input.key === 'F11') {
      e.preventDefault();
      win.setFullScreen(!win.isFullScreen());
    }
  });
  win.on('closed', () => { win = null; });
}

function buildMenu() {
  return Menu.buildFromTemplate([
    {
      label: 'Journey',
      submenu: [
        { role: 'reload', label: 'Reload Museum' },
        { role: 'toggleDevTools', label: 'Developer Tools' },
        { type: 'separator' },
        { role: 'quit', label: 'Exit' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'togglefullscreen', label: 'Fullscreen (F11)' },
        { role: 'resetZoom', label: 'Actual Size' },
        { role: 'zoomIn', label: 'Zoom In' },
        { role: 'zoomOut', label: 'Zoom Out' },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About this build',
          click: () => {
            let ver = '1.0.0';
            try { ver = JSON.parse(fs.readFileSync(path.join(GAME_DIR, 'build.json'), 'utf8')).version; } catch { /* ignore */ }
            dialog.showMessageBox(win, {
              type: 'info',
              title: 'Ambedkar — The Digital Heritage Journey',
              message: 'Ambedkar: The Digital Heritage Journey',
              detail:
                `Version ${ver}\n` +
                'SIH 2026 · Problem SIH26096 · Team Binary Coders\n\n' +
                'An offline-first educational heritage experience. Six galleries, ' +
                '35 archive records, 4 knowledge checkpoints and an offline Archive Guide.\n\n' +
                'The character portrait and memorial dioramas are artistic visualizations / ' +
                'digital reconstructions, not historical photographs.',
              buttons: ['Close'],
            });
          },
        },
      ],
    },
  ]);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

ipcMain.handle('dhj:version', () => {
  try { return JSON.parse(fs.readFileSync(path.join(GAME_DIR, 'build.json'), 'utf8')); }
  catch { return { version: '1.0.0' }; }
});
