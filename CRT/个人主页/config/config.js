var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "陈如锑",
    sex: "女",
    age: "26",
    phone: "18888888888",
    email: "laughing@请求.com",
    address: "现居广东广州",
    qq: "123456789",
    log: "Happysnaker",
    excpect_work: "前端开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "我最美丽",
        "我最可爱",
        "我最聪明",
        "我最变态",
        "我最傻逼",
        "我最人才",
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "风流倜傥，帅气逼人<br>" +
        "幽默风趣，品格优良<br>" +
        "你好，我是陈如锑，摆烂摸鱼大学摸鱼学院的毕业生<br>" +
        "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫陈如锑，性别女，摆烂摸鱼大学摸鱼学院毕业生。我期望的工作岗位是前端开发。</p>" +
        "<p>我有着较多的JavaScript编程经验，计算机基础知识掌握扎实，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，团队协同作战能力强，同时我也具备独立开发的能力，擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当，能够接受加班或出差等安排</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */
    skills: [
        ["JavaScript", 80, "red"],
        ["jQuery", 77, "blue"],
        ["SQL", 75, "#1abc9c"],
        ["HTML5", 67, "rgba(0,0,0)"],
        ["CSS3", 60, "yellow"],
        ["git", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握JavaScript基础。</li>" +
        "     <li>熟悉多线程、集合等基础框架。</li>" +
        "     <li>了解JVM原理。</li>" +
        "     <li>熟悉canva api基本知识。</li>" +
        "     <li>熟悉SQL语句编写以及调优。</li>" +
        "     <li>熟悉基本git命令操作。</li>" +
        "     <li>熟悉vue等框架的使用，了解其原理与机制。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +
        "     <li>了解分布式系统的设计与应用。</li>" +
        "     <li>熟悉掌握HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
     portfolio: [
        ["./images/1.png", "https://laughing-h.github.io/CRT/2022.8.20/1.html", "滑动验证", "滑动块验证"],
        ["./images/2.png", "https://laughing-h.github.io/CRT/2022.8.30/1.html", "仿华为官网", "一个仿华为官网的响应式布局"],
        ["./images/3.png", "https://laughing-h.github.io/CRT/2022.8.27/1.html", "天气预报", "未来七天的天气预报"],
        ["./images/4.png", "https://laughing-h.github.io/CRT/2022.9.9/1.html", "仿qq音乐播放器", "一个仿仿qq音乐的播放器"],
        ["./images/5.png", "https://laughing-h.github.io/CRT/2022.9.14/1.html", "画板", "画板"],
        ["./images/6.png", "https://laughing-h.github.io/CRT/仿瑞幸咖啡/打包后源码/index.html", "仿瑞幸咖啡", "仿瑞幸咖啡页面"],
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
            "<p><strong>阎王殿研发部</strong></p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ],

        ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
            "<p><strong>阎王殿研发部</strong></p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2021-04-28", "宿舍躺平王一等奖", "大一下学期，我参与第十二届宿舍躺平王，躺平高达24小时。"],
        ["2021-04-24", "第六届摸鱼王三等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，在个人赛中获得全国三等奖。"],
        ["2021-04-24", "第六届佛系摆烂二等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，获得二等奖的成绩。"],
        ["2020-11-14", "真的服了这个老六奖", "伏地魔背刺，"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "", "我的力扣主页"],
        ["./svg/github.svg", "", "我的GitHub主页"],
        ["./svg/博客.svg", "", "我的个人博客"],
        ["./svg/掘金.svg", "", "我的掘金主页"],
        ["./svg/知乎.svg", "", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/640.jfif",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}