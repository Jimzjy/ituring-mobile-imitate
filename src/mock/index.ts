import Mock from 'mockjs'
import { topicsUrl, homeDataUrl } from '../service'
import { routePageNames } from '@/router'
import { InfoSwipe, HomeData, Book } from '@/model'

Mock.setup({
  timeout: '100-500'
})

const topicsHome = [
  'Python', '算法', 'JavaScript', '机器学习', 'Java', '数学', 'C语言', 'Linux'
]
const topicsBook = [
  '所有', '纸制书', '电子书', '我的收藏', '每周特价', '预售', '免费'
]
const topicsArticle = [
  '所有', '图灵访谈', '图灵活动'
]
const infoSwipe: Array<InfoSwipe> = [
  {
    title: '最新书讯',
    content: '5月书讯：又多了好几本想读的新书！'
  },
  {
    title: '纸质书开通预售',
    content: '第一时间寄给你！'
  },
  {
    title: '电子书阅读奖励计划',
    content: '让买书即读变成习惯！'
  }
]
const bookViewTitles = [
  '六一送给做游戏的你，3.5折放价啦！',
  '热门图书',
  '每周特价',
  '纸书预售中'
]
const books: Array<Book> = [
  {
    imgUrl: '/book/1.jpg',
    name: '深度学习入门：基于Python的理论与实现',
    author: '斋藤康毅'
  },
  {
    imgUrl: '/book/2.jpg',
    name: '数学女孩4：随机算法',
    author: '结城浩'
  },
  {
    imgUrl: '/book/3.jpg',
    name: '我的第一本算法书',
    author: '宫崎修一,石田保辉'
  },
  {
    imgUrl: '/book/4.jpg',
    name: '微积分入门（修订版）',
    author: '[日]小平邦彦'
  },
  {
    imgUrl: '/book/5.jpg',
    name: '精通CSS：高级Web标准解决方案（第3版）',
    author: '[英]安迪•巴德,[瑞典]埃米尔•比约克隆德'
  },
  {
    imgUrl: '/book/6.jpg',
    name: 'shell脚本实战（第2版）',
    author: '[美]戴夫•泰勒 [美]布兰登•佩里'
  },
  {
    imgUrl: '/book/7.jpg',
    name: '第一行代码——Android（第2版）',
    author: '郭霖'
  },
  {
    imgUrl: '/book/8.jpg',
    name: 'Django企业开发实战：高效Python Web框架指南',
    author: '胡阳'
  },
  {
    imgUrl: '/book/9.jpg',
    name: 'Flask Web开发：基于Python的Web应用开发实战（第2版）',
    author: '[美]米格尔•格林贝格'
  },
  {
    imgUrl: '/book/10.jpg',
    name: '极简算法史：从数学到机器的故事',
    author: '[法] 吕克•德•布拉班迪尔 '
  },
  {
    imgUrl: '/book/11.jpg',
    name: 'Node.js实战（第2版）',
    author: '[英] 亚历克斯•杨 等'
  },
  {
    imgUrl: '/book/12.jpg',
    name: 'Python深度学习',
    author: '[美] 弗朗索瓦•肖莱'
  },
  {
    imgUrl: '/book/13.jpg',
    name: 'React设计模式与最佳实践',
    author: '米凯莱•贝尔托利（Michele Bertoli）'
  }
]

// HeaderNav
Mock.mock(`${topicsUrl}/${routePageNames[0]}`, topicsHome.sort(() => Math.random() - 0.5).concat('最新上线', '每周特价'))
Mock.mock(`${topicsUrl}/${routePageNames[1]}`, topicsBook)
Mock.mock(`${topicsUrl}/${routePageNames[2]}`, topicsArticle)

// Home
Mock.mock(homeDataUrl, () => {
  const homeData: HomeData = {}
  homeData.infoSwipe = infoSwipe

  homeData.booksWithTitle = []
  for (let title of bookViewTitles) {
    homeData.booksWithTitle.push({
      title,
      books: shuffle(books).slice(0, (4 + Math.random() * 4))
    })
  }

  return homeData
})

const shuffle = (items: Array<any>) => {
  return items.sort(() => Math.random() - 0.5)
}
