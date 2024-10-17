import { computed, defineComponent, h, onMounted, ref, unref, watch } from 'vue'
import { DEFAULT_CONFIG, useGlobalConfig } from '../config'
import { events, props } from '../types'
import { isNumber } from '../utils'
import type { Props } from '../types'

export const CountTo = defineComponent({
  name: 'CountTo',

  props: {
    ...props,
  },

  emits: {
    ...events,
  },

  setup(props, context) {
    const defaultConfig = {
      ...DEFAULT_CONFIG,
      ...useGlobalConfig(),
    }
    const config = computed<Required<Props>>(() => ({
      tag: props.tag ?? defaultConfig.tag,
      startVal: props.startVal ?? defaultConfig.startVal,
      endVal: props.endVal ?? defaultConfig.endVal,
      duration: props.duration ?? defaultConfig.duration,
      autoplay: props.autoplay ?? defaultConfig.autoplay,
      decimals: props.decimals ?? defaultConfig.decimals,
      decimal: props.decimal ?? defaultConfig.decimal,
      separator: props.separator ?? defaultConfig.separator,
      prefix: props.prefix ?? defaultConfig.prefix,
      suffix: props.suffix ?? defaultConfig.suffix,
      color: props.color ?? defaultConfig.color,
      useEasing: props.useEasing ?? defaultConfig.useEasing,
      transition: props.transition ?? defaultConfig.transition,
    }))
    const sourceValue = ref(config.value.startVal)
    const outputValue = ref(config.value.startVal)
    const isDisbaled = ref(false)

    const formatNumber = (value: number | string) => {
      if (!value && value !== 0) return ''

      const { decimals, decimal, separator, suffix, prefix } = config.value
      value = Number(value).toFixed(decimals)
      value += ''

      const x = value.split('.')
      let x1 = x[0]
      const x2 = x.length > 1 ? decimal + x[1] : ''

      const rgx = /(\d+)(\d{3})/
      if (separator && !isNumber(separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, `$1${separator}$2`)
        }
      }
      return prefix + x1 + x2 + suffix
    }

    const normalizedValue = computed(() => formatNumber(unref(outputValue)))

    const run = () => {
      outputValue.value = config.value.endVal
    }
    const start = () => {
      run()
      sourceValue.value = config.value.endVal
    }
    const pause = () => {
      isDisbaled.value = true
    }
    const resume = () => {
      isDisbaled.value = false
    }
    const reset = () => {
      sourceValue.value = config.value.startVal
      run()
    }

    watch([() => config.value.startVal, () => config.value.endVal], () => {
      if (!config.value.autoplay) return
      start()
    })

    onMounted(() => {
      if (!config.value.autoplay) return
      start()
    })

    context.expose({
      /**
       *
       */
      start,

      /**
       *
       */
      pause,

      /**
       *
       */
      resume,

      /**
       *
       */
      reset,
    })

    return () =>
      h(
        config.value.tag,
        {
          class: { 'is-disabled': isDisbaled },
          style: {
            color: config.value.color,
          },
        },
        [normalizedValue.value],
      )
  },
})
