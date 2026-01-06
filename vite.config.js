
import { defineConfig } from "vite";

export default defineConfig({
    base: "/goit-js-hw-10/", // Base path for GitHub Pages
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
                timer: "./src/01-timer.html",
                snackbar: "./src/02-snackbar.html",
            },
        },
    },
});
