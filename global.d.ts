// global.d.ts — Type declarations for packages without bundled types

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare module '@react-three/rapier' {
  export const BallCollider: any;
  export const CuboidCollider: any;
  export const Physics: any;
  export const RigidBody: any;
  export const useRopeJoint: any;
  export const useSphericalJoint: any;
}
