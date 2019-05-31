module.exports = {
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/ituring-mobile-imitate/' : '/'
}
