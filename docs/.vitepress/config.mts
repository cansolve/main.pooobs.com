import { defineConfig } from 'vitepress'
import googleAnalyticsPlugin from 'vitepress-plugin-google-analytics';

import { blogTheme } from './blog-theme'

const base = '/blog/'


// VitePress 默认配置
export default defineConfig({
    base,
    extends: blogTheme,
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: `${base}favicon.ico` }],
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-8XEXZMTK20' }
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8XEXZMTK20');`
        ]
    ],
    description: '專業的姻緣占卜平台，為您提供準確的婚姻緣分預測。通過生日時刻、星座愛情分析等多種方式，幫助您洞察未來的愛情與婚姻走向。立即體驗在線姻緣測算，瞭解您與另一半的緣分深淺，找到屬於您的愛情歸宿。',

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
    },
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-cn',
            title: '占靈星語',
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en/',
            title: 'zhanlingxingyu',
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/' },
                    {
                        text: 'Free calculation',
                        items: [
                            { text: 'Marriage Divination', link: 'https://www.pooobs.com/home' },
                        ]
                    }
                ],
            }
        }
    },
})