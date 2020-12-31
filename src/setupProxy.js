const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    'api',
    createProxyMiddleware({
      target: 'https://api.bilibili.com/x/relation/stat?vmid=314108035',
      changeOrigin: true
    })
  )
}

