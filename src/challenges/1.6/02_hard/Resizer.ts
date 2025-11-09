import type { PerspectiveCamera, WebGLRenderer } from 'three'

const setSize = (container: Element, camera: PerspectiveCamera, renderer: WebGLRenderer) => {
  const width = 256
  const height = 256
  // set the camera's aspect ratio
  camera.aspect = width / height

  // update the camera's frustum
  camera.updateProjectionMatrix()

  // update the size of the renderer AND the canvas
  renderer.setSize(width, height)

  // set the pixel ratio (for mobile devices)
  // renderer.setPixelRatio(4)
  renderer.setPixelRatio(0.5)
}

class Resizer {
  constructor(container: Element, camera: PerspectiveCamera, renderer: WebGLRenderer) {
    // set initial size
    setSize(container, camera, renderer)

    window.addEventListener('resize', () => {
      // set the size again if a resize occurs
      setSize(container, camera, renderer)
      this.onResize()
    })
  }

  onResize() {}
}

export { Resizer }
