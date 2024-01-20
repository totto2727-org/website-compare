import pages from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    pages(),
    devServer({
      entry: "src/index.tsx",
    }),
  ],
});
