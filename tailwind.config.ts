import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fecdd3',
        secondary: '#fecdd3',
        tertiary : '#f59e0b',
        quaternary: '#fecdd3',
        accent: '#171717',
        accentSecondary: '#d4d4d4',
        accentTertiary: '#fecdd3',
        bodyBg: '#fdf4ff',
        shadowBlack: 'drop-shadow(0 35px 65px rgba(0, 0, 0, 1))',
      },
      fontFamily: {
        'general': ['Lexend Deca', 'sans-serif']
      },
      fontSize: {
      },
      // Más configuraciones extendidas según tus necesidades
    },
  },
  plugins: [],
};
export default config;
