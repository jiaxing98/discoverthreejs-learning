import { createLight } from '@/World/components/light'
import { createScene } from '@/World/components/scene'
import { Loop } from '@/World/systems/Loop'
import { createRenderer } from '@/World/systems/renderer'
import { Resizer } from '@/World/systems/Resizer'
import type { Mesh, Object3D, Scene, WebGLRenderer } from 'three'
import { createCamera } from '../01_medium/camera'
import type { TickablePerspectiveCamera } from '../01_medium/Tickable'
import { createCube } from './cube'

let camera: TickablePerspectiveCamera
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

    camera.position.set(0, 0, 10)

    const translate = (object: Object3D, delta: number, speed: number, totalDistance: number) => {
      const move = speed * delta
      object.position.x =
        ((object.position.x + move + totalDistance / 2) % totalDistance) - totalDistance / 2
    }

    const pingpong = (
      object: Object3D,
      elapsedTime: number, // total elapsed time in seconds
      totalDistance: number, // full width of movement
      period: number // time (seconds) to complete one full cycle
    ) => {
      const amplitude = totalDistance / 2 // how far left/right it goes
      const omega = (2 * Math.PI) / period // angular speed (radians per second)
      object.position.x = amplitude * Math.sin(omega * elapsedTime)
    }

    const cubeA = createCube((delta) => translate(cubeA, delta, 3, 25))
    cubeA.position.y = 1
    loop.updatables.push(cubeA)

    let elapsedTime = 0
    const cubeB = createCube((delta) => {
      elapsedTime += delta
      pingpong(cubeB, elapsedTime, 20, 10)
    })
    cubeB.position.y = -1
    loop.updatables.push(cubeB)

    const light = createLight()

    scene.add(cubeA, cubeB, light)

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
