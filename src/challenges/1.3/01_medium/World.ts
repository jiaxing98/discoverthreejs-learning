import { createCamera } from '@/World/components/camera'
import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createScene } from '../00_easy/scene'
import { createRenderer } from '@/World/systems/renderer'
import { createCube } from '@/World/components/cube'
import { Resizer } from '@/World/systems/Resizer'
import { createCone } from './cone'

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
    cube.position.set(-2, 0, 0)
    scene.add(cube)

    const cone = createCone()
    cone.position.set(2, 0, 0)
    scene.add(cone)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
