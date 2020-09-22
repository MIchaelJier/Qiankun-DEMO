<template>
    <div id="main-app">
        <div class="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">主应用的About</router-link>|
            <router-link to="/vue">Vue</router-link>|
            <router-link to="/lcps">lcps</router-link>
        </div>
        <router-view />
        <div id="qiankunVue"></div>
        <div id="lcps"></div>
    </div>
</template>

<style lang="scss" scoped>
body{
      width: 100%;
      height: 100vh;
      overflow: hidden;
      padding: 0;
      margin: 0; 
    }
#main-app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.nav {
    padding: 30px;
    position: fixed;
    writing-mode: tb-rl;
    background: #222;
    height: 100%;
    z-index: 111;
    a {
        font-weight: bold;
        color: #ffffff;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
