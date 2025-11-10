import { World } from './challenges/1.7/02_hard/World1'
import './style.css'
// import { World } from './World/World'

function main() {
  const container = document.querySelector('#scene-container')!

  const world = new World(container)
  world.start()
}

main()
