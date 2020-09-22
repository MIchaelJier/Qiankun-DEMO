import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 方便控制当子应用从父应用卸载时用
let instance = null;

  function render (props = {}) {
    const { container } = props;
    console.log(props)
    instance = new Vue({
      router,
      render: h => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app')
  } 

if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// qiankun用来判断是否为独立运行
if (!window.__POWERED_BY_QIANKUN__) {
    // 当为独立运行的时候
    render();
}

export async function bootstrap (props) {
    // 可以接收从父应用传过来的参数
    console.log(props)
}

export async function mount (props) {
    console.log(props)
    render(props); 
}

// 卸载子应用
export async function unmount (props) {
    console.log('卸载')
    instance.$destroy();
    instance = null;
}
