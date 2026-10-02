const sharp = require('sharp');
const https = require('https');

// Test downloading a nice signature font (Caveat or Great Vibes) or using Segoe Script / Brush Script
const svg = `
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0a0518"/>
  <text x="300" y="100" font-size="72" fill="#ffffff" font-family="'Segoe Script', 'Brush Script MT', cursive" text-anchor="middle" font-weight="bold">Renan</text>
  <text x="300" y="160" font-size="20" fill="#a78bfa" font-family="'Segoe UI', sans-serif" font-weight="800" letter-spacing="4" text-anchor="middle">FULL-STACK DEVELOPER</text>
  <text x="300" y="190" font-size="14" fill="#9ca3af" font-family="'Segoe UI', sans-serif" letter-spacing="2" text-anchor="middle">SOLUÇÕES DIGITAIS &amp; UI/UX</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('scripts/test_badge_typography.png')
  .then(() => console.log('Rendered test_badge_typography.png'));
