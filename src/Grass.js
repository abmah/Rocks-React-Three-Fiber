import { useGLTF } from "@react-three/drei"
export default function Grass() {
  const grass = useGLTF('grass1.glb')


  return <>
    <primitive scale={0.4} position-y={-0.5} object={grass.scene} />
  </>
}