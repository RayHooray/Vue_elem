/*
* 获取信息
* */
import ajax from './ajax'
//请求导航信息

export const reqMainNav = () => ajax('/nav')

export const reqShopInfo = () => ajax('/shop')
