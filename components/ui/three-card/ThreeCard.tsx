'use client';

import { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Band from './Band';
import type { BandProps } from './Band';
import './three-card.css';

/**
 * Overrides R3F's auto-lookAt so we can shift the camera
 * without the scene snapping back to center.
 */
function CameraRig({ offsetX = 0 }: { offsetX: number }) {
  const camera = useThree((s) => s.camera);
  useEffect(() => {
    camera.position.x = offsetX;
    // Look straight ahead (along -Z) from offset position
    camera.lookAt(offsetX, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, offsetX]);
  return null;
}

export interface ThreeCardProps extends BandProps {
  /** CSS width of the wrapper (default: '100%') */
  width?: string;
  /** CSS height of the wrapper (default: '100vh') */
  height?: string;
  /** Custom CSS class for the wrapper */
  className?: string;
  /** If true, the canvas background is transparent (blends with page bg) */
  transparent?: boolean;
  /** Horizontal camera offset — negative shifts scene RIGHT, positive shifts LEFT (default: 0) */
  cameraOffsetX?: number;
}

export default function ThreeCard({
  width = '100%',
  height = '100vh',
  className = '',
  transparent = false,
  cameraOffsetX = 0,
  glbPath,
  texturePath,
  cardTexturePath,
  bandColor,
  cardScale,
  maxSpeed,
  minSpeed,
}: ThreeCardProps) {
  const style = {
    '--three-card-width': width,
    '--three-card-height': height,
  } as React.CSSProperties;

  return (
    <div
      className={`three-card-wrapper ${className}`.trim()}
      style={style}
    >
      <Suspense
        fallback={
          <div className="three-card-loading">Carregando 3D…</div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 13], fov: 25 }}
          gl={{ alpha: transparent }}
          style={transparent ? { background: 'transparent' } : undefined}
        >
          <CameraRig offsetX={cameraOffsetX} />
          <ambientLight intensity={Math.PI} />
          <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
            <Band
              glbPath={glbPath}
              texturePath={texturePath}
              cardTexturePath={cardTexturePath}
              bandColor={bandColor}
              cardScale={cardScale}
              maxSpeed={maxSpeed}
              minSpeed={minSpeed}
            />
          </Physics>
          <Environment background={!transparent} blur={0.75}>
            {!transparent && <color attach="background" args={['black']} />}
            <Lightformer
              intensity={2}
              color="white"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={10}
              color="white"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Canvas>
      </Suspense>
    </div>
  );
}
