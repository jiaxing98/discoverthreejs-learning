import { WebGLRenderer } from 'three'

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: false })

  return renderer
}

export { createRenderer }
