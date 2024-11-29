import { defineConfig } from 'vite';
import "./bootstrap";
import.meta.glob(["../images/**"]);
import laravel from 'laravel-vite-plugin';
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});