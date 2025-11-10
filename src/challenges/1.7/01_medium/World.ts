import { createCube } from '@/World/components/cube'
import { createScene } from '@/World/components/scene'
import { Loop } from '@/World/systems/Loop'
import { createRenderer } from '@/World/systems/renderer'
import { Resizer } from '@/World/systems/Resizer'
import type { Scene, WebGLRenderer } from 'three'
import { createCamera } from './camera'
import { createLight } from './light'
import type { TickablePerspectiveCamera } from './Tickable'

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
    loop.updatables.push(camera)

    const cube = createCube()
    loop.updatables.push(cube)

    const light = createLight()
    loop.updatables.push(light)

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
