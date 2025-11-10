import { BoxGeometry, MathUtils, MeshStandardMaterial } from 'three'
import { TickableMesh } from '../interfaces/Tickable'

function createCube() {
  const geometry = new BoxGeometry()
  const material = new MeshStandardMaterial({ color: 'peachpuff' })
  const cube = new TickableMesh(geometry, material)

  cube.rotation.set(-0.5, -0.1, 0.8)

  const radiansPerSecond = MathUtils.degToRad(30)
  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * delta
    cube.rotation.y += radiansPerSecond * delta
    cube.rotation.z += radiansPerSecond * delta
  }
  return cube
}

export { createCube }
