module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ["@typescript-eslint", "jest", "jsx-a11y", "react"],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/prop-types": [0],
    "react/state-in-constructor": [0],
    "react/jsx-props-no-spreading": [0],
    "import/no-extraneous-dependencies": [0],
    "import/prefer-default-export": [0],
    "max-len": ["warn", { "code": 150 }],
    "quote-props": [2, "consistent-as-needed"],
    "react/boolean-prop-naming": [
      "error",
      { "rule": "^(is|has|should|allow|can)[A-Z]([A-Za-z0-9]?)+" }
    ],
    "react/forbid-prop-types": "error",
    "no-underscore-dangle": ["error", { "enforceInMethodNames": true }],
    // We have too many .js files that contain JSX, if these are converted to .jsx files then ".js" can be removed from here
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "react/no-access-state-in-setstate": "warn",
    "react/no-deprecated": "error",
    "react/jsx-one-expression-per-line": [0],
    "camelcase": "warn",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/sort-prop-types": "error",
    "jsx-a11y/label-has-for": [0],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "never",
      "functions": "always-multiline"
    }],
    "@typescript-eslint/no-unused-vars": "error",
    'import/no-unresolved': [0],
  },
  settings: {
    'import/extensions': [".ts", ".tsx"],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx"],
        "paths": ['src'],
      }
    }
  },
};
