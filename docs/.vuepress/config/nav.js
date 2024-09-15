//导航栏
module.exports = [
    {text: 'Home', link: '/index.html'},
    {text: 'About', link: '/about/'},
    {text: 'C.V.', link: 'https://khancat1120.github.io/cv.pdf'},
    {
        text: 'Surv.', 
        items: [

                {
                    text: 'Surveys',
                    link: '/knowledge/Survey/01-Textgraph'
                },
                {
                    text: 'LLMs',
                    link:'/knowledge/Survey/01-Textgraph'
                },
            ]
    },
    {
        text: 'Tech.', 
        items: [

                {
                    text: 'Codes',
                    link: '/technology/code/01-GNN'
                },
                {
                    text: 'Bugs',
                    link: '/technology/bug/bug'
                },
            ]
    },
    {text: 'Essay', link: '/jottings/01-自传',},
]