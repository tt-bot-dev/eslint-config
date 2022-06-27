"use strict";
module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        sourceType: "script",
        ecmaVersion: 2022,
    },
    rules: {
        // Annoyances
        "no-inner-declarations": "off",
        "no-useless-escape": "warn",
        "require-atomic-updates": "off",
        "linebreak-style": "off",

        // Performance/consistency
        "eqeqeq": [
            "error",
            "always",
            {
                "null": "ignore",
            },
        ],
        "strict": [
            "error",
            "global",
        ],
        "no-var": ["error"],
        "prefer-const": ["warn"],
        "prefer-template": ["error"],

        // Stylistic
        "array-element-newline": [
            "error",
            "consistent",
        ],
        "comma-dangle": ["error", "always-multiline"],
        "comma-style": ["error", "last"],
        "indent": [
            "error",
            4,
        ],
        "quotes": [
            "error",
            "double",
        ],
        "semi": [
            "error",
            "always",
        ],
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true,
            },
        ],
        "no-extra-parens": "error",
        "brace-style": [ 
            "error", 
            "1tbs",
        ],
        "object-curly-spacing": [ 
            "error",
            "always",
        ],
        "eol-last": ["warn", "always"],
        "key-spacing": ["error"],
        "keyword-spacing": ["error"],
        "lines-between-class-members": ["error"],
        "newline-per-chained-call": ["warn"],
        "no-unneeded-ternary": ["warn"],
        "prefer-object-spread": ["warn"],
        "semi-spacing": ["error"],
        "space-before-blocks": ["error", "always"],
        "spaced-comment": ["error", "always"],
        "arrow-body-style": ["warn", "as-needed"],
        "arrow-spacing": ["error"],
    },
    globals: {
        "BigInt": true,
    },
};
