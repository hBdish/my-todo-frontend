import webpack from 'webpack'
import { BuildOptions } from './types/config'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !options.isDev

  const plugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(), // For page reloading
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ]

  if (!isProd) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    )
  }

  return plugins
}
