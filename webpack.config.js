const webpack = require('webpack');
const path = require('path');

module.exports = env => {
  // ASSET_PATH determines the path that assets get served from after compile
  // i.e. the path appended to image imports/requires
  // example: if ASSET_PATH equals https://cdn.com/pictures/
  // var kitty = require('relative/path/to/kitty.jpg');
  // then: kitty variable equals https://cdn.com/pictures/{hash}.jpg
  const ASSET_PATH = (env && env.ASSET_PATH) || '/';

  const IMG_PATH = "Images";

  return {
    entry: [
      './src/index.js'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: ASSET_PATH,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      // alias simplifies import/require e.g. require('Images/kitty.png')
      alias: {
        Images: path.resolve(__dirname, 'public/images/')
      }
    },
    plugins: [
      // This makes it possible for us to safely use env vars on our code
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        'process.env.IMG_PATH': JSON.stringify(IMG_PATH)
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },{
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        },{
          test: /\.css$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
          ]
        },{
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000
              }
            }
          ]
        },{
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000
              }
            }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      // contentBase: './dist',
      port: 9000
    }
  };
}
