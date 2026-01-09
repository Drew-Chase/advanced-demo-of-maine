import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        extend: {},
    },
    darkMode: "class",
    plugins: [heroui({
        themes: {
            light: {
                colors: {
                    primary: {
                        DEFAULT: "#2a5240",
                        foreground: "#fff",
                    },
                    secondary: {
                        DEFAULT: "#ffd701",
                        foreground: "#000",
                    },
                    background: "#ffffff",
                }
            }
        }
    })]
}
