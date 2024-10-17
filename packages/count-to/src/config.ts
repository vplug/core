import { inject } from 'vue'
import type { App, InjectionKey } from 'vue'
import type { Props } from './types'

export const DEFAULT_CONFIG: Readonly<Required<Props>> = Object.freeze({
  startVal: 0,
  endVal: 0,
  duration: 1500,
  autoplay: true,
  decimals: 0,
  prefix: '',
  suffix: '',
  separator: ',',
  decimal: '.',
  color: '',
  tag: 'span',
  useEasing: true,
  transition: 'linear',
})

export const GLOBAL_CONFIG_KEY: InjectionKey<Props> = Symbol('count-to-config')

export const injectGlobalConfig = (app: App, config: Props) => {
  app.provide(GLOBAL_CONFIG_KEY, config)
}

export const useGlobalConfig = () => {
  return inject(GLOBAL_CONFIG_KEY, {} as Props)
}
