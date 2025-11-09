import { MathUtils, type PerspectiveCamera, type Scene, type WebGLRenderer } from 'three'

import { createCamera } from '@/World/components/camera'
import { createCube } from './cube'
import { createScene } from '@/World/components/scene'
import { createRenderer } from '@/World/systems/renderer'
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

    // translation is additive
    const cubeA = createCube('red')
    cubeA.position.set(-2, 2, 0)
    const cubeB = createCube('blue')
    cubeB.position.set(4, 0, 0)
    cubeA.add(cubeB)

    // rotation is additive
    const cubeC = createCube('yellow')
    cubeC.position.set(-2, 0, 0)
    cubeC.rotation.y += MathUtils.degToRad(45)
    const cubeD = createCube('purple')
    cubeD.position.set(4, 0, 0)
    cubeD.rotation.y += MathUtils.degToRad(45)
    cubeC.add(cubeD)

    // scale is multiplicative, 0.5 * 2 = 1.0
    const cubeE = createCube('black')
    cubeE.position.set(-2, -2, 0)
    cubeE.scale.set(0.5, 0.5, 0.5)
    const cubeF = createCube('white')
    cubeF.position.set(4, 0, 0)
    cubeF.scale.set(2, 2, 2)
    cubeE.add(cubeF)

    const light = createLight()

    scene.add(cubeA, cubeC, cubeE, light)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
