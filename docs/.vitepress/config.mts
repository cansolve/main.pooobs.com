import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
const base = '/blog/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(占靈星語)
  extends: blogTheme,
  base,
  lang: 'zh-cn',
  title: '占靈星語',
  description: '專業的姻緣占卜平台，為您提供準確的婚姻緣分預測。通過生日時刻、星座愛情分析等多種方式，幫助您洞察未來的愛情與婚姻走向。立即體驗在線姻緣測算，瞭解您與另一半的緣分深淺，找到屬於您的愛情歸宿。',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/logo.jpg',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首頁', link: '/' },
      {
        text: '免費測算',
        items: [
          { text: '姻緣占卜', link: 'https://www.pooobs.com/home' },
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'facebook',
        link: 'https://www.facebook.com/zhanlingxingyu18'
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/zhanlingxingyu'
      }
    ]
  }
})
