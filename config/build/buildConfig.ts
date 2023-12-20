import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import type { Configuration } from "webpack";
import { buildDevServer } from './buildDevServer';

export function buildConfig(options: BuildOptions): Configuration {

    const { paths, mode } = options

    return {
        entry: paths.entry,
        mode,
        output: {
            path: paths.dist,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(paths),
        devtool: mode === 'development' ? 'inline-source-map' : false,
        devServer: mode === 'development' ? buildDevServer(options) : undefined,
    }
}