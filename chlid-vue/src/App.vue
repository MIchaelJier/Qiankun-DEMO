<template>
  <div id="app_chlid">
    <div class="nav">
      <router-link to="/" >Home</router-link> |
      <router-link to="/about" >About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#app_chlid {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 

#app_chlid .nav {
  padding: 30px;
  a { 
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
