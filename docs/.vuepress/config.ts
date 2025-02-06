import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  locales: {
    '/': { lang: 'zh-CN', title: 'IBlog' }
  },
  theme: plumeTheme({
    plugins: { git: true },
    contributors: {
      mode: 'block',
    },
  }),
  bundler: viteBundler(),
})
