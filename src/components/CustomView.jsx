import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function CustomView(props) {
  const meshRef = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);

  // Rotate the mesh slightly on each frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}


export default CustomView