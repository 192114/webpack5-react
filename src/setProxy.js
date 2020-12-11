const proxySettings = {
  '/api/': {
    target: 'http://www.baidu.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api-2': '',
    },
  },
}

module.exports = proxySettings
