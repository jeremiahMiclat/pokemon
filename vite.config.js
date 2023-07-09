import { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
    root: "src/",

    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                "pokemon-list": resolve(__dirname, "src/pokemon-list/index.html"),
                "pokemon-pages": resolve(__dirname, "src/pokemon-pages/index.html"),
                deck: resolve(__dirname, "src/deck/index.html"),
                // login: resolve(__dirname, "src/login/index.html")
            },
        },
    },
});