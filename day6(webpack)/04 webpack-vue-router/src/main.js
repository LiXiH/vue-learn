import Vue from 'vue'
// 1、导入 Vue-route
import VueRouter from 'vue-router'


// 2、手动安装 Vue-router
Vue.use(VueRouter)

// 导入 APP 组件
import app from './App.vue'
import account from './main/Account.vue'
import goodlist from './main/Goodlist.vue'

// 3、创建路由对象
var router = new VueRouter({
    routes : [
        { path:'/account' ,component: account},
        { path:'/goodlist' ,component: goodlist},
    ]
})


var vm = new Vue({
    el:"#app",
    //4、将路由对象挂载 到vm实例上
    router,
    render : c => c(app)// render 会把 el 指定的容器中，所有的内容都替换掉。所以不要把路由的router-view和router-link直接放到 el 所控制的元素中
    
})

//注意：App这个组件，是通过vm 实例的render 函数渲染出来的，render 函数如果要渲染 组件，渲染出来的组件只能放到el所指定的元素中
// account和 goodlist 组件，是通过路由匹配监听到的，所以，这两个组件，只能展示到属于路由的<router-view></router-view>中去