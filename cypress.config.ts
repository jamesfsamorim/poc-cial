import { defineConfig } from "cypress";
import { resolve } from "path";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: {
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
              test: /\.(ts|tsx)?$/,
              use: "ts-loader",
              exclude: /node_modules/,
            },
          ],
        },
        resolve: {
          extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
          alias: {
            "@": resolve(__dirname, "src"),
          },
        },
      },
    },
    viewportHeight: 1080,
    viewportWidth: 1280,
    supportFile: "cypress/support/component.ts",
  },
});
