const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { firstUpperCase } = require('l-native-tools').default;

const { componentEntrys } = require('./uitls');

const rootResolve = (filename) => {
  return path.join(__dirname, '../', filename);
};

module.exports = {
  devtool: 'inline-source-map',
  name: 'l-react-ui',
  mode: process.env.NODE_ENV,
  entry: {
    index: rootResolve('src/index.tsx'),
    ...componentEntrys,
  },
  output: {
    path: rootResolve('dist'),
    filename: (item, index, arr) => {
      const { name } = item.chunk;

      if (name === 'index') {
        return 'index.js';
      }
      return `${firstUpperCase(name)}/index.js`;
    },
    library: 'l-react-ui',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/style/index.css',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  externals: [/^react\/.+$/, /^react-dom\/.+$/, /^lodash\/.+$/, /^@babel\/runtime\/.+$/],
};
