const path = require('path')

const moduleResolverConfig = {
  root: path.resolve('.'),
  alias: {
    '@': './src',
  },
}

module.exports = api => {
  api.cache(true)

  const presets = ['module:metro-react-native-babel-preset']

  const plugins = [['module-resolver', moduleResolverConfig]]

  return {
    presets,
    plugins,
  }
}
