import { defineConfig } from 'vitepress'
import { blogTheme } from './blog-theme'

const base = '/blog/'


// VitePress 默认配置
export default defineConfig({
    base,
    extends: blogTheme,

    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: `${base}favicon.ico` }],
        ['meta', { name: 'keywords', content: '关键词1, 关键词2, 关键词3' }],
        ['meta', { name: 'author', content: 'zhanlingxingyu' }],
        ['meta', { property: 'og:title', content: '占靈星語' }],
        ['meta', { property: 'og:description', content: '專業的姻緣占卜平台，為您提供準確的婚姻緣分預測。通過生日時刻、星座愛情分析等多種方式，幫助您洞察未來的愛情與婚姻走向。立即體驗在線姻緣測算，瞭解您與另一半的緣分深淺，找到屬於您的愛情歸宿。' }],
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
    sitemap: {
        hostname: 'https://www.pooobs.com'
    },
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
            { text: '品牌故事', link: '/brand-story' },
            {
                text: '免費測算',
                items: [
                    { text: '姻緣占卜', link: 'https://www.pooobs.com/home' },
                ]
            },
            // {
            //     text: '登录',
            //     link: '',
            //     customComponent: '<LoginButton />', // 使用自定义按钮组件
            // },
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
            head: [
                ['meta', { name: 'keywords', content: 'chinese zodiac,zodiac signs,symbols,facts,chinese,12 Zodiac Signs,Dates,Personality,Traits,Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig.' }],
                ['meta', { name: 'author', content: 'zhanlingxingyu' }],
                ['meta', { property: 'og:title', content: 'zhanlingxingyu' }],
                ['meta', { property: 'og:description', content: 'free love reading,for free,love reading,love spreads,zodiac offers the right amount of your insight specific situation by chinese style.say good bye to your romantic worries.12 Zodiac Signs: Dates and Personality Traits of Each Star Sign.' }],

            ],
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Brand Story', link: '/brand-story' },
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