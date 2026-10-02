const fs = require('fs');

const glbBuffer = fs.readFileSync('public/assets/kartu.glb');
// In GLB, JSON chunk is first, followed by BIN chunk
const jsonLength = glbBuffer.readUInt32LE(12);
const jsonChunk = glbBuffer.slice(20, 20 + jsonLength).toString('utf8');
const gltf = JSON.parse(jsonChunk);

console.log('Images in GLB:', gltf.images);
console.log('Materials in GLB:', gltf.materials);
console.log('Textures in GLB:', gltf.textures);

if (gltf.images && gltf.images.length > 0) {
  gltf.images.forEach((img, idx) => {
    if (img.bufferView !== undefined) {
      const bv = gltf.bufferViews[img.bufferView];
      const binStart = 20 + jsonLength + 8; // header(12) + chunk0(8+jsonLength) + chunk1 header(8)
      const offset = binStart + (bv.byteOffset || 0);
      const imgBuffer = glbBuffer.slice(offset, offset + bv.byteLength);
      const ext = img.mimeType === 'image/jpeg' ? 'jpg' : 'png';
      fs.writeFileSync(`public/assets/extracted_card_texture_${idx}.${ext}`, imgBuffer);
      console.log(`Extracted texture ${idx} (${img.name || 'unnamed'}): ${img.mimeType}, ${bv.byteLength} bytes`);
    }
  });
}
