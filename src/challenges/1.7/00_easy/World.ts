import { createCamera } from '@/World/components/camera'
import { createLight } from '@/World/components/light'
import { createScene } from '@/World/components/scene'
import { Loop } from '@/World/systems/Loop'
import { createRenderer } from '@/World/systems/renderer'
import { Resizer } from '@/World/systems/Resizer'
import type { Mesh, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createCube } from './cube'

let camera: PerspectiveCamera
let scene: Scene
let renderer: WebGLRenderer
let loop: Loop

class World {
  constructor(container: Element) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)

    const rotate = (mesh: Mesh, delta: number, secondsPerRotation: number) => {
      const rotation = 2 * Math.PI
      const radiansPerSecond = rotation / secondsPerRotation
      mesh.rotation.x += radiansPerSecond * delta
      mesh.rotation.y += radiansPerSecond * delta
      mesh.rotation.z += radiansPerSecond * delta
    }

    const translate = (mesh: Mesh, delta: number, secondsPerUnit: number) => {
      const unitsPerSecond = 1 / secondsPerUnit
      mesh.position.y += unitsPerSecond * delta
    }

    const cubeA = createCube((delta) => rotate(cubeA, delta, 100))
    cubeA.position.set(-2, 0, 0)
    loop.updatables.push(cubeA)

    const cubeB = createCube((delta) => rotate(cubeB, delta, 1))
    cubeB.position.set(2, 0, 0)
    loop.updatables.push(cubeB)

    const cubeC = createCube((delta) => translate(cubeC, delta, 1))
    loop.updatables.push(cubeC)

    const light = createLight()

    scene.add(cubeA, cubeB, cubeC, light)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}

export { World }
