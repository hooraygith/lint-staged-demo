// http://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: ['standard', 'plugin:vue/recommended'],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // indent 4 spaces
        'indent': ['error', 4],
        // allow async-await
        'generator-star-spacing': 0,
        'space-before-function-paren': ['error', 'never'],
        'keyword-spacing': 2,
        'object-curly-spacing': ['error', 'never'],
        'no-multi-spaces': ['error', {
            'ignoreEOLComments': true
        }],
        'space-before-function-paren': ['error', {
            "anonymous": "never",
            "named": "never",
            'asyncArrow': 'always'
        }],
        'max-len': ['error', {'code': 120}],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 3,
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }],
        'vue/html-indent': ['error', 4],
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'never',
                'normal': 'never',
                'component': 'never'
            }
        }],
        'vue/component-name-in-template-casing': ['error', 'kebab-case']
    }
}
