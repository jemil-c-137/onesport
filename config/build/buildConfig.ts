import { type BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import type { Configuration } from 'webpack'
import { buildDevServer } from './buildDevServer'

export function buildConfig(options: BuildOptions): Configuration {
    const { paths, mode } = options

    const isDev = mode === 'development'

    return {
        entry: paths.entry,
        mode,
        output: {
            path: paths.dist,
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: buildLoaders(isDev)
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(paths, isDev),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
