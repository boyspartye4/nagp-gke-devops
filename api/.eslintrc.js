module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022, // or later
    sourceType: "module",
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
    "max-len": ["error", { code: 200 }],
    indent: ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "valid-jsdoc": 0,
  },
  ignorePatterns: [".eslintrc.js"], // Disable linting for the mentioned files.
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
