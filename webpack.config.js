const webpack = require('webpack');
import path from 'path';
const source = path.resolve(__dirname, './src/main');
const { utils } = require('karma-mocha');


module.exports = (env) => ({
  devtool: 'inline-source-map',
  target: false,
  plugins: [
    DefinePlugin(env)
  ],
  plugins: [
    new webpack.DefinePlugin({
      debug: true,
      source: true,
      optimization: {
        moduleIds: 'named'
     },
      context:__dirname,
      entry: './src/main.js',
      output:{
        path: path.resolve(__dirname, './dist'),
        filename: `[name].js`
      },
      resolve: {
        alias: {
          components: path.resolve(__dirname, './src/components'),
          browser:  path.resolve(__dirname, '../node_modules'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      module: {

        target: "es5", // include this!!

        loaders: [
          {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
          },
         
          {
            test: /\.(js|jsx)$/,
            include: source,
            use: {
              loaders: 'babel-loader',
              query:
              {
                cacheDirectory: true,
              }
            }
          },


          {
            test: /\.css$/,
            include: source,
            use: {
              loader: 'style-loader',
              loader: 'css-loader',
              loader: 'postcss-loader',
              query:{
                cacheDirectory: true,
              },
              
            },
          },

          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'babel-loader!eslint-loader'
              }
            }
          },

         

        ],
      
      }
    })
  ]
   
     
  
})