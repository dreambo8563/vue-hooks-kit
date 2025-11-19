# useMouse

实时获取鼠标位置

## 在线演示

<DemoUseMouse />

## 使用示例
```vue
<script setup>
import { useMouse } from 'my-sdk'

const { x, y } = useMouse()
</script>

<template>
  <p>{{ x }}, {{ y }}</p>
</template>