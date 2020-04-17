const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const apiProxy = createProxyMiddleware('/api', {
        target: 'xxx',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    });
    app.use(apiProxy)//可以配置多个代理
}

