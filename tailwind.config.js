/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
        "./src/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
