import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three'

function createCube() {
  const geometry = new BoxGeometry()
  const material = new MeshBasicMaterial()
  const cube = new Mesh(geometry, material)

  cube.rotation.set(-0.5, -0.1, 0.8)
  return cube
}

export { createCube }
