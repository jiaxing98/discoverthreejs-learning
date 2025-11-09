import { BoxGeometry, Material, Mesh, Vector3 } from 'three'

function createCube(material: Material, vector: Vector3) {
  const geometry = new BoxGeometry()
  const cube = new Mesh(geometry, material)

  cube.rotation.set(-0.5, -0.1, 0.8)
  cube.position.set(vector.x, vector.y, vector.z)
  return cube
}

export { createCube }
