module.exports = {
  context: __dirname,
  entry: "./js/main.js",
  port: 3000,
  output: {
    path: "./js",
    publicPath: "/js/",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps'
};
