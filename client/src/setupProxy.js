const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/be',
    createProxyMiddleware({
      target: 'https://i7a403.p.ssafy.io',
      changeOrigin: true,
    }),
  );
};

