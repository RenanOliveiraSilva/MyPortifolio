const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateCardTexture() {
  const width = 1024;
  const height = 1024;
  const cardW = 512;
  const cardH = 774;

  console.log('1. Resizing perfil.png for badge...');
  // Resize photo to fit badge cleanly
  const photoW = 440;
  const photoH = 587;
  const resizedPhoto = await sharp('public/perfil.png')
    .resize(photoW, photoH, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();

  const photoBase64 = `data:image/png;base64,${resizedPhoto.toString('base64')}`;

  console.log('2. Constructing Front & Back Badge SVG...');
  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Background Gradient for Card -->
    <linearGradient id="card-bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0e0620"/>
      <stop offset="40%" stop-color="#1b0c38"/>
      <stop offset="75%" stop-color="#120726"/>
      <stop offset="100%" stop-color="#06020c"/>
    </linearGradient>

    <!-- Radial aura behind head (matching reference spotlight, in purple) -->
    <radialGradient id="head-aura" cx="50%" cy="32%" r="42%">
      <stop offset="0%" stop-color="#a78bfa" stop-opacity="0.55"/>
      <stop offset="45%" stop-color="#7c3aed" stop-opacity="0.3"/>
      <stop offset="75%" stop-color="#4f46e5" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Fade mask for bottom of suit -->
    <linearGradient id="suit-fade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="70%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="90%" stop-color="#ffffff" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <mask id="photo-mask">
      <rect x="0" y="0" width="${photoW}" height="${photoH}" fill="url(#suit-fade)" />
    </mask>

    <!-- Name glow filter -->
    <filter id="name-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#a78bfa" flood-opacity="0.6"/>
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#ffffff" flood-opacity="0.8"/>
    </filter>

    <!-- Card border gradient -->
    <linearGradient id="border-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a78bfa" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="#7c3aed" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0.5"/>
    </linearGradient>

    <!-- QR Code Pattern definition -->
    <pattern id="grid-dots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.8" fill="rgba(167, 139, 250, 0.15)"/>
    </pattern>
  </defs>

  <!-- Transparent base canvas -->
  <rect width="${width}" height="${height}" fill="transparent" />

  <!-- ======================================================== -->
  <!-- FRONT OF CARD (X: 0 to 512, Y: 0 to 774)                -->
  <!-- ======================================================== -->
  <g id="card-front">
    <!-- 1. Card Base Background -->
    <rect x="2" y="2" width="${cardW - 4}" height="${cardH - 4}" rx="28" fill="url(#card-bg)"/>
    <rect x="2" y="2" width="${cardW - 4}" height="${cardH - 4}" rx="28" fill="url(#grid-dots)"/>

    <!-- 2. Spotlight glow behind head -->
    <circle cx="256" cy="260" r="240" fill="url(#head-aura)"/>

    <!-- 3. Renan's Photo -->
    <g transform="translate(36, 95)" mask="url(#photo-mask)">
      <image xlink:href="${photoBase64}" width="${photoW}" height="${photoH}" preserveAspectRatio="xMidYMid meet"/>
    </g>

    <!-- 4. Top Header Bar -->
    <!-- Left: Brand Logo -->
    <g transform="translate(36, 44)">
      <!-- Hexagon / Dev Icon -->
      <polygon points="12,0 24,7 24,21 12,28 0,21 0,7" fill="rgba(167, 139, 250, 0.15)" stroke="#a78bfa" stroke-width="1.5"/>
      <text x="12" y="18" font-family="'Segoe UI', sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle">&lt;/&gt;</text>
      <!-- Brand Name -->
      <text x="34" y="14" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="900" font-size="16" fill="#ffffff" letter-spacing="1.5">RENAN</text>
      <text x="34" y="26" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="600" font-size="9" fill="#a78bfa" letter-spacing="2.5">OLIVEIRA</text>
    </g>

    <!-- Right: Badge Category Pill -->
    <g transform="translate(330, 42)">
      <rect x="0" y="0" width="146" height="28" rx="14" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(167, 139, 250, 0.3)" stroke-width="1"/>
      <circle cx="16" cy="14" r="3.5" fill="#22c55e"/>
      <text x="28" y="18" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="800" font-size="10" fill="#f4f4f5" letter-spacing="1.5">FULL-STACK</text>
    </g>

    <!-- 5. Name Typography (Signature Style like reference 'Davin') -->
    <g transform="translate(256, 565)">
      <!-- Signature Name -->
      <text x="0" y="0" font-family="'Segoe Script', 'Brush Script MT', 'Dancing Script', cursive" font-size="68" font-weight="bold" fill="#ffffff" text-anchor="middle" filter="url(#name-glow)">Renan</text>
      <!-- Elegant underline flourish -->
      <path d="M -110 12 Q 0 24 110 10" stroke="url(#border-glow)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      
      <!-- Subtitle Role -->
      <text x="0" y="38" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="900" font-size="14" fill="#ffffff" letter-spacing="4.5" text-anchor="middle">FULL-STACK DEVELOPER</text>
      <!-- Subtitle Focus -->
      <text x="0" y="56" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="600" font-size="10" fill="#a78bfa" letter-spacing="2.5" text-anchor="middle">EXPERIÊNCIAS DIGITAIS &amp; UI/UX</text>
    </g>

    <!-- 6. Bottom Accreditation Bar (Conference Badge Footer) -->
    <line x1="36" y1="675" x2="476" y2="675" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1"/>
    
    <g transform="translate(36, 688)">
      <!-- Barcode simulation -->
      <g fill="rgba(255, 255, 255, 0.35)">
        <rect x="0" y="0" width="2" height="18"/>
        <rect x="4" y="0" width="4" height="18"/>
        <rect x="10" y="0" width="1" height="18"/>
        <rect x="13" y="0" width="3" height="18"/>
        <rect x="18" y="0" width="2" height="18"/>
        <rect x="22" y="0" width="5" height="18"/>
        <rect x="29" y="0" width="2" height="18"/>
        <rect x="33" y="0" width="1" height="18"/>
        <rect x="36" y="0" width="4" height="18"/>
        <rect x="42" y="0" width="2" height="18"/>
        <rect x="46" y="0" width="3" height="18"/>
        <rect x="51" y="0" width="1" height="18"/>
        <rect x="54" y="0" width="4" height="18"/>
        <rect x="60" y="0" width="2" height="18"/>
      </g>
      <!-- ID Label -->
      <text x="70" y="10" font-family="'Segoe UI', monospace" font-size="8.5" fill="#a1a1aa" letter-spacing="1">ID: RO-2026 // PASS</text>
      <text x="70" y="20" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="8" fill="#a78bfa" letter-spacing="0.5">AUTH: VERIFIED CREATOR</text>

      <!-- Colored Accreditation Badges (matching reference image cyan/red chips, but in project colors) -->
      <g transform="translate(390, 0)">
        <rect x="0" y="0" width="22" height="22" rx="4" fill="#7c3aed"/>
        <text x="11" y="15" font-family="'Segoe UI', sans-serif" font-weight="900" font-size="10" fill="#ffffff" text-anchor="middle">TS</text>

        <rect x="26" y="0" width="22" height="22" rx="4" fill="#a78bfa"/>
        <text x="37" y="15" font-family="'Segoe UI', sans-serif" font-weight="900" font-size="10" fill="#0e0620" text-anchor="middle">R</text>
      </g>
    </g>

    <!-- Outer card border -->
    <rect x="2" y="2" width="${cardW - 4}" height="${cardH - 4}" rx="28" fill="none" stroke="url(#border-glow)" stroke-width="1.8"/>
  </g>

  <!-- ======================================================== -->
  <!-- BACK OF CARD (X: 512 to 1024, Y: 0 to 774)               -->
  <!-- ======================================================== -->
  <g id="card-back" transform="translate(512, 0)">
    <!-- 1. Card Base Background -->
    <rect x="2" y="2" width="${cardW - 4}" height="${cardH - 4}" rx="28" fill="url(#card-bg)"/>
    <rect x="2" y="2" width="${cardW - 4}" height="${cardH - 4}" rx="28" fill="url(#grid-dots)"/>

    <!-- Ambient Center Glow -->
    <circle cx="256" cy="387" r="220" fill="url(#head-aura)"/>

    <!-- Geometric Tech Frame -->
    <rect x="30" y="30" width="${cardW - 60}" height="${cardH - 60}" rx="20" fill="none" stroke="rgba(167, 139, 250, 0.2)" stroke-width="1" stroke-dasharray="6 4"/>

    <!-- Central Monogram & Branding -->
    <g transform="translate(256, 180)">
      <!-- Glowing Hexagon Badge -->
      <polygon points="40,0 80,23 80,69 40,92 0,69 0,23" transform="translate(-40, -46)" fill="rgba(124, 58, 237, 0.2)" stroke="#a78bfa" stroke-width="2"/>
      <text x="0" y="10" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="900" font-size="32" fill="#ffffff" text-anchor="middle" letter-spacing="2">RO</text>
    </g>

    <text x="256" y="270" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="900" font-size="20" fill="#ffffff" letter-spacing="4" text-anchor="middle">RENAN OLIVEIRA</text>
    <text x="256" y="292" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="700" font-size="11" fill="#a78bfa" letter-spacing="3" text-anchor="middle">FULL-STACK DEVELOPER</text>

    <!-- Simulated QR Code Centerpiece -->
    <g transform="translate(196, 340)">
      <!-- QR Background -->
      <rect x="0" y="0" width="120" height="120" rx="12" fill="#ffffff"/>
      <!-- QR Position Markers -->
      <rect x="10" y="10" width="30" height="30" rx="4" fill="#0e0620"/>
      <rect x="16" y="16" width="18" height="18" rx="2" fill="#ffffff"/>
      <rect x="21" y="21" width="8" height="8" fill="#7c3aed"/>

      <rect x="80" y="10" width="30" height="30" rx="4" fill="#0e0620"/>
      <rect x="86" y="16" width="18" height="18" rx="2" fill="#ffffff"/>
      <rect x="91" y="21" width="8" height="8" fill="#7c3aed"/>

      <rect x="10" y="80" width="30" height="30" rx="4" fill="#0e0620"/>
      <rect x="16" y="86" width="18" height="18" rx="2" fill="#ffffff"/>
      <rect x="21" y="91" width="8" height="8" fill="#7c3aed"/>

      <!-- QR Data Modules -->
      <g fill="#0e0620">
        <rect x="48" y="12" width="6" height="6"/>
        <rect x="60" y="18" width="8" height="6"/>
        <rect x="52" y="32" width="16" height="6"/>
        <rect x="20" y="48" width="6" height="12"/>
        <rect x="36" y="52" width="12" height="6"/>
        <rect x="56" y="48" width="8" height="8"/>
        <rect x="72" y="48" width="6" height="14"/>
        <rect x="88" y="52" width="18" height="6"/>
        <rect x="48" y="68" width="14" height="6"/>
        <rect x="70" y="70" width="12" height="8"/>
        <rect x="52" y="88" width="18" height="6"/>
        <rect x="80" y="86" width="6" height="14"/>
        <rect x="94" y="80" width="12" height="6"/>
        <rect x="88" y="98" width="14" height="8"/>
      </g>
    </g>

    <text x="256" y="490" font-family="'Segoe UI', 'Inter', sans-serif" font-weight="700" font-size="10" fill="#e4e4e7" letter-spacing="2" text-anchor="middle">SCAN TO CONNECT</text>
    <text x="256" y="508" font-family="'Segoe UI', monospace" font-size="9" fill="#a78bfa" letter-spacing="1" text-anchor="middle">GITHUB • LINKEDIN • PORTFOLIO</text>

    <!-- Bottom details -->
    <line x1="60" y1="675" x2="452" y2="675" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1"/>
    <text x="256" y="705" font-family="'Segoe UI', monospace" font-size="9" fill="#71717a" letter-spacing="2" text-anchor="middle">PORTFOLIO v2.0 // 2026 EDITION</text>

    <!-- Outer card border -->
    <rect x="2" y="2" width="${cardW - 4}" height="${cardH - 4}" rx="28" fill="none" stroke="url(#border-glow)" stroke-width="1.8"/>
  </g>
</svg>
`;

  console.log('3. Rendering SVG to public/assets/card_custom.png via sharp...');
  await sharp(Buffer.from(svg))
    .png({ quality: 100 })
    .toFile('public/assets/card_custom.png');

  console.log('Badge texture successfully generated at public/assets/card_custom.png!');
}

generateCardTexture().catch(err => {
  console.error('Error generating card texture:', err);
});
