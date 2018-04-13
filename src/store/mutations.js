/*
* vuex的mutation模块 操作state
* */

import {
  RECEIVE_MAIN_NAV,
  RECEIVE_SHOP_INFO
} from "./mutation-type";
export default {
  //异步获取导航信息
  [RECEIVE_MAIN_NAV](state, {navs}) {
    state.navs = navs
  },

  //获取商家列表信息
  [RECEIVE_SHOP_INFO](state, {shops}) {
    state.shops = shops
  }
}
