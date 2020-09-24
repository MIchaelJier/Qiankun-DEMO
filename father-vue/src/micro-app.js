import store from './store'

const microApps = [
  {
      // 应用名称
      name: 'qiankunVue',
      // 加载的js
      entry: '//localhost:9999',
      // 挂载到哪里
      container: '#qiankunVue',
      // 路径
      activeRule: '/vue',
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
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    props: {
      routerBase: item.activeRule,
      getGlobalState: store.getGlobalState 
    }
  }
})

export default apps