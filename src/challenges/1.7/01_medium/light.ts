import { TickableDirectionalLight } from './Tickable'

function createLight() {
  const light = new TickableDirectionalLight('white', 8)
  light.position.set(10, 10, 10)

  light.tick = (delta) => {
    light.position.z += 10 * delta
  }

  return light
}

export { createLight }
