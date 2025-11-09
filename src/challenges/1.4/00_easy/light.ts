import { DirectionalLight } from 'three'

function createLight() {
  const light = new DirectionalLight('blue', 8)
  light.position.set(0, 10, 10)

  return light
}

export { createLight }
