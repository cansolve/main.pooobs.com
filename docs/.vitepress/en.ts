import { defineLocaleConfig, footerHTML } from '@sugarat/theme/node'

export const themeEN = defineLocaleConfig({
    homeTags: {
        title: '🏷 Tags'
    },
    home: {
        analysis: {
            articles: {
                title: ['Posts', 'Monthly', 'Weekly']
            }
        }
    },

    author: 'zhanlingxingyu',
    recommend: {
        nextText: 'Next',
        sort: 'date'
    },
    hotArticle: {
        title: '🔥 Featured Articles',
        nextText: 'nextText',
        pageSize: 9,
        empty: 'Empty'
    },

    friend: {
        title: 'Friends Links',
        list: [{
            nickname: 'Chinese Perpetual Calendar',
            des: 'Perpetual calendar search Calendar search Lunar calendar search Lunar calendar Old almanac Perpetual calendar',
            avatar:
                'https://qq.ip138.com/static/image/day/logo.png',
            url: 'https://qq.ip138.com/day/',
        },
        {
            nickname: 'Old Almanac',
            des: 'The most accurate old almanac for checking dates. Todays almanac includes auspicious dates, online fortune telling, the fortune of the twelve zodiac signs, feng shui, physiognomy, solar term query, festival query, etc., as well as Chinese traditional cultural customs. The old almanac is committed to being the most practical, convenient and accurate almanac query in China.',
            avatar:
                'http://old.www.huangli.com/static1/image/logo.png',
            url: 'https://www.huangli.com/',
        },
        ]
    },

    backToTop: {
        top: 10,
        icon: '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'><title>align_arrow_up_line</title><g id="align_arrow_up_line" fill=\'none\' fill-rule=\'nonzero\'><path d=\'M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z\'/><path fill=\'#09244BFF\' d=\'M7.05 8.703a1 1 0 0 0 1.415 0L11 6.167V15a1 1 0 0 0 2 0V6.167l2.536 2.536a1 1 0 1 0 1.414-1.415l-4.243-4.242a1 1 0 0 0-1.414 0L7.05 7.288a1 1 0 0 0 0 1.415ZM19 21a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2h14Z\'/></g></svg>'
    },
    article: {
        // readingTimePosition: 'top',
        // readingTime: false,
        analyzeTitles: {
            topWordCount: '{{value}} word counts',
            topReadTime: '{{value}} min read time',
            inlineWordCount: '{{value}} word counts',
            inlineReadTime: '{{value}} min read time',
            wordCount: 'Total word count',
            readTime: 'Total read time',
            author: 'Author',
            publishDate: 'Published on',
            lastUpdated: 'Last updated on',
            tag: 'Tags',
        }
    },
    footer: {
        version: false,
        // message 字段支持配置为HTML内容，配置多条可以配置为数组
        message: footerHTML([
            {
                text: 'terms | ',
                link: '/terms.html',
            },
            {
                text: 'privacy',
                link: '/privacy.html'
            }
        ]),
        copyright: 'Copyright © 2024ZhanLingXingYu All rights reserved',

    },
})