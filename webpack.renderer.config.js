const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
}, {
  test: /\.vue$/,
  loader: 'vue-loader'
});

module.exports = {
  module: {
    rules,
  },
  plugins: [...plugins, new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
};
