const fs = require('fs');
const svg = fs.readFileSync('public/perfil.svg', 'utf8');
const match = svg.match(/xlink:href="data:image\/png;base64,([^"]+)"/);
if (match) {
  fs.writeFileSync('public/perfil.png', Buffer.from(match[1], 'base64'));
  console.log('Successfully extracted public/perfil.png');
} else {
  console.log('No base64 found');
}
