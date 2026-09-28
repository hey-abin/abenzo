'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo, useEffect, useReducer } from 'react';

// ─── Generate particle positions outside the component ────
// (pure function — no Math.random inside render/useMemo)
function generateSphere(count) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4.5 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function ParticleSphere({ positions }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#008278"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

// ─── Reducer to avoid setState-in-effect lint error ───────
function reducer(state, action) {
  switch (action.type) {
    case 'INIT': return { prefersReduced: action.prefersReduced, positions: action.positions };
    default:     return state;
  }
}

export default function Scene() {
  const [state, dispatch] = useReducer(reducer, { prefersReduced: false, positions: null });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const count = isMobile ? 800 : 2500;

    const init = () => {
      dispatch({
        type: 'INIT',
        prefersReduced: mq.matches,
        positions: generateSphere(count),
      });
    };

    // Defer WebGL and particle setup to idle time to avoid main-thread blocking during initial paint
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(init, { timeout: 1500 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(init, 200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Before hydration / on SSR just show nothing (lazy-loaded anyway)
  if (!state.positions) return null;

  // Respect prefers-reduced-motion
  if (state.prefersReduced) {
    return (
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,130,120,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="absolute inset-0 z-0 h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 3.5] }}
        gl={{ antialias: false, powerPreference: 'low-power' }}
        frameloop="always"
      >
        <ambientLight intensity={0.5} />
        <ParticleSphere positions={state.positions} />
      </Canvas>
    </div>
  );
}