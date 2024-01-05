import path from 'path'

import { buildConfig } from './config/build/buildConfig'
import { type BuildEnv, type BuildOptions } from './config/build/types/config'
import { type Configuration } from 'webpack'

export default (env: BuildEnv): Configuration => {
    const mode = env.mode ?? 'development'

    const options: BuildOptions = {
        mode,
        paths: {
            html: path.resolve(__dirname, 'public', 'index.html'),
            dist: path.resolve(__dirname, 'dist'),
            entry: path.resolve(__dirname, 'src/index.tsx'),
            src: path.resolve(__dirname, 'src')
        },
        port: env.port || 3000
    }

    const config = buildConfig(options)

    return config
}
