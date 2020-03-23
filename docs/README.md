---
home: true
heroImage: /assets/logo.png
actionText: 快速上手 →
actionLink: /guide/
features:
- title: Less 预处理器
  details: 从 Stylus 样式过渡到 Less 样式，统一使用预处理器，让 node_modules 不再过度臃肿。
- title: Ant Design 风格
  details: 主题搭载 Ant Design of Vue 组件，支持 Markdown 语法与 Ant Design 组件混用。
- title: 各种功能优化
  details: 新增底部栏目设置，优化行内代码、代码块以及其他各种显示效果和动画，真正实现风格迁移。
footerColumn: 4
footerWrap: 
- headline: 生态系统
  items:
  - title: AntDocs
    link: https://github.com/zpfz/vuepress-theme-antdocs/
    details: VuePress 主题
  - title: VuePress-Creator
    link: https://zpfz.github.io/vuepress-creator/
    details: VuePress CLI
  - title: Document
    link: https://github.com/zpfz/antdcos-document/
    details: 文档源文件
- headline: 资源链接
  items:
  - title: VuePress
    link: https://vuepress.vuejs.org/zh/
  - title: Ant Design Vue
    link: https://antdv.com/
- headline: 社区交流
  items:
  - title: VuePress 社区
    link: https://zhuanlan.zhihu.com/press-of-vue/
    details: 知乎专栏
  - title: VuePress 社区
    link: https://shang.qq.com/wpa/qunwpa?idkey=fce20f9d7a5620dbb261b31b6bd01f726c9e24e7697fcba4ea7927d5dc971ac5
    details: QQ交流群
  - title: 入驻申请
    link: https://wj.qq.com/s2/5692294/796a/
    details: 插件/脚本/案例
  - title: 报告 Bug
    link: https://github.com/zpfz/vuepress-theme-antdocs/issues
    details: Github issue
- headline: 作者博客
  items:
  - title: 掘金
    link: https://juejin.im/user/5d07466b51882554d6312922/
    details: 一个帮助开发者成长的社区
  - title: CSDN
    link: https://blog.csdn.net/zpfz756/
    details: 专业IT技术社区
footer: MIT Licensed | Copyright © 2020-present Feng Left-Handed
---

# 快速上手

## 安装主题

使用 `yarn` 安装 `AntDocs` 主题：
```bash
yarn add vuepress-theme-antdocs
```
或者使用 `npm` 安装它：
```bash
npm i vuepress-theme-antdocs
```
如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 引用主题

打开 `.vuepress/config.js` 文件，然后在合适位置引用它：

```js
module.exports = {
  ...
  theme: 'antdocs',
  ...
}
```
如果你对 VuePress 主题配置不是很了解，请点这里：[使用主题](https://vuepress.vuejs.org/zh/theme/using-a-theme.html#%E4%B8%BB%E9%A2%98%E7%9A%84%E7%BC%A9%E5%86%99)  

配置完毕后，你就可以直接 `yarn run docs:dev` 或 `npm run docs:dev` 查看效果。

## 效果预览

<p align="center"><img src="https://s2.ax1x.com/2020/02/28/3B3lOf.png"/></p>

## 贡献者

<p></p>

<a-tooltip placement="bottom">
  <template slot="title">
    左撇峰子
  </template>
  <a-avatar src="https://s2.ax1x.com/2020/02/28/3rs23q.jpg" :size="54"/>
</a-tooltip>
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    Guojun Chen
  </template>
  <a-avatar src="https://s2.ax1x.com/2020/02/29/3yu9OK.jpg" :size="54"/>
</a-tooltip>  

<p>&nbsp; </p>  

[我也想为贡献者之一？](https://github.com/zpfz/vuepress-theme-antdocs/pulls)

<p>&nbsp; </p> 

## 赞助者  

<p></p>

<a-tooltip placement="bottom">
  <template slot="title">
    Roy Kid
  </template>
  <a-avatar src="https://s1.ax1x.com/2020/03/17/8dnGRA.th.jpg" :size="54"/>
</a-tooltip>