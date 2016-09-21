var path = require('path');
var webpack = require('webpack');

var wpconfig = {
  devtool : 'source-map',
  entry: {
    bundle:'./src/main/js/index.js',
    'vendor-bundle': [
      'react',
      'react-dom',
      'moment'
    ]
  },

  output: {
      path: path.join(__dirname, 'target/users-count-portlet/js'),
	    filename: 'bundle.js'},

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor-bundle',
      filename: 'vendor-bundle.js',
      minChunks: Infinity
    })
  ]

};

module.exports = wpconfig;
