import { defineConfig } from 'vitepress';

// import { set_sidebar } from '../utils/auto_sidebar.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  // base: '/MgeWeb/',
  title: "MgeWeb",
  head: [["link", { rel: "icon", href: "/logo.png"}]],
  description: "MgeWeb",
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Swift', link: '/Swift' },
    ],

    sidebar: {
      '/Swift/': [
        {
          text: 'Swift',
          collapsed: false,
          items : [
            { text: 'Swift', link :'/Swift/Swift' },
          ]
        },
        {
          text: 'SwiftUI',
          collapsed: false,
          items : [
            { text: 'SwiftUI', link: '/Swift/SwiftUI' }
          ]
        },
        {
          text: 'SwiftData',
          collapsed: false,
          items : [
            { text: 'SwiftData', link :'/Swift/SwiftData' }
          ]
        }
      ]
    },

    // sidebar: {
    //   '/Swift': set_sidebar('/Swift'),
    // },

    outlineTitle: "目录",
    outline: [2, 6],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    footer: {
      copyright: "Copyright @ 2024 Mgeeeeee"
    },
    docFooter: {
      prev: false,
      next: false
    }
  }
  
})
