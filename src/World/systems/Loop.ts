import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import type { Tickable } from '../interfaces/Tickable'

const clock = new Clock()

class Loop {
  camera: PerspectiveCamera
  scene: Scene
  renderer: WebGLRenderer
  updatables: Tickable[]

  constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
    this.camera = camera
    this.scene = scene
    this.renderer = renderer
    this.updatables = []
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick()
      this.renderer.render(this.scene, this.camera)
    })
  }

  stop() {
    this.renderer.setAnimationLoop(null)
  }

  tick() {
    // ? without using getDelta, the tick will update according to the FPS
    // * .getDelta tells us how much time has passed since the last time we called .getDelta
    // ! only call the getDelta function once per frame!
    const delta = clock.getDelta()

    for (const x of this.updatables) {
      x.tick(delta)
    }
  }
}

export { Loop }
