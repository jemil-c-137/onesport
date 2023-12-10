import path from 'path';

import { buildConfig } from './config/build/buildConfig';
import { BuildEnv, BuildOptions } from './config/build/types/config';

export default (env: BuildEnv) => {

    const mode = env.mode || 'development';

    const options: BuildOptions = {
        mode,
        paths: {
            html: path.resolve(__dirname, 'public', 'index.html'),
            dist: path.resolve(__dirname, 'dist'),
            entry: path.resolve(__dirname, 'src/index.tsx'),
        },
        port: env.port || 3000
    }

    const config = buildConfig(options);

    return config;
};