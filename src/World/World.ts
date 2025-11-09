import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLight } from './components/light'
import { createScene } from './components/scene'
import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'

let camera: PerspectiveCamera
let scene: Scene
let renderer: WebGLRenderer

class World {
  constructor(container: Element) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()

    const light = createLight()

    scene.add(cube, light)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
