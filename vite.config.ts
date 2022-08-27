import { resolve } from "path";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "my-lib",
    },
  },
});
