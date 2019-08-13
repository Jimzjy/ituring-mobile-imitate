module.exports = {
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/ituring-mobile-imitate/' : '/'
}
