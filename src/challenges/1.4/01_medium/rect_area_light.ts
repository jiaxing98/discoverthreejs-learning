import { RectAreaLight } from 'three'

function createRectAreaLight() {
  const light = new RectAreaLight('white', 4)
  light.position.set(0, 0, 5)

  return light
}

export { createRectAreaLight }
