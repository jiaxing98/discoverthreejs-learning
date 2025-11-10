import { TickableMesh } from '@/World/interfaces/Tickable'
import { BoxGeometry, MeshStandardMaterial } from 'three'

function createCube(onTick: (delta: number) => void) {
  const geometry = new BoxGeometry()
  const material = new MeshStandardMaterial({ color: 'peachpuff' })
  const cube = new TickableMesh(geometry, material)

  cube.rotation.set(-0.5, -0.1, 0.8)

  cube.tick = onTick
  return cube
}

export { createCube }
