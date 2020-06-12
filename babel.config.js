module.exports = (api) => {
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: 3,
          forceAllTransforms: api.env("production"),
        },
      ],
    ],
  };
};
