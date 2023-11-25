module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
	
	configureWebpack: {
	    resolve: {
	      alias: {
	        '@': require('path').resolve(__dirname, 'src')
	      }
	    }
	  }
	
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://jsonplaceholder.typicode.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
}