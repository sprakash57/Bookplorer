module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module",
      "extraFileExtensions": [".svelte"]
    },
    "plugins": ["svelte3"],
    "ignorePatterns": ["node_modules"],
    "extends": ["eslint:recommended"],
    "overrides": [
      {
        "files": ["**/*.svelte"],
        "processor": "svelte3/svelte3"
      }
    ],
    "settings": {
      "svelte3/ignore-styles": () => true
    }
  }