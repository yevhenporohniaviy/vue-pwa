module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-pwa/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js"
    }
  }
}
