const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/be',
    createProxyMiddleware({
      target: 'http://i7a403.p.ssafy.io:8080',
      changeOrigin: true,
    }),
  );
};

