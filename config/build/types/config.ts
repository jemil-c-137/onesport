import webpack from 'webpack'

export interface BuildPaths {
    html: string,
    dist: string,
    entry: string,
}

export interface BuildOptions {
    mode: webpack.Configuration['mode'],
    paths: BuildPaths,
    port: number,
}

export interface BuildEnv {
    port: number
    mode: webpack.Configuration['mode']
}
