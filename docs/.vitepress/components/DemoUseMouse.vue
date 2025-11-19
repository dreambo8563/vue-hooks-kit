<script setup lang="ts">
import { useMouse } from '../../../src/useMouse' // 指向你的 Hook 源码
const { x, y } = useMouse()
</script>

<template>
  <div style="padding: 10px; border: 1px solid #ccc;">
    鼠标位置：{{ x }}, {{ y }}
  </div>
</template>