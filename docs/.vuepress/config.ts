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
    plugins: {
      git: true,
      comment: {
        provider: 'Giscus', // "Artalk“ | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'Isaaczhr/blog.izhr.top',
        repoId: 'R_kgDON0jCDA',
        category: 'General',
        categoryId: 'DIC_kwDON0jCDM4Cmt0v',
      },
      shiki: {
        languages: ['javascript', 'typescript', 'vue', 'bash', 'sh', 'sql'],
      },
    },
    hostname: 'https://blog.izhr.top',
    contributors: {
      mode: 'inline',
      info: [
        {
          username: 'Isaaczhr',
          alias: ['Zhou Haoran'], // 别名，本地 git 配置中的用户名
        }
      ]
    },
    changelog: {
      maxCount: 10,
      repoUrl: 'https://github.com/Isaaczhr/blog.izhr.top',
      commitUrlPattern: ':repo/commit/:hash',
      issueUrlPattern: ':repo/issues/:issue',
      tagUrlPattern: ':repo/releases/tag/:tag'
    },
  }),
  bundler: viteBundler(),
  head: [
    [
      'link', { rel: 'icon', href: '/round.png' }
    ]
  ],
})
