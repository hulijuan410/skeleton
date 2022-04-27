const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); // 引用公共的配置


const prodConfig = {
  mode: 'production', // 开发模式
  entry: path.join(__dirname, "../src/index.ts"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "index.js",
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  resolve: { // 解析文件呀
    extensions: [".tsx", ".ts", ".js"]
  },
  externals: { // 定义外部依赖，避免把react和react-dom打包进去
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
};

module.exports = merge(prodConfig, baseConfig); // 将baseConfig和prodConfig合并为一个配置