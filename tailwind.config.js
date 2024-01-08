/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow1': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'shadow2': '3px 3px 0px 0px rgba(71, 73, 115, 0.25), 2px 4px 0px 0px rgba(30, 32, 74, 0.50)',
        'shadow3': '0px 3px 13.7px 0px rgba(107, 133, 206, 0.30)',
        'shadow4': '0px 4px 10px 0px rgba(0, 0, 0, 0.15)',
        'shadow5': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'shadow6': '0px 2px 4px 0px rgba(46, 47, 77, 0.34)',
        'shadow7': '0px 50px 24px 1px rgba(0, 0, 0, 0.010)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
