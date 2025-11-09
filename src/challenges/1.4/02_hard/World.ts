import { createCamera } from '@/World/components/camera'
import { createLight } from '@/World/components/light'
import { createScene } from '@/World/components/scene'
import { createRenderer } from '@/World/systems/renderer'
import { Resizer } from '@/World/systems/Resizer'
import {
  MeshBasicMaterial,
  MeshStandardMaterial,
  Vector3,
  type PerspectiveCamera,
  type Scene,
  type WebGLRenderer,
} from 'three'
import { createCube } from './cube'

let camera: PerspectiveCamera
let scene: Scene
let renderer: WebGLRenderer

class World {
  constructor(container: Element) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const standardCube = createCube(new MeshStandardMaterial(), new Vector3(-2, 0, 0))
    const basicCube = createCube(new MeshBasicMaterial(), new Vector3(2, 0, 0))

    const light = createLight()

    scene.add(standardCube, basicCube, light)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
