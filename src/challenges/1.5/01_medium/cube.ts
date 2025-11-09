import { BoxGeometry, Mesh, MeshStandardMaterial, type ColorRepresentation } from 'three'

function createCube(color: ColorRepresentation) {
  const geometry = new BoxGeometry()
  const material = new MeshStandardMaterial({ color })
  const cube = new Mesh(geometry, material)

  return cube
}

export { createCube }
