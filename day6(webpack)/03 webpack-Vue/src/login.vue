<template>
    <div>
        <h1>这是登录组件，使用.vue定义出来的---{{msg}}</h1>
    </div>
</template>
<script>
    export default{
        data(){
            // 注意：组件中的 data必须是 function
            return {
                msg: '333'
            }
        },
        methods:{
            show(){
                console.log("调用了 login.vue中的 show方法")
            }
        }
    }
</script>
<style></style>