// babel.config.js
module.exports = function (api: any) {
  api.cache(true)

  const presets = ['@babel/preset-typescript']
  const plugins = []

  return {
    presets,
    plugins
  }
}
