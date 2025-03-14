import { defineThemeConfig } from 'vuepress-theme-plume'
import notes from './notes/index.ts'

export default defineThemeConfig({
    notes,
    profile: {
        name: 'Isaac 周',
        description: 'Student | Developer',
        avatar: '/avatar.png',
        location: 'Anhui, China',
        organization: 'USTC',
        circle: true,
        layout: 'right',
    },
    social: [
        { icon: 'github', link: 'https://github.com/Isaaczhr' },
        // ... more
    ],
    navbar: [
        { text: '首页', link: '/', icon: 'flowbite:home-outline' },
        { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
        { text: '标签', link: '/blog/tags/', icon: 'mdi:tag-outline' },
        { text: '归档', link: '/blog/archives/', icon: 'material-symbols:archive-outline' },
        { text: 'CTF', link: '/ctf/', icon: 'material-symbols:security-key-outline' },
        { text: 'AI', link: '/ai/', icon: 'mingcute:ai-line' },
    ],
    logo: '/round.png',
})