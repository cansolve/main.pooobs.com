// 主题独有配置
import { getThemeConfig, footerHTML } from '@sugarat/theme/node'
import { themeEN } from './en'
import type { Theme } from '@sugarat/theme'

const baseUrl = 'https://www.pooobs.com/'
const RSS: Theme.RSSOptions = {
    title: 'zhanlingxingyu',
    baseUrl,
    copyright: 'Copyright (c) 2023-present, zhanlingxingyu',
}

export const blogTheme = getThemeConfig({
    // 开启RSS支持
    RSS,

    // 搜索
    // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
    // search: false,

    locales: {
        en: themeEN
    },

    search: {
        pageResultCount: 5,
        btnPlaceholder: '搜索',
        placeholder: '搜索文章',
        emptyText: '没有找到相关文章',
        heading: '结果数: {{searchResult}} 条。',
        toSelect: '选择',
        toClose: '关闭',
        toNavigate: '移动',
        searchBy: 'Powered by',
        locales: {
            en: {
                btnPlaceholder: 'Search',
                placeholder: 'Search Docs',
                emptyText: 'No results found',
                heading: 'Total: {{searchResult}} search results.',
                toSelect: 'to select',
                toClose: 'to close',
                toNavigate: 'to navigate',
                searchBy: 'Search by',
            }
        }
    },
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
        locales: {
            en: {
                title: 'Announcement',
                body: [
                    { type: 'text', content: '👇Line👇-----👇Wechat👇' },
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
                        type: 'button',
                        content: 'Marriage Quick Test',
                        link: 'https://www.pooobs.com/home'
                    },
                ]
            }
        },
        duration: 0
    },
})

