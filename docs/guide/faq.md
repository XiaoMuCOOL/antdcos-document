---
title: 常见问题
sidebarDepth: 0
---

# 常见问题

以下整理了一些常见的问题和官方答复，在提问之前建议找找有没有类似的问题。

### 1. 可以同时使用 Less 和 Stylus 预处理器嘛？

可以，但不推荐。一来 Less 变量无法直接在 Stylus 上使用，二来还需要安装 Stylus 预处理器，这会让你的 node_modules 变得臃肿。 

### 2. 你们会提供 Sass/Stylus 等格式的样式文件吗？  

不会，但是你可以使用工具（请自行 Google）将 Less 转换成 Sass/Stylus 等。

### 3. 使用多语言时出现各种错误？是 BUG 嘛？

不是BUG，我们在修改默认主题时已经移除多语言功能，所以暂时不支持，在未来是否有可能添加上去需要进一步商榷，同时也欢迎广大好友 [Pull Request](https://github.com/zpfz/vuepress-theme-antdocs/pulls)。（作者处于毕业季，需要处理各种事情，所以比较繁忙...）

### 4. 为什么开启了 lastUpdated 功能，文档底部还是没有显示信息？ 

`lastUpdated` 是基于每个文件最后一次 `git` 提交的 UNIX 时间戳(ms)，意味着你的项目应该是基于 git 的项目，它才能正常显示时间。