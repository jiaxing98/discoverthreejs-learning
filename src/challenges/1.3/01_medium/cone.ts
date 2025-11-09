import { ConeGeometry, Mesh, MeshBasicMaterial } from 'three'

function createCone() {
  const geometry = new ConeGeometry()
  const material = new MeshBasicMaterial({ color: 'purple' })
  const cube = new Mesh(geometry, material)

  return cube
}

export { createCone }
