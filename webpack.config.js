const { createHash } = require('node:crypto');
const { join } = require('node:path');
const { VueLoaderPlugin } = require('vue-loader');
const { VuetifyPlugin } = require('webpack-plugin-vuetify');

module.exports = {
  entry: join(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    hashFunction: function () {
      return createHash('md5');
    },
  },
  module: {
    rules: [
      // Due to the fact that Code App does not support Vue's auto completion and static code analysis, HTML is temporarily used instead.
      {
        test: /\.html$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new VuetifyPlugin()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
    extensions: ['.html', '.js', '.css'],
  },
  devServer: {
    port: 80,
    static: {
      directory: join(__dirname, 'dist'),
    },
    historyApiFallback: true,
  },
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/,
  },
};
