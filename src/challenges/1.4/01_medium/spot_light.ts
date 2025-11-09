import { SpotLight } from 'three'

function createSpotLight() {
  const light = new SpotLight('white', 8)
  light.position.set(0, 0, 5)

  return light
}

export { createSpotLight }
