<template>
    <div id="main-app">
        <div class="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">主应用的About</router-link>|
            <router-link to="/vue">Vue</router-link>|
            <router-link to="/lcps/lps">lcps</router-link>
        </div>
        <router-view />
        <div id="qiankunVue"></div>
        <div id="lcps"></div>
    </div>
</template>

<script>
import NProgress from 'nprogress'
export default {
 data() { 
     return {
         isLoading: true
     }
 },
 created() {
    NProgress.start()
 },
 mounted() { 
     // console.log(this.$parent.loading)
 },
 methods: {
    goto (item) {
      history.pushState(null, item.activeRule, item.activeRule)
      // this.current = item.name
    },
    bindCurrent () {
      const path = window.location.pathname
      if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
        this.current = path
      }
    },
    listenRouterChange () {
      const _wr = function (type) {
        const orig = history[type]
        return function () {
          const rv = orig.apply(this, arguments)
          const e = new Event(type)
          e.arguments = arguments
          window.dispatchEvent(e)
          return rv
        }
      }
      history.pushState = _wr('pushState')
      window.addEventListener('pushState', this.bindCurrent)
      window.addEventListener('popstate', this.bindCurrent)
      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('pushState', this.bindCurrent)
        window.removeEventListener('popstate', this.bindCurrent)
      })
    }
 },
 watch: {
    //  '$parent.loading'(newVal){
    //      console.log(newVal)
    //      this.loading = newVal
    //  }
    isLoading (val) {
      if (val) {
        NProgress.start()
      } else {
        this.$nextTick(() => {
          NProgress.done()
        })
      }
    }
 },
}
</script>

<style lang="scss" scoped>
#main-app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 14px;
}

#main-app .nav {
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

#main-app {
  flex-grow: 1;
  position: relative;

  .subapp-loading {
    color: #444;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
<style>
    @import './styles/init.scss'
</style>