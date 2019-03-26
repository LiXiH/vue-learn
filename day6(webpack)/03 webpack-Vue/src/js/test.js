
/** 1、ES6 中 */
// 在ES6中，也通过 规范的形式，规定了ES6 中导入 和 导出 模块
// ES6 中导入模块，使用 import 模块名称 from '模板标识符'   import '表示路径'
// 在ES6中，使用export default 和 export 向外暴露成员。
// 注意：通过使用export default 向外暴露的成员，可以使用任何变量名来接收

export default{
    name:"zs",
    age:20
}
export var  title = "小星星";
export var  content = "哈哈哈哈";
// 在一个模块中，export default 只允许向外暴露一次，在一个模块中，可以同时使用export default 和 export向外暴露成员
// 使用export 向外暴露的成员，只能使用{}的形式接收，这种形式，叫做【按需导出】
// export 可以向外暴露多个成员，同时，如果某些成员，我们不需要则可以不在{}中定义
// 使用export 导出的成员必须严格按照导出的时候的名称，来使用{} 按需接收，如果想要用其它的变量名来接收，可以使用as来取别名。eg: import {title as tit} from '路径'


// 在node中 使用 var 名称 = require('模块标识符') 导入成员
// module.export 和 exports 来暴露成员


