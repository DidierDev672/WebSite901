module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "eslint:recommended",
        "eslint:all",
        "./node_modules/coding-standard/eslintDefaults.js",
        "./node_modules/coding-standard/.eslintrc-es6",
        "./node_modules/coding-standard/.eslintrc-jsx"
    ],
    "overrides": [
        {
            "files": ["bin/*.js", "lib/*.js"],
            "excludedFiles": "*.test.js",
            "rules":{
                "quotes": ["error", "single"]
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // override default options
        "comma-dangle": ["error","always"],
        "no-cond-assign": ["error", "always"],
        "semi": ["error", "always"],
        "quotes": ["error","double"],
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],

        // override configuration set by extending "eslint"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // disable rules form base configurations
        "for-direction": "off",
        "react/no-set-state": "off",
        "eqeqeq": "warn",

        //disable now, but enable in the future
        "one-var": "off", // ["error", "never"]

        // disable
        "init-declarations": "off",
        "no-console": "off",
        "on-inline-comments": "off",
    },
};
