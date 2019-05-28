import Mock from 'mockjs'
import { topicsUrl } from '../service'

Mock.setup({
  timeout: '200-600'
})

const topics = [
  'Python', '算法', 'JavaScript', '机器学习', 'Java', '数学', 'C语言', 'Linux'
]

// HeaderNav
Mock.mock(topicsUrl, topics.sort(() => Math.random() - 0.5).concat('最新上线', '每周特价'))
