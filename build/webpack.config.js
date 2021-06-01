const path = require('path');

const fs = require('fs-extra');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { cwd } = require('process');

const reslove = (pathname) => path.resolve(__dirname, '..', pathname);

fs.copy(reslove('src/style'), reslove('dist/style'))
  .then((res) => {
    console.log('copy-success');
  })
  .catch((err) => {
    console.log('copy-err', err);
  });

module.exports = {
  mode: process.env.NODE_NEV === 'prod' ? 'production' : 'development',
  entry: {
    index: {
      import: path.resolve(__dirname, '..', 'src/index.tsx'),
    },
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, '..', './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
    }),
    // new BundleAnalyzerPlugin(), // 调试工具
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  externals: {
    antd: 'antd',
    react: 'react',
    'react-dom': 'react-dom',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        //打包公共模块
        commons: {
          chunks: 'initial', //initial表示提取入口文件的公共部分
          minChunks: 2, //表示提取公共部分最少引用的文件数
          minSize: 0, //表示提取公共部分最小的大小
          name: 'style', // 提取出来的文件命名
        },
      },
    },
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
