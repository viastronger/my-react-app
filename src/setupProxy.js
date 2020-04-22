const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const apiProxy = createProxyMiddleware('/api', {
        target: 'xxx',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    });
    const apiProxy2 = createProxyMiddleware('/baidu', {
        target: 'http://api.map.baidu.com',
        changeOrigin: true,
        pathRewrite: {
            '^/baidu': ''
        }
    });
    app.use(apiProxy)//可以配置多个代理
    app.use(apiProxy2)//可以配置多个代理
}

