module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },

    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      project: ['./tsconfig.json', './tsconfig.vite.json'],
      "sourceType": "module"
    },
    "plugins": [
      "@typescript-eslint"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      'airbnb-base',
      'airbnb-typescript/base',
      "prettier"
    ],
    "rules": {
      "indent": "error"
    }
}
