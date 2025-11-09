import { createCamera } from '@/World/components/camera'
import { createLight } from '@/World/components/light'
import { createScene } from '@/World/components/scene'
import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createRenderer } from '../00_easy/renderer'
import { createCube } from '@/World/components/cube'
import { Resizer } from './Resizer'

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
    cube.position.set(0, 0, 8)

    const light = createLight()

    scene.add(cube, light)

    camera.position.x += 0.6
    camera.position.y += 0.2
    camera.position.z -= 1

    const resizer = new Resizer(container, camera, renderer)
    resizer.onResize = () => {
      this.render()
    }
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
