module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "plugin:import/recommended",
    "standard-with-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    project: ["tsconfig.app.json", "tsconfig.node.json"],
  },
  plugins: ["import"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
      },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
