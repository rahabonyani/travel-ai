import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          '100': '#eff4ee',
          '100_hover': '#e7eee6',
          '100_active': '#ceddcb',

          '400': '#609058',
          '400_hover': '#56824f',
          '400_active': '#4d7346',

          '600': '#486c42',
          '600_hover': '#3a5635',
          '600_active': '#2b4128',

          '800': '#22321f',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
