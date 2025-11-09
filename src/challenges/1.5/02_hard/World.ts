import { MathUtils, type PerspectiveCamera, type Scene, type WebGLRenderer } from 'three'

import { createCamera } from '@/World/components/camera'
import { createScene } from '@/World/components/scene'
import { createRenderer } from '@/World/systems/renderer'
import { createLight } from '@/World/components/light'
import { Resizer } from '@/World/systems/Resizer'
import { createCube } from '../01_medium/cube'

let camera: PerspectiveCamera
let scene: Scene
let renderer: WebGLRenderer

class World {
  constructor(container: Element) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    // rotation is additive
    const cubeA = createCube('yellow')
    cubeA.position.set(-2, 0, 0)
    cubeA.rotation.y += Math.PI / 4
    const cubeB = createCube('purple')
    cubeB.position.set(4, 0, 0)
    cubeB.rotation.y += Math.PI / 4
    cubeA.add(cubeB)

    const light = createLight()

    scene.add(cubeA, light)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
