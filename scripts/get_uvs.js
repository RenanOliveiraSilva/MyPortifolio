const fs = require('fs');

const glbBuffer = fs.readFileSync('public/assets/kartu.glb');
const jsonLength = glbBuffer.readUInt32LE(12);
const jsonChunk = glbBuffer.slice(20, 20 + jsonLength).toString('utf8');
const gltf = JSON.parse(jsonChunk);

const binStart = 20 + jsonLength + 8;

// Find card mesh primitive
console.log('Meshes:', gltf.meshes);
const cardMesh = gltf.meshes.find(m => m.name.toLowerCase().includes('card'));
console.log('Card mesh:', cardMesh);

const primitive = cardMesh.primitives[0];
console.log('Attributes:', primitive.attributes);

const uvAccessorIdx = primitive.attributes.TEXCOORD_0;
const uvAccessor = gltf.accessors[uvAccessorIdx];
console.log('UV Accessor:', uvAccessor);

const uvBufferView = gltf.bufferViews[uvAccessor.bufferView];
const uvOffset = binStart + (uvBufferView.byteOffset || 0) + (uvAccessor.byteOffset || 0);

// Read min and max UV
console.log('UV Min:', uvAccessor.min, 'Max:', uvAccessor.max);

// Let's find the position accessor to separate front face (Z > 0) from back face (Z < 0)
const posAccessor = gltf.accessors[primitive.attributes.POSITION];
const posBufferView = gltf.bufferViews[posAccessor.bufferView];
const posOffset = binStart + (posBufferView.byteOffset || 0) + (posAccessor.byteOffset || 0);

let frontUvs = { minU: 1, maxU: 0, minV: 1, maxV: 0 };
let backUvs = { minU: 1, maxU: 0, minV: 1, maxV: 0 };

for (let i = 0; i < posAccessor.count; i++) {
  const pZ = glbBuffer.readFloatLE(posOffset + i * 12 + 8);
  const u = glbBuffer.readFloatLE(uvOffset + i * 8);
  const v = glbBuffer.readFloatLE(uvOffset + i * 8 + 4);
  
  if (pZ > 0.001) { // Front face
    frontUvs.minU = Math.min(frontUvs.minU, u);
    frontUvs.maxU = Math.max(frontUvs.maxU, u);
    frontUvs.minV = Math.min(frontUvs.minV, v);
    frontUvs.maxV = Math.max(frontUvs.maxV, v);
  } else if (pZ < -0.001) { // Back face
    backUvs.minU = Math.min(backUvs.minU, u);
    backUvs.maxU = Math.max(backUvs.maxU, u);
    backUvs.minV = Math.min(backUvs.minV, v);
    backUvs.maxV = Math.max(backUvs.maxV, v);
  }
}

console.log('Front UV bounds (0 to 1):', frontUvs);
console.log('Front pixel bounds (1024x1024):', {
  minX: Math.round(frontUvs.minU * 1024),
  maxX: Math.round(frontUvs.maxU * 1024),
  minY: Math.round(frontUvs.minV * 1024),
  maxY: Math.round(frontUvs.maxV * 1024),
  width: Math.round((frontUvs.maxU - frontUvs.minU) * 1024),
  height: Math.round((frontUvs.maxV - frontUvs.minV) * 1024)
});

console.log('Back UV bounds (0 to 1):', backUvs);
console.log('Back pixel bounds (1024x1024):', {
  minX: Math.round(backUvs.minU * 1024),
  maxX: Math.round(backUvs.maxU * 1024),
  minY: Math.round(backUvs.minV * 1024),
  maxY: Math.round(backUvs.maxV * 1024),
  width: Math.round((backUvs.maxU - backUvs.minU) * 1024),
  height: Math.round((backUvs.maxV - backUvs.minV) * 1024)
});
