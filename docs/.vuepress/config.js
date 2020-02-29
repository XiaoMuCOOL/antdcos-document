const path = require('path');

module.exports = {
  title: 'AntDocs',
  theme: 'antdocs',
  description: '一款 Ant Design 设计风格的 VuePress 主题',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/assets/logo.png' }]
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
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/zpfz/vuepress-theme-antdocs',
    editLinks: false
  }
};
