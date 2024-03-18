import stylistic from "@stylistic/eslint-plugin";
import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    stylistic.configs.customize({
        blockSpacing: true,
        braceStyle: "1tbs",
        indent: 4,
        jsx: true,
        quotes: "double",
        semi: true,
        commaDangle: "always-multiline",
    }),
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            globals: {
                ...globals.commonjs,
            },
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            // Annoyances
            "no-inner-declarations": "off",
            "require-atomic-updates": "off",
            "linebreak-style": "off",

            // Performance/consistency
            "eqeqeq": [
                "error",
                "always",
                {
                    null: "ignore",
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
            "@stylistic/array-element-newline": [
                "error",
                "consistent",
            ],
            "no-empty": [
                "error",
                {
                    allowEmptyCatch: true,
                },
            ],
            "@stylistic/no-extra-parens": "error",
            "@stylistic/newline-per-chained-call": ["warn"],
            "no-unneeded-ternary": ["warn"],
            "prefer-object-spread": ["warn"],
            "prefer-object-has-own": ["warn"],
            "arrow-body-style": ["warn", "as-needed"],
        },
    },
];
