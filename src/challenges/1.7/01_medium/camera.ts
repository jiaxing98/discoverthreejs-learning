import { TickablePerspectiveCamera } from './Tickable'

function createCamera() {
  const fov = 35
  const aspect = 1
  const near = 0.1
  const far = 100

  const camera = new TickablePerspectiveCamera(fov, aspect, near, far)

  camera.tick = (delta) => {
    camera.position.z += 1 * delta
  }
  return camera
}

export { createCamera }
