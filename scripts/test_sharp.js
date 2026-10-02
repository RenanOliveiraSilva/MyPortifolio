const sharp = require('sharp');

const svg = Buffer.from(`
<svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#120924"/>
  <text x="50" y="100" font-size="64" fill="#a78bfa" font-family="Segoe UI, Arial, sans-serif" font-weight="bold">Renan</text>
  <text x="50" y="160" font-size="48" fill="#ffffff" font-family="Brush Script MT, cursive">Renan</text>
</svg>
`);

sharp(svg)
  .png()
  .toFile('scripts/test_font.png')
  .then(() => console.log('Successfully rendered test_font.png'));
