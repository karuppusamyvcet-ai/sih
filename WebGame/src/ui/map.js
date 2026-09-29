import { $, show, hide } from '../core.js';
import { getState, settings } from '../state.js';

// ------------------------------------------------------------------
// Map overlay: top-down schematic of the current zone + door states
// ------------------------------------------------------------------
export function createMap(ctx) {
  const scr = $('mapScreen');
  const cv = $('mapCanvas'), g = cv.getContext('2d');

  function draw() {
    const w = cv.width, h = cv.height;
    g.clearRect(0, 0, w, h);
    g.fillStyle = '#0a101e';
    g.fillRect(0, 0, w, h);

    const zone = ctx.world.zone;
    if (zone === 'hub') drawHub(w, h);
    else drawGallery(zone, w, h);

    drawLegend(zone);
  }

  function drawHub(w, h) {
    const cx = w / 2, cy = h / 2 + 6, R = Math.min(w, h) * 0.4;
    // floor
    g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2);
    g.fillStyle = '#141d33'; g.fill();
    g.strokeStyle = '#d9b45b88'; g.lineWidth = 3; g.stroke();
    g.beginPath(); g.arc(cx, cy, R * 0.42, 0, Math.PI * 2);
    g.strokeStyle = '#d9b45b44'; g.lineWidth = 2; g.stroke();

    // centre portrait
    g.fillStyle = '#d9b45b';
    g.beginPath(); g.arc(cx, cy, 7, 0, Math.PI * 2); g.fill();
    label('Portrait', cx + 12, cy + 4, '#f4d98c');

    // doors along the north arc
    const zones = ctx.world.doorOrder;
    const xs = [-12.4, -7.5, -2.6, 2.6, 7.5, 12.4];
    const scale = R / 17;
    zones.forEach((z, i) => {
      const x = cx + xs[i] * scale, y = cy - 16 * scale;
      const unlocked = ctx.missions.isZoneUnlocked(z);
      const here = ctx.world.zone === z;
      g.fillStyle = unlocked ? '#d9b45b' : '#5a6070';
      g.fillRect(x - 20, y - 8, 40, 12);
      g.fillStyle = unlocked ? '#f4d98c' : '#8a90a0';
      g.font = '10px "Segoe UI", sans-serif';
      g.textAlign = 'center';
      const short = { early_life: '1·EARLY', social_reform: '2·REFORM', constitution: '3·CONSTIT', scholarship: '4·ARCHIVE', memorials: '5·MEMORIAL', legacy: '6·LEGACY' }[z];
      g.fillText((unlocked ? '' : '🔒') + short, x, y - 14);
    });

    // reception
    g.fillStyle = '#7fd0ff';
    g.fillRect(cx - 30, cy + R * 0.5, 60, 10);
    label('Reception / Guide', cx, cy + R * 0.5 + 26, '#7fd0ff');

    // player
    const st = ctx.player && ctx.player.state;
    if (st) {
      const px = cx + st.pos.x * scale, py = cy + st.pos.z * scale;
      drawPlayer(px, py, st.yaw);
    }
    label('N', cx, cy - R - 12, '#98a1b5');
  }

  function drawGallery(zoneId, w, h) {
    const zone = ctx.content.zoneById.get(zoneId);
    const cx = w / 2, cy = h / 2;
    const scale = Math.min(w / 34, h / 24);
    // hall
    g.fillStyle = '#141d33';
    g.fillRect(cx - 15 * scale, cy - 10 * scale, 30 * scale, 20 * scale);
    g.strokeStyle = '#d9b45b88'; g.lineWidth = 3;
    g.strokeRect(cx - 15 * scale, cy - 10 * scale, 30 * scale, 20 * scale);
    // aisle
    g.fillStyle = '#1c2742';
    g.fillRect(cx - 3.2 * scale, cy - 10 * scale, 6.4 * scale, 20 * scale);

    // title
    g.fillStyle = '#f4d98c';
    g.font = '600 15px Georgia, serif';
    g.textAlign = 'center';
    g.fillText(ctx.content.zoneMeta[zoneId].title, cx, cy - 10 * scale - 14);

    // exhibits
    const items = zone.exhibits;
    const colliders = (ctx.world.current && ctx.world.current.interactables) || [];
    for (const it of colliders) {
      if (it.type === 'backdoor') continue;
      const x = cx + it.pos.x * scale, y = cy + it.pos.z * scale;
      let color = '#d9b45b';
      if (it.type === 'quiz') color = '#8fe0a8';
      else if (it.type === 'archive') color = '#7fd0ff';
      else if (it.type === 'ai') color = '#b3a6ff';
      else if (it.type === 'diorama') color = '#8fe0a8';
      else if (it.type === 'timeline' || it.type === 'portrait' || it.type === 'quote') color = '#c9b4ff';
      g.fillStyle = color;
      g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.fill();
      const discovered = getState().discovered[zoneId] || {};
      if (it.exhibit && discovered[it.exhibit.id]) {
        g.strokeStyle = '#fff'; g.lineWidth = 1.4;
        g.beginPath(); g.arc(x, y, 7.5, 0, Math.PI * 2); g.stroke();
      }
    }

    // back door
    g.fillStyle = '#d9b45b';
    g.fillRect(cx - 18, cy + 10 * scale - 4, 36, 9);
    label('◂ Rotunda', cx, cy + 10 * scale + 20, '#d9b45b');

    // player
    const st = ctx.player && ctx.player.state;
    if (st) drawPlayer(cx + st.pos.x * scale, cy + st.pos.z * scale, st.yaw);
  }

  function drawPlayer(x, y, yaw) {
    g.save();
    g.translate(x, y);
    g.rotate(-yaw + Math.PI);
    g.fillStyle = '#ff5f52';
    g.beginPath();
    g.moveTo(0, -9); g.lineTo(6, 7); g.lineTo(0, 3); g.lineTo(-6, 7);
    g.closePath(); g.fill();
    g.strokeStyle = '#fff'; g.lineWidth = 1.4; g.stroke();
    g.restore();
  }

  function label(t, x, y, color = '#cfd6e4') {
    g.fillStyle = color;
    g.font = '11px "Segoe UI", sans-serif';
    g.textAlign = 'left';
    g.fillText(t, x, y);
  }

  function drawLegend(zone) {
    $('mapLegend').innerHTML = `
      <span><i style="background:#ff5f52"></i>You</span>
      <span><i style="background:#d9b45b"></i>Exhibit</span>
      <span><i style="background:#8fe0a8"></i>Quiz / Memorial</span>
      <span><i style="background:#7fd0ff"></i>Archive terminal</span>
      <span><i style="background:#b3a6ff"></i>AI Guide</span>
      <span><i style="background:${settings.presentation ? '#d9b45b' : '#5a6070'}"></i>Door ${settings.presentation ? '(all open)' : '(locked = finish missions)'}</span>`;
  }

  function open() { draw(); show(scr); ctx.audio.play('page'); }
  function close() { hide(scr); }
  function isOpen() { return !scr.classList.contains('hidden'); }
  function toggle() { isOpen() ? close() : open(); }

  return { open, close, isOpen, toggle, draw };
}
