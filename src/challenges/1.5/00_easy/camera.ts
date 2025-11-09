import { PerspectiveCamera } from 'three'

function createCamera() {
  const fov = 35
  const aspect = 1
  const near = 0.1
  const far = 100

  const camera = new PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(0, 0, 10)
  camera.rotation.set(-0.5, -0.1, 0.8)
  camera.scale.set(2, 2, 2) // no effect

  return camera
}

export { createCamera }
