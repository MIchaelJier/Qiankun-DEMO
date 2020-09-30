<template>
  <div id="app_chlid">
    <div class="nav">
      <h4>主应用用户：{{ user.name }}</h4>
      <router-link to="/" >Home</router-link> |
      <router-link to="/about" >About</router-link>
      <h1 @click="gotoLcps" style="cursor: pointer;color: red" >go to lcps</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState('global', {
      user: state => state.user, // 获取父应用的user信息
    }),
  },
  methods: {
     gotoLcps () {
      history.pushState(null, 'lcps', '/lcps/')
    }
  },
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
