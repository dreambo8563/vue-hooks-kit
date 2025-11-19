import DefaultTheme from 'vitepress/theme'
import DemoUseMouse from '../components/DemoUseMouse.vue'
import type { Theme } from 'vitepress'

// 扩展默认主题配置
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 保留默认 enhanceApp
    if (DefaultTheme.enhanceApp) {
      DefaultTheme.enhanceApp({ app })
    }
    // 手动注册你的演示组件
    app.component('DemoUseMouse', DemoUseMouse)
  }
} satisfies Theme