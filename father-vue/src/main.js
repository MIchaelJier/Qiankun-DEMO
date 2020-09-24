import Vue from 'vue'
import App from './App.vue'
import router from './router'
import microApps from './micro-app'

import { registerMicroApps, setDefaultMountApp, start } from "qiankun"

let app = null;

registerMicroApps(microApps)

render({ loading: true });
// 设置默认子应用
// setDefaultMountApp("/vue");

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


function render({ appContent, loading }) {
    /*examples for vue*/
    if (!app) {
      app = new Vue({
        router,
        data() {
          return {
            content: appContent,
            loading,
          };
        },
        render(h) {
          return h(App, {
            props: {
              content: this.content,
              loading: this.loading,
            },
          });
        },
      }).$mount('#main-app');
    } else{
      app.content = appContent;
      app.loading = loading;
    }
  }
