import { createCamera } from '@/World/components/camera'
import { createScene } from '@/World/components/scene'
import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createRenderer } from './renderer'
import { createCube } from '@/World/components/cube'
import { createLight } from '@/World/components/light'
import { Resizer } from '@/World/systems/Resizer'

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
    // resizer.onResize = () => {
    //   this.render()
    // }
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
