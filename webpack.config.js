const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

 
module.exports = {
  entry:{
      index: './src/js/index.js',
      admin: './src/js/admin.js',
      error:'./src/js/error.js',
      infoSeries:'./src/js/infoSeries.js',
      acercaDeNosotros:'./src/js/acercaDeNosotros.js',
      Contacto:'./src/js/Contacto.js',
      registro: './src/js/registro.js'
    },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: 'img/[name].[ext]',
             },
          },
        ],
      }


    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: './src/index.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject:true,
        chunks:['index']
    }),
    
     new HtmlWebpackPlugin({
            template: './src/admin.html',
            minify:{
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true
            },
            inject:true,
            chunks:['admin'],
            filename:'./admin.html'
        }),
        new HtmlWebpackPlugin({
          template: './src/error.html',
          minify:{
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          },
          inject:true,
          chunks:['error'],
          filename:'./error.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/acercaDeNosotros.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject:true,
        chunks:['acercaDeNosotros'],
        filename:'./acercaDeNosotros.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/infoSeries.html',
      minify:{
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      inject:true,
      chunks:['infoSeries'],
      filename:'./infoSeries.html'
  }),
  new HtmlWebpackPlugin({
    template: './src/Contacto.html',
    minify:{
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    },
    inject:true,
    chunks:['Contacto'],
    filename:'./Contacto.html'
}),
new HtmlWebpackPlugin({
  template: './src/registro.html',
  minify:{
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  },
  inject:true,
  chunks:['registro'],
  filename:'./registro.html'
}),
    new MiniCssExtractPlugin({
        filename: 'css/style.css'
    }),
    new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/img',
            to: 'img',
          },
         
        ]
    })



],


 
};
