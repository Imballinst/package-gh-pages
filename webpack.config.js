// Dotenv
require('dotenv').config();

// Webpack config
const del = require('del');
const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const resourcePath = path.join(__dirname, './resources/assets');
const buildPath = path.join(__dirname, './public');

if (!process.env.ANALYZE) {
  del([buildPath + '/assets/css/*', buildPath + '/assets/js/*', buildPath + '/index.html']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
}

// Common plugins
const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module, count) => {
      const userRequest = module.userRequest;

      // You can perform other similar checks here too.
      // Now we check just node_modules.
      return userRequest && userRequest.indexOf('node_modules') >= 0;
    }
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new webpack.NamedModulesPlugin()
];

// Common loaders
const imageLoader = ['file-loader?name=img/[name].[ext]'];
if (isProd) {
  imageLoader.push({
    loader: 'image-webpack-loader',
    query: {
      progressive: true,
      optimizationLevel: 7,
      interlaced: false,
      pngquant: {
        quality: '65-90',
        speed: 4
      }
    }
  });
}

const loaders = [
  {
    test: /\.(jsx|js)$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    loader: isProd ? "file-loader?publicPath=../&name=fonts/[name].[ext]" :
                     "file-loader?publicPath=/assets/&name=fonts/[name].[ext]"
  },
  {
    test: /.*\.(gif|png|jpe?g)$/i,
    loaders: imageLoader
  }
];

// Environment settings
if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    }),
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'This is your page title',
      filename: '../index.html',
      inject: true,
      template: '../views/content/index-prod.ejs'
    })
  );

  loaders.push(
    {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader!sass-loader",
      })
    }
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );

  loaders.push({
    test: /\.(css|sass|scss)$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ]
  });
}

// Configuration
module.exports = {
  devtool: isProd ? 'cheap-source-map' : 'eval',
  context: resourcePath,
  entry: {
    index: './js/store/index.js'
  },
  output: {
    path: buildPath + '/assets/',
    filename: isProd ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    chunkFilename: isProd ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    publicPath: 'assets/'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      resourcePath,
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins,
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    port: 3004,
    proxy: {
      "**": "http://localhost:3003"
    },
    hot: true,
    inline: true,
    publicPath: '/assets/',
    compress: isProd,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    },
  }
};
