import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildPaths } from './types/config';

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }),
    ]
}