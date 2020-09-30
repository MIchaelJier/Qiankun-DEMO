/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: michael_jier
 * @Date: 2020-09-28 11:30:08
 * @LastEditors: michael_jier
 * @LastEditTime: 2020-09-30 15:38:48
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import microApps from './micro-app'
import 'nprogress/nprogress.css'

import { registerMicroApps, setDefaultMountApp, start } from "qiankun"

let app = null;

function render() {
  /*examples for vue*/
  if (!app) {
    app = new Vue({
      router,
      render(h) {
        return h(App);
      },
    }).$mount('#main-app');
  } 
}

export function loader (loading) {
  if (app && app.$children) {
    app.$children[0].isLoading =  loading 
  }
}

render();
app.$children[0].isLoading =  false 
// 设置默认子应用
// setDefaultMountApp("/vue");

registerMicroApps(microApps, {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterMount: [
      app => {
        console.log('after mount', app);
        render({ appContent: '', loading: false});
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      },
    ],
})

start({
    // 取消预加载
    // prefetch:false,
    // shadow box 隔离
    // sandbox: {
    //     strictStyleIsolation: true,
    //     experimentalStyleIsolation: true
    // },
    getTemplate(tpl) {
      // TODO 过滤html
      // console.log(tpl)
      return tpl
    }
})



