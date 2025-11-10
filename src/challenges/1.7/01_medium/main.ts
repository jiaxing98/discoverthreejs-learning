import './style.css'
import { World } from './World'
// import { World } from './World/World'

function main() {
  const container = document.querySelector('#scene-container')!

  const startBtn = document.createElement('button')
  startBtn.textContent = 'Start'
  startBtn.addEventListener('click', () => {
    world.start()
  })

  const stopBtn = document.createElement('button')
  stopBtn.textContent = 'Stop'
  stopBtn.addEventListener('click', () => {
    world.stop()
  })

  const btnContainer = document.createElement('div')
  btnContainer.style.display = 'flex'
  btnContainer.style.flexDirection = 'row'
  btnContainer.style.justifyContent = 'center'
  btnContainer.style.gap = '1rem'
  btnContainer.appendChild(startBtn)
  btnContainer.appendChild(stopBtn)

  container.appendChild(btnContainer)

  const world = new World(container)
  world.start()
}

main()
