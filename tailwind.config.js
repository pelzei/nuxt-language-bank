module.exports = {
      content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: [],
        fontFamily: {
            'body': ['"Noto Sans"', '"Noto Sans Arabic"', '"Noto Sans Armenian"', '"Noto Sans Bengali"', '"Noto Sans Hebrew"', '"Noto Sans JP"', '"Noto Sans KR"', '"Noto Sans Myanmar"', '"Noto Sans SC"', '"Noto Sans TC"', '"Noto Sans Tamil"', '"Noto Sans Thai"'],
            'sans': ['"Noto Sans"', '"Noto Sans Arabic"', '"Noto Sans Armenian"', '"Noto Sans Bengali"', '"Noto Sans Hebrew"', '"Noto Sans JP"', '"Noto Sans KR"', '"Noto Sans Myanmar"', '"Noto Sans SC"', '"Noto Sans TC"', '"Noto Sans Tamil"', '"Noto Sans Thai"'],
        },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
