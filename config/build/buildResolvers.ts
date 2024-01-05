import type webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    const src = options.paths.src

    return {
        alias: {
            '@': src
        },
        extensions: ['.tsx', '.ts', '.js'],
        modules: [src, 'node_modules']
    }
}
