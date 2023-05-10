module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["react-app", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        tabWidth: 2,
        useTabs: false,
        trailingComma: "es5",
        endOfLine: "auto",
        singleQuote: false,
        printWidth: 120,
        jsxSingleQuote: false,
        semi: true,
      },
    ],
  },
};
