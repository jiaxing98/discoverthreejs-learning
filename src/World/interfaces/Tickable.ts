import { DirectionalLight, Mesh, PerspectiveCamera } from 'three'

export interface Tickable {
  tick: (delta: number) => void
}

export class TickableMesh extends Mesh implements Tickable {
  tick(delta: number): void {}
}

export class TickablePerspectiveCamera extends PerspectiveCamera implements Tickable {
  tick(delta: number): void {}
}

export class TickableDirectionalLight extends DirectionalLight implements Tickable {
  tick(delta: number): void {}
}
