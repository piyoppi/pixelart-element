const webpack = require("webpack");

module.exports = {
  entry: {
    'main': 'src/main.js',
    'pixelart-element': 'src/forScriptTag.js'
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name].bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env",
                ]
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true } ],
              ]
            }
          }
        ]
      },
      {
        test: /node_modules\/(lit-element|lit-html)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  resolve: {
    modules: [__dirname, "node_modules"],
  }
}
