const  nav =require('./config/nav.js') ;
const  sidebar =require('./config/sidebar.js');


module.exports = {
    title: 'Kehan\'s BLOG',
    description: 'The best time to plant a tree was ten years ago, followed by now.',
    base:"/",
    plugins: [
        ['flexsearch'],
        ['vuepress-plugin-cat'],
        ['vuepress-plugin-anchor-toc'],
        ['@vuepress/back-to-top'],
        [
            'vuepress-plugin-mathjax',
            {
              target: 'svg',
              macros: {
                '*': '\\times',
              },
            },
        ],
        ['vuepress-plugin-code-copy', true],
    ],
    head: [
        ['link', {
            rel: 'icon',
            href: `/hinmeru.jpg`
        }],
        ['link', {
            rel: 'stylesheet',
            href: `/iconfont/iconfont.css`
        }],
        ['meta', {
            name: 'keywords',
            content: 'Personal BLOG'
        }],
        ['meta', {
            name: 'baidu-site-verification',
            content: 'bdukCluk30'
        }],
        ['meta', {
            name: 'sogou_site_verification',
            content: 'gReIJbnqBO'
        }],
        ['meta', {
            name: 'author',
            content: 'MaNong'
        }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/iconfont/iconfont.js"
        }],
        // ['script', {
        //     type: 'text/javascript',
        //     id: 'clustrmaps',
        //     src: '//clustrmaps.com/map_v2.js?d=6NSMM9lrJc5M_xL0jlSDtBsuZtRRx7kvsq_3gSIA-oo&cl=ffffff&w=a'
        // }],
        // ["script", {
        //     "src": "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js",
        // }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ],
    dest: './docs/.vuepress/dist',
    // permalink: "/:year/:month/:day/:slug", //配置永久链接
    ga: '',
    evergreen: true,
    // markdown: {
    //     extendMarkdown: md => {
    //       md.use(require('markdown-it-katex'));
    //     }
    // },
    // extendMarkdown: md => {
    //     md.set({ breaks: true })
    //     md.use(require('markdown-it-katex'))
    // },
    // 导航菜单
    themeConfig: {
        logo:'/hinmeru.jpg',
        nav,
        sidebar,
        //左侧菜单栏
        // 通过 themeConfig.sidebarDepth 来修改它的行为。默认的深度是 1，它将提取到 h2 的标题，设置成 0 将会禁用标题（headers）链接，同时，最大的深度为 2，它将同时提取 h2 和 h3 标题。
        sidebarDepth: 0,   
        lastUpdated: 'Last update in', // string | boolean    最后更新时间 前缀
        // 项目开始时间
        startYear: '2020',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/KehanPang',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'Khancat1120/vuepress-blog',
        editLinkPattern: 'https://github.com/KehanPang/vuepress-blog/edit/main/docs/',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        // editLinkText: '对本篇的内容有任何疑问吗？请来这里发表issue吧！',
        // editLinkPattern: ':repo/edit/:branch/:path',
    },
}