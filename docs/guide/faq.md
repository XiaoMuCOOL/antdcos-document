---
title: 常见问题
sidebarDepth: 0
---

# 常见问题

以下整理了一些常见的问题和官方答复，在提问之前建议找找有没有类似的问题。

**Q：为什么按照官方配置了主题，仍然运行不了？提示 Cannot find moudle '@SearchBox'？**<a-tag color="#F56C6C">置顶</a-tag>  

A：该问题的引起可能是由于你的项目没有局部安装 VuePress，直接使用了全局 VuePress 会引起该问题。考虑到用户 VuePress 使用版本不一致以及兼容性，主题默认不再安装 VuePress 依赖，所以使用前请给你的项目安装上 VuePress。（见 [#1](https://github.com/zpfz/vuepress-theme-antdocs/issues/1)）  

**Q：可以同时使用 Less 和 Stylus 预处理器嘛？**  

A：可以，但不推荐。一来 Less 变量无法直接在 Stylus 上使用，二来还需要安装 Stylus 预处理器，这会让你的 node_modules 变得臃肿。   

**Q：可以提供 Sass/Stylus 等格式的样式文件吗？**  

A：不会提供，但是你可以使用工具（请自行 Google）将 Less 转换成 Sass/Stylus 等。  

**Q：使用多语言时出现各种错误？是 BUG 嘛？**  

A：不是BUG，我们在修改默认主题时已经移除多语言功能，所以暂时不支持，在未来是否有可能添加上去需要进一步商榷，同时也欢迎广大好友 [Pull Request](https://github.com/zpfz/vuepress-theme-antdocs/pulls)。（作者处于毕业季，需要处理各种事情，所以比较繁忙...）  

**Q：为什么开启了 lastUpdated 功能，文档底部还是没有显示信息？**   

A：`lastUpdated` 是基于每个文件最后一次 `git` 提交的 UNIX 时间戳(ms)，意味着你的项目应该是基于 git 的项目，它才能正常显示时间。  