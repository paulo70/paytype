module.exports = {
    parser: '@typescript-eslint/parser',
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'eslint:recommended'
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "import/no-unresolved": "error"
    },
    "settings": {
        'react/react-in-jsx-scope': 'off',
        "import/resolver": {
            "typescript": {}
        },
        react: {
            version: 'detect',
        },
    }
