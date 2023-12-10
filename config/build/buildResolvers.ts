import path from 'path'
import webpack from 'webpack'

export function buildResolvers(): webpack.ResolveOptions {
    return {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.tsx', '.ts', '.js'],
    }
}