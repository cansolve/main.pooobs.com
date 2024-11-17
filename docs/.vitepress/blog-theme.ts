// 主题独有配置
import { getThemeConfig,footerHTML } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '占靈星語',
//   baseUrl,
//   copyright: 'Copyright (c) 2023-present, 占靈星語',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
//   RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,

  // markdown 图表支持（会增加一定的构建耗时）
  // mermaid: true

  // 页脚

  footer: {
    version: false,
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    message: footerHTML([
        {
          text: '使用條款 | ',
          link: '/terms.html',
        },
        {
          text: '隱私協議',
          link: '/privacy.html'
        }
      ]),
    copyright: 'Copyright © 2024占靈星語 版權所有',
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // 主题色修改
  themeColor: 'el-red',

  // 文章默认作者
  author: '占靈星語',

  // 友链
  friend: [
    {
      nickname: '中華萬年曆',
      des: '萬年曆查詢 日曆查詢 農曆查詢 農曆日曆 老黃曆 萬年曆錶',
      avatar:
        'https://qq.ip138.com/static/image/day/logo.png',
      url: 'https://qq.ip138.com/day/',
    },
    {
      nickname: '老黃曆',
      des: '最准确的老黄历看日子，今日黄历内容包括了良辰吉日,在线算命，十二生肖运程、风水学，命相学、节气查询，节日查询等还有中国传统文化习俗，老黄历致力于做中国国内最实用，最方便，最准确的黄历查询',
      avatar:
        'http://old.www.huangli.com/static1/image/logo.png',
      url: 'https://www.huangli.com/',
    },
  ],

  // 公告
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '👇大師line👇---👇大師微信👇' },
      {
        type: 'image',
        src: '/blog/imgs/line.jpg',
        style: 'display: inline-block;width:46%;padding-left:6px'
      },
      {
        type: 'image',
        src: '/blog/imgs/wechat.png',
        style: 'display: inline-block;width:46%;padding-left:6px'
      },
      {
        type: 'text',
        content: '歡迎大家聯繫我們交流'
      },
    //   {
    //     type: 'text',
    //     content: '文末有二維碼',
    //     style: 'padding-top:0'
    //   },
      {
        type: 'button',
        content: '姻緣快測',
        link: 'https://www.pooobs.com/home'
      },
    //   {
    //     type: 'button',
    //     content: '聯繫我們',
    //     props: {
    //       type: 'success'
    //     },
    //     link: 'https://theme.sugarat.top/group.html',
    //   }
    ],
    duration: 0
  },
})

export { blogTheme }
