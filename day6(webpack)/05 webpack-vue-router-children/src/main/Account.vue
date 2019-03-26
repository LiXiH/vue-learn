<template>
    <div>
        <h1>这是 Account 组件</h1>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="sass" scoped>
/* 普通的style 标签，只支持普通的样式，如果想要启用less和sass，需要为style元素设置lang属性 */
/* 只要我们的style标签是在.vue组件中定义，都推荐为style添加scoped属性 */
    body{
        div{
            font-style: italic;
        }
    }
</style>


