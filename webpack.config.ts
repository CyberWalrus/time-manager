/* eslint-disable import/no-extraneous-dependencies */
/* tslint:disable:object-literal-sort-keys */
import path from 'path';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

const isDevelopment = true;

const root = (args: string): string => path.join(...[__dirname].concat('./', args));

const webpackConfig = {
  entry: {
    bundle: [root('src/index.tsx')]
  },
  output: {
    filename: 'js/main.js',
    path: root('public/')
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    open: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `css/[name].css`
            }
          },
          {
            loader: `extract-loader`
          },
          {
            loader: `css-loader?-url`
          },
          {
            loader: `postcss-loader`
          },
          {
            loader: `sass-loader`
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      components: root('src/components'),
      constants: root('src/constants'),
      containers: root('src/containers'),
      hooks: root('src/hooks'),
      pages: root('src/pages'),
      store: root('src/store'),
      types: root('src/types'),
      utils: root('src/utils'),
      src: root('src'),
      build: root('build')
    },
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map'
};

export default webpackConfig;
