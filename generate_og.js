const puppeteer = require('puppeteer');
const fs = require('fs');

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
    body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
      font-family: 'Inter', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #1e1b4b;
    }
    .container {
      background: white;
      padding: 80px 100px;
      border-radius: 40px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.05);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 4px solid #c7d2fe;
      width: 800px;
    }
    .icon {
      width: 120px;
      height: 120px;
      color: #2563eb;
      margin-bottom: 40px;
    }
    h1 {
      font-size: 80px;
      font-weight: 800;
      margin: 0 0 20px 0;
      letter-spacing: -2px;
      color: #111827;
    }
    p {
      font-size: 36px;
      font-weight: 600;
      color: #4b5563;
      margin: 0;
    }
    .badge {
      background: #2563eb;
      color: white;
      padding: 16px 36px;
      border-radius: 100px;
      font-size: 28px;
      font-weight: 600;
      margin-top: 50px;
      box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Lucide 'split' icon SVG -->
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 3h5v5"></path>
      <path d="M8 3H3v5"></path>
      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path>
      <path d="m15 9 6-6"></path>
    </svg>
    <h1>UPI Splitter</h1>
    <p>Bypass 1.1% merchant fees on payments > ₹2000</p>
    <div class="badge">upisplitter.com</div>
  </div>
</body>
</html>
`;

(async () => {
  try {
    console.log('Launching browser to generate OG image...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Standard OG Image size is 1200x630
    // Using deviceScaleFactor: 2 for a high-res (Retina) output scaled back to normal
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    console.log('Taking screenshot...');
    await page.screenshot({ path: 'og-image.jpg', type: 'jpeg', quality: 90 });
    
    await browser.close();
    console.log('Successfully generated og-image.jpg!');
  } catch (err) {
    console.error('Error generating OG image:', err);
  }
})();
