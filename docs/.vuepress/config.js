const path = require('path');

module.exports = {
  title: 'AntDocs',
  theme: 'antdocs',
  description: '一款 Ant Design 设计风格的 VuePress 主题',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/assets/logo.png' }],
    // ['link', { rel: 'stylesheet', href: '/css/ad.css' }],
    ['script', { type: 'text/javascript', src: '/assets/js/push.js' }],
    // ['script', { type: 'text/javascript', src: '/js/ad.js' }],

    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'keywords', content: 'antdocs,antdeisgn,vuepress,vuepress-theme,theme,ant,docs,antd,antdocs of vuepress,主题,vuepress主题,antd设计,blog,vuepress-blog' }]
  ],
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    smoothScroll: true,
    logo: '/assets/logo.png',
    nav: require('./config/nav'),
    sidebar: require('./config/sidebar'),
    sidebarDepth: 3,
    lastUpdated: '上次更新',
    repo: 'https://github.com/zpfz/vuepress-theme-antdocs',
    editLinks: false
  }
};
