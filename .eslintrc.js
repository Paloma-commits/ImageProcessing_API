const { off } = require("process");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },

  extends: [
    "plugin:@typescript-eslint/recommended"
  ],

  rules: {
    "quotes": ["error", "single"],
    "@typescript-eslint/no-var-requires": 0,
    "prefer-const": ["warn", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
  }]
  }

};
