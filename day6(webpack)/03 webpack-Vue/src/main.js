//这是入口文件
//在 webpack 构建的项目中，使用Vue 进行开发

// 复习：在普通网页中如何使用Vue：
// 1、使用script 标签，引入 Vue 的包
// 2、在index页面中，创建一个id 为app div容器
// 3、通过new Vue得到一个VM实例


//在webpack 中尝试使用Vue
// 注意：在webpack中，使用 import 导入的Vue 构造函数，功能不完整，只提供了runtime-only的方式，并没有提供 像网页中那样的使用方式
import Vue from "vue"
// import Vue from "../node_modules/vue/dist/vue.js"
// 包的查找规则：
// 1、找 项目中有没有 node_modules 的文件夹
// 2、在 node_modules 中 根据包名，找对应的Vue文件夹
// 3、在Vue文件夹中，找一个叫做package.json 的包配置文件
// 4、在package.json 文件中，查找属性【main属性 指定了这个包在被加载时候，的入口文件】
// 在这里使用 import Vue from "vue" 导入的包是Vue.runtime.common.js,并不是最全的Vue包，
// 因此，我们使用 import Vue from "../node_modules/vue/dist/vue.js" 的方式直接导入最全的vue包

// var login = {
//     template:"<h1>这是login组件，是使用网页中的形式创建出来的组件</h1>"
// }

// 1、导入login 组件
import login from './login.vue'
// 默认 webpack无法打包 .vue文件，需要安装 相关的loader
// npm i vue-loader vue-template-compiler -D
// 在配置文件中，新增loader配置项：{test:/\.vue$/,use:"vue-loader"}

var vm = new Vue({
    el:"#app",
    data:{
        msg:123
    },
    // components:{
    //     login
    // }
    // render:function(createElements){ //在webpack中如果想要通过Vue把一个组件放到页面中展示，VM实例中的render函数可以实现
    //     return createElements(login);
    // }
    // 简写
    render : c => c(login)
})


//总结梳理：webpack 中如何使用vue：
// 1、安装Vue的包：npm i vue -s
// 2、由于webpack中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装 能够解析这种文件的loader :
//    npm i vue-loader vue-template-complier -D 。并添加Vue-loader的匹配规则:{ path:"/\.vue/",use:"vue-loader" }
// 3、在main.js 中，导入 Vue 模块 import Vue from 'vue'
// 4、定义一个 .vue 结尾的组件，其中，组件有三部分组成：template、script、style
// 5、使用 import 组件名 from '' 导入这个组件
// 6、创建VM实例 ：var vm = new Vue({el:"#app",render:c => c(login)})
// 7、在页面中创建一个id为app 的 div 元素，作为我们VM 实例要控制的区域

import m1,{title,content} from './js/test.js'

console.log(m1);
console.log(title + "------>" + content);