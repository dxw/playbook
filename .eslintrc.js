module.exports = {
  ignorePatterns: [
    "_site/**/*",
    ".jekyll-cache/**/*",
    "dist/**/*",
    "vendor/**/*",
  ],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: { browser: true },
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
  overrides: [
    {
      files: "_spec/**/*",
      env: { jest: true },
    },
    {
      files: "**/*",
      excludedFiles: ["_javascript/**/*", "_spec/**/*"],
      env: { commonjs: true },
    },
  ],
};
