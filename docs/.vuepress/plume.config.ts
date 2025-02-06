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
        { text: '首页', link: '/' },
        { text: '博客', link: '/blog/' },
        { text: '标签', link: '/blog/tags/' },
        { text: '归档', link: '/blog/archives/' },
        { text: 'CTF', link: '/ctf/' },
    ],
})