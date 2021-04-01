module.exports = {
  plugins: {
    tailwindcss: { config: './src/tailwind.js' },
    'postcss-preset-env': {
      autoprefixer: {},
      stage: 1,
    },
  },
}
