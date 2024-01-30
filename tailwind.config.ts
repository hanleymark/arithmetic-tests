import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground-color)',
        background: 'var(--background-color)',
        title: 'var(--title-color)',
        card: 'var(--card-color)',
        inputbg: 'var(--input-bg-color)',
        inputtext: 'var(--input-fg-color)',
        inputph: 'var(--input-placeholder-color)',
      },
    },
  },
  plugins: [],
};
export default config;
