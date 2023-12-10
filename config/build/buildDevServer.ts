import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(buildOption: BuildOptions): DevServerConfiguration {
    return {
        compress: true,
        open: true,
        hot: true,
        port: buildOption.port,
        historyApiFallback: true,
    }
}