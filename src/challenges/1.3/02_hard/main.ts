import { World } from '@/World/World'
import './style.css'

function main() {
  const renderBtn = document.querySelector('#render-btn')

  renderBtn?.addEventListener('click', () => {
    // Remove button from the DOM
    renderBtn.remove()

    const container = document.querySelector('#scene-container')!
    const world = new World(container)
    world.render()
  })
}

main()
