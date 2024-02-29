// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
      rules: [{
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Injects styles into DOM
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      // new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      compress: true,
      port: 8081
    },
    devtool: 'eval-source-map',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'index.js',
      publicPath: 'public'
    }
}