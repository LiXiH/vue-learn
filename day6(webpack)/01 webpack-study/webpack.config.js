//这个配置文件，其实就是一个JS文件，通过node中的模块向外暴露了一个 配置对象

const path = require('path');
// 启用热更新的 第二步
const webpack = require("webpack");

//导入在内存中生成 html 页面的插件
// 这个插件的作用：
// 1、自动在内存中根据指定页面生成一个内存中的页面
// 2、自动 把打包好的bundle.js引入html页面中
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : path.join(__dirname,'./src/main.js'),           //入口，表示要使用webpack打包哪个文件
    output:{
        path: path.join(__dirname,'./dist'),  //指定 打包好的文件，输出到哪个目录中去
        filename:'bundle.js'     //指定输出的文件的名称
    },
    devServer:{  //这是配置 dev-server 命令参数的第二种方式，相对来说，这种方式麻烦一些
        // "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"
        open : true, //自动打开浏览器
        port : 3000, //设置启动时候的运行端口
        contentBase : "src", //指定托管的根目录
        hot : true, //启用热更新 的 第一步 
    },
    plugins:[  //配置插件的节点
        
        new webpack.HotModuleReplacementPlugin(),   //new 一个热更新的模块对象，这是启用热更新的第三步
        
        new htmlWebpackPlugin({ //这是创建一个 在内存中生成 html 页面的插件
            template : path.join(__dirname,'./src/index.html'),   //指定模板页面，将来根据指定的页面路径，去生成内存中的 页面
            filename: 'index.html'  //指定生成的页面的名称
        })
    ],
    module:{ //这个节点，用于配置所有的第三方模块 加载器
        rules: [
            { test: /\.css$/, use:['style-loader','css-loader'] }, //配置处理 .css 文件的第三方loader 规则
            { test: /\.less$/, use:['style-loader','css-loader','less-loader'] },  //这是配置处理.less 文件的第三方loader
            { test: /\.scss$/, use:['style-loader','css-loader','sass-loader'] },  //这是配置处理.sass 文件的第三方loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=12459&name=[hash:8]-[name].[ext]'}, //处理图片路径的loader
            // limit 给定的值是图片的大小，单位是 byte ，如果我们引用图片 大于或等于给定的limit的值，则不会被转为base64格式的字符串，如果，图片小于给定的limit值，则会被转为base64的字符串
            { test: /\.(ttf|eot|svg|woff|woff2)$/,use: "url-loader"}, //这是处理字体文件的配置项
            { test: /\.js$/,use: "babel-loader",exclude:/node_modules/} //这是babel 的配置项

        ]
    }
}

//当我们在控制台直接运行webpack命令的时候，webpack做了以下几步：
// 1、首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
// 2、webpack 就会去项目的跟目录中查找 webpack.config.js 配置文件
// 3、当找到配置文件后，webpack 会去解析执行这个配置文件，当解析完配置文件后，就得到了配置文件导出的配置对象
// 4、当webpack 拿到配置对象后，就拿到了配置对象中的指定的入口和出口，然后进行打包构建

//使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1、运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2、安装完成后，这个工具的用法和webpack的用法一样
// 3、由于，我们是在项目中，本地安装的webpack-dev-server ， 所以无法把它当做脚本命令，在powershell终端中直接运行，只有那些安装到 -g 的功能，才能在终端中正常执行
// 4、注意：webpack-dev-server 这个工具，如果要正常运行，要求，在本地项目中，必须安装webpack
// 5、webpack-dev-server 帮我们打包生成的bundle.js文件，并没有存放到实际的物理磁盘上，而是直接托管到了电脑的内存中，所以，我们在项目目录中，根本找不到这个bundle.js
// 6、我们可以认为webpack-dev-server 把打包好的文件存放到了根目录中，只是我们看不到

