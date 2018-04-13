# 项目首日出现的问题
  ##1.路由跳转，但页面不显示
    原因： redirect 链接直接指向指定的方向
          component 组件
          启动时，默认页面为主页，用redirect定向，
          其余页面在配置路由时，使用component进行配置  
