//侧边栏
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const {getChildren} = require("vuepress-sidebar-atuo")

module.exports = {
    '/knowledge/': [
        {
            title: 'Graphs',
            collapsable: true,
            children:getChildren('./docs/knowledge/Graphs/')
        },
        {
            title: 'Sundry',
            collapsable: true,
            children:getChildren('./docs/knowledge/Sundry/')
        },
        {
            title: 'LLMs',
            collapsable: true,
            children:getChildren('./docs/knowledge/LLMs/')
        },
    ],
    '/technology/':[
        {
            title: 'Bugs',
            collapsable: true,
            children: getChildren('./docs/technology/bug/')
        },
        {
            title: 'Codes',
            collapsable: true,
            children: getChildren('./docs/technology/code/')
        },
        // {
        //     title: 'Language',
        //     collapsable: true,
        //     children: getChildren('./docs/technology/Language/')
        // },
    ],
    '/jottings/':[
        {
            title: 'Essay',
            collapsable: true,
            children: getChildren('./docs/jottings/')
        },
    ],

}