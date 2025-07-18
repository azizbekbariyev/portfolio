import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        dart:'rgb(21, 19, 18)'
      }
    },
  },
  plugins: [],
}

export default config
