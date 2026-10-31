const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');
const os = require('os');
const path = require('path');

async function createAllReviewCutouts() {
  const tmpDir = path.join(os.tmpdir(), 'edge-cutouts-' + Date.now());
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless',
    '--remote-debugging-port=9259',
    '--user-data-dir=' + tmpDir,
    '--disable-web-security',
    'http://localhost:5173/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  const list = await new Promise(r => http.get('http://localhost:9259/json', res => {
    let d = ''; res.on('data', c => d += c); res.on('end', () => r(JSON.parse(d)));
  }));
  const page = list.find(p => p.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let msgId = 1;
  const send = (method, params = {}) => new Promise(res => {
    const id = msgId++;
    const handler = (e) => {
      const d = JSON.parse(e.data);
      if (d.id === id) {
        ws.removeEventListener('message', handler);
        res(d.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  ws.onopen = async () => {
    const res = await send('Runtime.evaluate', {
      expression: `
        new Promise(async (resolve) => {
          const cutouts = {};

          // Helper to load image
          const loadImg = (src) => new Promise(r => {
            const img = new Image();
            img.onload = () => r(img);
            img.src = src;
          });

          // 1. Sun Earrings Woman (Efua Osei)
          const sunImg = await loadImg('/assets/guest-review-sun-earrings.jpg');
          const sunCanvas = document.createElement('canvas');
          sunCanvas.width = sunImg.naturalWidth;
          sunCanvas.height = sunImg.naturalHeight;
          const sCtx = sunCanvas.getContext('2d');
          sCtx.save();
          sCtx.beginPath();
          // Crown / sunglasses top: (560, 190)
          sCtx.moveTo(560, 190);
          // Curve down forehead & nose profile:
          sCtx.bezierCurveTo(480, 200, 420, 260, 380, 340);
          sCtx.bezierCurveTo(360, 380, 365, 420, 375, 460); // Lips & chin
          sCtx.bezierCurveTo(380, 480, 410, 520, 430, 540); // Jaw & neck
          sCtx.lineTo(200, 600);
          sCtx.lineTo(100, 1024);
          sCtx.lineTo(756, 1024);
          sCtx.lineTo(756, 500);
          sCtx.lineTo(660, 450);
          // Bun at back of head: (650, 400)
          sCtx.bezierCurveTo(670, 380, 660, 340, 640, 300);
          sCtx.bezierCurveTo(620, 240, 590, 200, 560, 190);
          sCtx.closePath();
          sCtx.clip();
          sCtx.drawImage(sunImg, 0, 0);
          sCtx.restore();
          cutouts.sun = sunCanvas.toDataURL('image/png').replace(/^data:image\\/png;base64,/, '');

          // 2. Thumbsup Guy (Kofi Addo)
          const thumbImg = await loadImg('/assets/guest-review-thumbsup-guy.jpg');
          const tCanvas = document.createElement('canvas');
          tCanvas.width = thumbImg.naturalWidth;
          tCanvas.height = thumbImg.naturalHeight;
          const tCtx = tCanvas.getContext('2d');
          tCtx.save();
          tCtx.beginPath();
          // Cap crown: (385, 380)
          tCtx.moveTo(385, 380);
          tCtx.bezierCurveTo(330, 380, 300, 410, 290, 450);
          tCtx.bezierCurveTo(285, 480, 295, 520, 310, 550);
          tCtx.lineTo(200, 600);
          tCtx.lineTo(100, 1024);
          tCtx.lineTo(774, 1024);
          tCtx.lineTo(600, 600);
          tCtx.lineTo(470, 550);
          tCtx.bezierCurveTo(480, 510, 485, 460, 470, 430);
          tCtx.bezierCurveTo(450, 390, 415, 380, 385, 380);
          tCtx.closePath();
          tCtx.clip();
          tCtx.drawImage(thumbImg, 0, 0);
          tCtx.restore();
          cutouts.thumbsup = tCanvas.toDataURL('image/png').replace(/^data:image\\/png;base64,/, '');

          // 3. Artisan Bottle Guy (Nana Kwesi)
          const botImg = await loadImg('/assets/guest-review-artisan-bottle.jpg');
          const bCanvas = document.createElement('canvas');
          bCanvas.width = botImg.naturalWidth;
          bCanvas.height = botImg.naturalHeight;
          const bCtx = bCanvas.getContext('2d');
          bCtx.save();
          bCtx.beginPath();
          // Crown: (640, 150)
          bCtx.moveTo(640, 150);
          bCtx.bezierCurveTo(580, 150, 530, 180, 510, 240);
          bCtx.bezierCurveTo(490, 280, 500, 340, 515, 380);
          bCtx.lineTo(400, 450);
          bCtx.lineTo(200, 1024);
          bCtx.lineTo(764, 1024);
          bCtx.lineTo(764, 400);
          bCtx.bezierCurveTo(730, 350, 715, 280, 705, 230);
          bCtx.bezierCurveTo(695, 175, 665, 150, 640, 150);
          bCtx.closePath();
          bCtx.clip();
          bCtx.drawImage(botImg, 0, 0);
          bCtx.restore();
          cutouts.bottle = bCanvas.toDataURL('image/png').replace(/^data:image\\/png;base64,/, '');

          // 4. Dancing Man (Marcus Mensah)
          const danceImg = await loadImg('/assets/guest-review-dancing-man.jpg');
          const dCanvas = document.createElement('canvas');
          dCanvas.width = danceImg.naturalWidth;
          dCanvas.height = danceImg.naturalHeight;
          const dCtx = dCanvas.getContext('2d');
          dCtx.save();
          dCtx.beginPath();
          // Crown: (470, 235)
          dCtx.moveTo(470, 235);
          dCtx.bezierCurveTo(420, 235, 385, 260, 375, 310);
          dCtx.bezierCurveTo(365, 350, 370, 390, 390, 420);
          dCtx.lineTo(300, 480);
          dCtx.lineTo(150, 1024);
          dCtx.lineTo(770, 1024);
          dCtx.lineTo(650, 480);
          dCtx.lineTo(560, 420);
          dCtx.bezierCurveTo(570, 370, 565, 310, 550, 275);
          dCtx.bezierCurveTo(535, 245, 500, 235, 470, 235);
          dCtx.closePath();
          dCtx.clip();
          dCtx.drawImage(danceImg, 0, 0);
          dCtx.restore();
          cutouts.dance = dCanvas.toDataURL('image/png').replace(/^data:image\\/png;base64,/, '');

          resolve(cutouts);
        })
      `,
      awaitPromise: true,
      returnByValue: true
    });

    const data = res.result.value;
    const assetsDir = 'C:/Users/clerk/.gemini/antigravity/scratch/kinsocial-ghana/public/assets/';
    if (data.sun) fs.writeFileSync(assetsDir + 'guest-review-sun-earrings-head.png', Buffer.from(data.sun, 'base64'));
    if (data.thumbsup) fs.writeFileSync(assetsDir + 'guest-review-thumbsup-guy-head.png', Buffer.from(data.thumbsup, 'base64'));
    if (data.bottle) fs.writeFileSync(assetsDir + 'guest-review-artisan-bottle-head.png', Buffer.from(data.bottle, 'base64'));
    if (data.dance) fs.writeFileSync(assetsDir + 'guest-review-dancing-man-head.png', Buffer.from(data.dance, 'base64'));

    console.log('Saved all additional guest review cutouts');
    ws.close();
    edge.kill();
    process.exit(0);
  };
}

createAllReviewCutouts().catch(console.error);
