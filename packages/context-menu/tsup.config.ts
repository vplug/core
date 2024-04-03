import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  format: ['cjs', 'esm', 'iife'],
  target: ['node18', 'es2022'],
  external: ['vue'],
})
