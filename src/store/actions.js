/*
* vuex的action模块
* */
/*
* 作用async和await作用： 使用同步编码的方式实现异步效果
*                       包装promise，简化编码
*
* 加await: 在返回promise对象的函数调用的左边
* 加async：在await所在的函数定义的左边
* */
import {
  reqMainNav,
  reqShopInfo
} from "../api";

import {
  RECEIVE_MAIN_NAV,
  RECEIVE_SHOP_INFO,
} from "./mutation-type";

export default {
  //异步获取导航信息
  async getMainNav ({commit}, cb) {
    const result = await reqMainNav()
    if(result.code === 0) {
      const navs = result.data
      commit(RECEIVE_MAIN_NAV, {navs})
    }
  },

  //异步获取商家列表
  async getShopInfo ({commit}, cb) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOP_INFO, {shops})
    }
  }
}
