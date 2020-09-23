<template>
    <div class="home">
        <h1>我是子应用的首页</h1>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="在child-vue中使用"/> 
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld'
export default {
    name: 'Home',
    components: {
        HelloWorld,
    }
}
</script>
