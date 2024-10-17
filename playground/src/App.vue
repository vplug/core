<script lang="ts" setup>
import { CountTo } from '@vplug/count-to'
</script>

<template>
  <main class="relative overflow-hidden h-screen flex justify-center items-center">
    <CountTo
      :start-val="0"
      :end-val="2000"
      class="text-5xl color-blue-700"
    />
  </main>
</template>
