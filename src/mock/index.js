import Mock from 'mockjs'
import navData from '../common/data/navigation'
import shopsInfo from '../common/data/shops'


//导航区域
const navs = navData.entries
Mock.mock('/nav', {code:0, data: navs})
console.log(navs)


//商家信息
const shops = shopsInfo.items.map(item => item.restaurant)
console.log(shops)
console.log(shops.length)

Mock.mock('/shop', {code: 0, data: shops})

