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
      'airbnb-base',
      'airbnb-typescript/base'
    ],
    "rules": {
    }
}
