import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'

function createCube() {
  const geometry = new BoxGeometry()
  const material = new MeshStandardMaterial({ color: 'peachpuff' })
  const cube = new Mesh(geometry, material)

  cube.position.set(0, 0, 1)
  cube.rotation.set(-0.5, -0.1, 0.8)
  cube.scale.set(2, 2, 2)
  return cube
}

export { createCube }
