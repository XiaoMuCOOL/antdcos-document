---
title: 扩展配置
sidebarDepth: 0
---

# 扩展配置

<a-alert type="error" closable>
  <span slot="message">
    由于时间精力有限，本主题暂时不支持 多语言 设置，请不要尝试按照官方配置设置多语言，否则可能会发生不可预料的错误。
  </span>
</a-alert>

## 底部栏

我们为主题新增了首页底部栏功能，最大可支持 4 个栏目数，每个栏目数可以添加多个 Item。接下来我们将讲解如何去开启这个功能以及使用时需要注意的问题。  

打开你默认作为首页的 `README.md` 文件，在 Front Matter 之间添加以下配置：

```md
footerColumn: 2
footerWrap: 
- headline: Column 1
  items:
  - title: Item 1
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
  - title: Item 2
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
- headline: Column 2
  items:
  - title: Item 1
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
  - title: Item 2
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
```
其中，相关字段说明如下：
- `footerColumn`：底部栏分栏数，最大支持 4 个栏目数。<a-tag color="orange">开启时必选</a-tag>
- `footerWrap`：底部栏数组。<a-tag color="orange">开启时必选</a-tag>
  - `headline`：底部栏分栏标题。<a-tag color="green">推荐设置</a-tag>
  - `items`
    - `title`：底部栏分栏下 item 的名称。<a-tag color="orange">开启时必选</a-tag>
    - `link`：底部栏分栏下 item 的导航链接。<a-tag color="orange">开启时必选</a-tag>
    - `details`：底部栏分栏下 item 的描述信息。<a-tag color="blue">可选</a-tag>
