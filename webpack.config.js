/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: path.resolve(__dirname, 'src/widgets/weather-widget.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'weather-widget.js',
    library: 'WeatherWidget',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  mode: 'development',
};
