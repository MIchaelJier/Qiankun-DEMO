module.exports = {
    publicPath: 'http://localhost:9999/',
    devServer: {
        port: 9999,
        headers:{
            // 由于 qiankun 是通过 fetch 去获取微应用的引入的静态资源的，所以必须要求这些静态资源支持跨域
            "Access-Control-Allow-Origin":"*"
        }
    },
    css: {
        extract: false
    },
    configureWebpack: {
        devtool: 'none', // 不打包sourcemap
        output: {
            library: "qiankunVue", // 导出名称
            libraryTarget: "umd", //把子应用打包成 umd 库格式
        }
    }, 
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
    }
}