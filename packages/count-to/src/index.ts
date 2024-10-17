import { CountTo } from './components/CountTo'
import type { Plugin } from 'vue'

export const install: Plugin = app => {
  app.component(CountTo.name!, CountTo)
}

export const CountToPlugin = {
  install,
}
export { CountToPlugin as default }

export * from './types'
export * from './components/CountTo'
