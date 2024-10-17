import type { ExtractPropTypes } from 'vue'

export const props = {
  startVal: Number,
  endVal: Number,
  duration: Number,
  autoplay: {
    type: Boolean,
    default: true,
  },

  decimals: {
    type: Number,
    default: 0,
    validator(value: number) {
      return value >= 0
    },
  },

  tag: String,
  color: String,

  prefix: String,
  suffix: String,
  separator: String,
  decimal: String,

  useEasing: {
    type: Boolean,
    default: true,
  },

  transition: String,
}

export type Props = ExtractPropTypes<typeof props>

export enum EventKey {
  Start = 'start',
  End = 'end',
  Pause = 'pause',
  Resume = 'resume',
}

export const events = {
  [EventKey.Start]: () => {},
  [EventKey.End]: () => {},
  [EventKey.Pause]: () => {},
  [EventKey.Resume]: () => {},
}

export type Events = typeof events
