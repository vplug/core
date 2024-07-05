import { SketchRuler } from './components/SketchRuler'
import type { Plugin } from 'vue'

export const install: Plugin = app => {
  app.component(SketchRuler.name!, SketchRuler)
}

export const SketchRulerPlugin = {
  install,
}
export { SketchRulerPlugin as default }

export * from './components/CanvasRuler'
export * from './components/RulerLine'
export * from './components/RulerWrapper'
export * from './components/SketchRuler'
