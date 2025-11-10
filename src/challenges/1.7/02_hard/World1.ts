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

    const pingpong = (
      object: Object3D,
      elapsedTime: number, // total elapsed time in seconds
      distance: number, // zoom in / zoom out distance
      period: number // time (seconds) to complete one full cycle
    ) => {
      const amplitude = distance
      const omega = (2 * Math.PI) / period // angular speed (radians per second)
      object.position.z = amplitude * Math.sin(omega * elapsedTime)
      console.log(object.position.z)
    }

    let elapsedTime = 0
    camera.position.set(0, 0, 10)
    camera.tick = (delta) => {
      elapsedTime += delta
      pingpong(camera, elapsedTime, 10, 3)
    }
    loop.updatables.push(camera)

    const rotate = (mesh: Mesh, delta: number, secondsPerRotation: number) => {
      const rotation = 2 * Math.PI
      const radiansPerSecond = rotation / secondsPerRotation
      mesh.rotation.x += radiansPerSecond * delta
      mesh.rotation.y += radiansPerSecond * delta
      mesh.rotation.z += radiansPerSecond * delta
    }

    const cube = createCube((delta) => rotate(cube, delta, 1))
    loop.updatables.push(cube)

    const light = createLight()

    scene.add(cube, light)

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
