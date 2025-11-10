import type { Tickable } from '@/World/interfaces/Tickable'
import { DirectionalLight, PerspectiveCamera } from 'three'

export class TickablePerspectiveCamera extends PerspectiveCamera implements Tickable {
  tick(delta: number): void {}
}

export class TickableDirectionalLight extends DirectionalLight implements Tickable {
  tick(delta: number): void {}
}
