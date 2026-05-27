const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const pages = [
    { url: 'http://localhost:5199/alquileres', name: 'alquileres' },
    { url: 'http://localhost:5199/caucion',    name: 'caucion'    },
    { url: 'http://localhost:5199/responsabilidad-civil', name: 'rc' },
    { url: 'http://localhost:5199/formularios', name: 'formularios' },
  ];
  const widths = [1920, 1440, 1280, 1024];
  for (const { url, name } of pages) {
    for (const w of widths) {
      const page = await browser.newPage();
      await page.setViewportSize({ width: w, height: 700 });
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `C:/Users/USUARIO/AppData/Local/Temp/banner-${name}-${w}.png`, clip: { x:0, y:0, width:w, height:520 } });
      await page.close();
    }
  }
  await browser.close();
  console.log('done');
})();
