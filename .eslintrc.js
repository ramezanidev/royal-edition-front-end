module.exports = {
  extends: ["@nuxtjs/eslint-config-typescript"],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["default"],
      },
    ],
  },
};
