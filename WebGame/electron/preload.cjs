// Minimal preload: exposes a tiny, safe bridge (version + external links).
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('dhjDesktop', {
  isDesktop: true,
  version: () => ipcRenderer.invoke('dhj:version'),
});
