import { Plugin } from 'vue'
import { CountTo } from './components/CountTo'

export const install: Plugin = app => {
  app.component(CountTo.name!, CountTo)
}

export const CountToPlugin = {
  install,
}
export { CountToPlugin as default }

export * from './components/CountTo'
