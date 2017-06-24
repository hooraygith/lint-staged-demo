// http://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // indent 4 spaces
    "indent": ["error", 4],
    // allow async-await
    'generator-star-spacing': 0,
    "space-before-function-paren": ["error", "never"]
  }
}
