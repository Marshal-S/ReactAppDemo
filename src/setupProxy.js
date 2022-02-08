//配置代理服务文件，只需要引入 http-proxy-middleware 三方即可


// 配置代理中间件，以进行连接、表达、浏览器同步等。
const { createProxyMiddleware } = require("http-proxy-middleware");

// 配置代理服务
const apiProxy = createProxyMiddleware("/editor", {
	target: 'http://192.168.1.2',
	// changeOrigin: true,
	// pathRewrite: { '^': '' },
});

module.exports = function(app) {
	app.use(apiProxy);
}
