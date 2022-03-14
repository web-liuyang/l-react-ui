const path = require("path");
const webpack = require("webpack");
const fs = require("fs-extra");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "style/[name].css",
});

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// 使用方式
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin({
  pluginNames: {
    customUglifyName: miniCssExtractPlugin,
  },
});

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const { cwd } = require("process");

// const pkgs = new Map([
//   ["ahooks", "ahooks"],
//   ["classnames", "classnames"],
//   ["antd", "antd"],
//   ["react", "react"],
// ]);

// const external = {};

// pkgs.forEach((value, key) => {
//   external[key] = {
//     root: ["interface", "pkg", value],
//     commonjs: ["interface", "pkg", value],
//     commonjs2: ["interface", "pkg", value],
//   };
// });

const reslove = pathname => path.resolve(__dirname, "..", pathname);

fs.copy(reslove("src/style"), reslove("dist/style"))
  .then(res => {
    console.log("copy-success");
  })
  .catch(err => {
    console.log("copy-err", err);
  });

module.exports = smp.wrap({
  // module.exports = ({
  mode: process.env.NODE_NEV === "prod" ? "production" : "development",
  entry: {
    index: {
      import: path.resolve(__dirname, "..", "src/index.tsx"),
    },
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "index.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          // {
          //   loader: "thread-loader",
          //   options: {
          //     workers: 3, // 进程数量 2个
          //   },
          // },
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
            },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "..", "./tsconfig.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        // use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        use: ["thread-loader", "css-loader", "less-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // miniCssExtractPlugin,
    // new BundleAnalyzerPlugin(), // 包分析工具
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
  externals: {
    // ...external,
    antd: "antd",
    react: "react",
    "@ant-design/icons": "@ant-design/icons",
    "react-dom": "reac-dom",
    ahooks: "ahooks",
    classnames: "classnames",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        //打包公共模块
        commons: {
          chunks: "initial", //initial表示提取入口文件的公共部分
          minChunks: 2, //表示提取公共部分最少引用的文件数
          minSize: 0, //表示提取公共部分最小的大小
          name: "style", // 提取出来的文件命名
        },
      },
    },
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
});
