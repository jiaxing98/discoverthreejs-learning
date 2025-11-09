import { DirectionalLight } from 'three'

function createLight() {
  const light = new DirectionalLight('white', 8)
  light.position.set(0, 0, 5)
  light.rotation.set(10, 10, 10) // no effect
  light.scale.set(2, 2, 2) // no effect

  return light
}

export { createLight }
