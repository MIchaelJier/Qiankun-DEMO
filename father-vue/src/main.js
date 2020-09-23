import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, setDefaultMountApp, start } from "qiankun"

let app = null;

let token = ''
setTimeout(() => {token = 'get123123123123'}, 1000)

registerMicroApps(
    [
        {
            // 应用名称
            name: 'qiankunVue',
            // 加载的js
            entry: '//localhost:9999',
            // 挂载到哪里
            container: '#qiankunVue',
            // 路径
            activeRule: '/vue',
            // 传参 子应用可以接受
            props: {
                data: '我是父应用传的数据',
                token
            }
        },
        {
            // 应用名称
            name: 'lcps',
            // 加载的js
            entry: '//localhost:8090/lcps/',  
            // 挂载到哪里
            container: '#lcps',
            // 路径
            activeRule: '/lcps',
            base: '/lcps',
            // 传参 子应用可以接受
            props: {
                data: '我是父应用传的数据',
                token
            }
        },
    ]
)

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
