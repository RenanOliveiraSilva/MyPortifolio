const sharp = require('sharp');

const svg = `
<svg width="1024" height="248" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0a0518"/>
  <!-- Stitching details on top and bottom edges -->
  <line x1="0" y1="20" x2="1024" y2="20" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2" stroke-dasharray="8 6"/>
  <line x1="0" y1="228" x2="1024" y2="228" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2" stroke-dasharray="8 6"/>

  <!-- Centered lanyard repeating text -->
  <text x="512" y="145" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="6" text-anchor="middle">
    RENAN OLIVEIRA  ✦  FULL-STACK
  </text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/assets/band_custom.png')
  .then(() => console.log('Successfully generated public/assets/band_custom.png!'));
