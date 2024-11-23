//导航栏
module.exports = [
    {text: 'Home', link: '/index.html'},
    {text: 'About', link: '/about/'},
    {text: 'C.V.', link: 'https://KehanPang.github.io/cv.pdf'},
    {
        text: 'Surv.', 
        items: [

                {
                    text: 'Graphs',
                    link: '/knowledge/Graphs/01-Textgraph'
                },
                {
                    text: 'LLMs',
                    link:'/knowledge/LLMs/01-大模型训练'
                },
                {
                    text: 'Sundry',
                    link:'/knowledge/Sundry/01-ContrastiveLearning'
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
                // {
                //     text: 'Language',
                //     link: '/technology/Language/01-English'
                // },
            ]
    },
    {text: 'Essay', link: '/jottings/01-我与他',},
]