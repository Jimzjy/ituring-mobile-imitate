import Mock from 'mockjs'
import { topicsUrl } from '../service'
import { routePageNames } from '@/router'

Mock.setup({
  timeout: '0'
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

// HeaderNav
Mock.mock(`${topicsUrl}/${routePageNames[0]}`, topicsHome.sort(() => Math.random() - 0.5).concat('最新上线', '每周特价'))
Mock.mock(`${topicsUrl}/${routePageNames[1]}`, topicsBook)
Mock.mock(`${topicsUrl}/${routePageNames[2]}`, topicsArticle)
