import { defineConfig } from 'vitepress';
import { set_sidebar } from '../utils/auto_sidebar.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/MgeWeb/',
  title: "MgeWeb",
  head: [["link", { rel: "icon", href: "/MgeWeb/public/logo.svg"}]],
  description: "MgeWeb",
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Swift', link: '/Swift' },
      // { text: 'Examples', link: '/Examples' }
    ],

    sidebar: {
      '/Swift': set_sidebar('/Swift'),
    },

    outlineTitle: "目录",
    outline: [2, 6],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    footer: {
      copyright: "Copyright @ 2024 Mgeeeeee"
    }
  }
  
})
