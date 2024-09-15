//侧边栏
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const {getChildren} = require("vuepress-sidebar-atuo")

module.exports = {
    '/knowledge/': [
        {
            title: 'Survey',
            collapsable: true,
            children:getChildren('./docs/knowledge/Survey/')
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
    ],
    '/jottings/':[
        {
            title: 'Essay',
            collapsable: true,
            children: getChildren('./docs/jottings/')
        },
    ],

}