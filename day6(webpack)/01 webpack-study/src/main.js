// 这个 main.js 是我们项目的js入口文件

//1、导入jQuery
// import ** from ** 是es6中导入模块的方式
import $ from "jquery";

// 使用import语法导入css样式表
import './css/index.css';
import './css/index.less';
import './css/index.scss';
//注意：如果要通过路径的形式引入 node_modules 中相关的文件，可以直接省略 路径前面的node_modules 这一层，直接写包 的名称和后面的路径
import 'bootstrap/dist/css/bootstrap.css'
// 注意：webpack默认只能打包处理js类型的文件，无法处理其它的非js类型的文件
// 如果要处理非 js 类型的文件，我们需要手动安装一些 合适 的第三方 loader 加载器
// 1、如果想要打包处理css 文件，需要安装 npm i style-loader css-loader -D
// 2、打开webpack.config.js这个配置文件，在里面 新增 一个配置节点module,它是一个对象，在这个module
// 在这个module对象身上有个rules 属性，这个rules 属性是一个数组，这个数组中存放了所有第三方文件的匹配和处理规则

// 注意：webpack 处理第三方文件类型的过程：
// 1、发现这个 要处理的文件不是JS 文件，然后去配置文件中，查找有没有对应的第三方loader 规则
// 2、如果找到对应的规则，就会调用 对应 的loader处理这种类型的文件；
// 3、在调用loader 的时候，是从后往前调用的；
// 4、当做后一个loader 调用完成后，会把处理的结果，直接交给 webpack 进行打包合并，最终输出到bundle.js中去

$(function(){
    $("li:odd").css("backgroundColor","green");
    $("li:even").css("backgroundColor",function(){
        return '#'+'DE7868';
    });
});

//webpack 默认只能处理部分ES6的语法，ES6其它的高级语法和ES7语法webpack无法处理,
//需要借助babel来讲高级语法转换为低级语法。
//使用babel需要三个步骤：
    // 1 安装两套包：
    //    1.1 第一套包(转换器)： npm i babel-core babel-loader babel-plugin-transform-runtime -D
    //    1.2 第二套包（对应规则）： npm i babel-preset-env babel-preset-stage-0 -D
    // 2  打开webpack的配置文件。在module 节点的rules 数组中，添加一个新的匹配规则：
    //    { test:/\.js$/, use: "babel-loader", exclude: '/node_modules/ }
    //    2.1 注意：在配置babel 的 loader规则的时候，必须把 node_modules 目录，通过 exclude选项排查掉
    //    原因有两点：如果不排除 node_modules,则babel 会把 node_modules 中所有的 第三方 JS 文件，都会打包编译，这样会非常消耗CPU，同时，打包速度非常慢
    //    即使，babel把所有 node_modules 中的JS转换完毕，但是项目也无法正常运行
    // 3  在项目的根目录中新建一个 babelrc 的babel配置文件，这个配置文件属于JSON格式，所以，在写 .babel 配置的时候，必须符合JSON语法规范，不能写注释，字符串必须用双引号
            // {
            //     "presets": ["env","stage-0"],
            //     "plugins": ["transform-runtime"]
            // }
    // 4   了解：目前，我们安装的babel-preset-env，是比较新的ES语法包含了和es***相关的语法，之前我们安装的是babel-preset-es2015 
 class Person  {
    // 使用static关键字可以定义静态属性
    // 静态属性：可以直接通过类名直接访问的属性叫做静态属性
    // 实例属性：只能通过类的实例来访问的属性的叫做实例属性
    static info = { name:"zs",age: 20 }
}
console.log(Person.info); //静态属性

function Animal(name){
    this.name = name;
}
Animal.info = 123

var a1 = new Animal("旺财")

console.log(a1.name);  //实例属性

// 1、webpack 能够处理JS 文件的相互依赖关系；
// 2、webpack 能够处理JS 的兼容问题，把 高级的、浏览器不识别的语法，转为低级的浏览器可识别的语法

// webpack打包文件的命令： webpack 要打包的文件的路径 打包好的输出文件的路径