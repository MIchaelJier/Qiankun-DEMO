module.exports = {
    devServer: {
        port: 9999,
        headers:{
            // 由于 qiankun 是通过 fetch 去获取微应用的引入的静态资源的，所以必须要求这些静态资源支持跨域
            "Access-Control-Allow-Origin":"*"
        }
    },
    configureWebpack: {
        devtool: 'none', // 不打包sourcemap
        output: {
            library: "qiankunVue", // 导出名称
            libraryTarget: "window", //把子应用打包成 umd 库格式
        }
    },
    // cssModules: {
    //     localIdentName: '[path][name]---[local]---[hash:base64:5]',
    //     camelCase: true
    //   }
}