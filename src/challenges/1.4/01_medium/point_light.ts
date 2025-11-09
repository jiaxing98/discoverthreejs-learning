import { PointLight } from 'three'

function createPointLight() {
  const light = new PointLight('white', 8)
  light.position.set(0, 0, 5)

  return light
}

export { createPointLight }
