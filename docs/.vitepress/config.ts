import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My SDK',
  description: 'Vue Hooks SDK 文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      { text: 'Hooks', link: '/hooks/' }
    ],
    sidebar: {
      '/guide': [
        { text: '指南', link: '/guide' }
      ],
      '/hooks/': [
        {
          text: 'Hooks 列表',
          items: [
            { text: 'useMouse', link: '/hooks/useMouse' },
          ]
        }
      ]
    }
  }
})