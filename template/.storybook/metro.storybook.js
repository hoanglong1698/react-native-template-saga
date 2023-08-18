const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const path = require('path')

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
  },
  watchFolders: [path.resolve(__dirname, '..')],
  server: {
    port: 8081,
  },
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
