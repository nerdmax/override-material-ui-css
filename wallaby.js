module.exports = function(w) {
  return {
    files: [
      "src/**/*.{ts,tsx}",
      "!src/__tests__/**/*.test.{ts,tsx}",
      "tests/__mocks__/*.ts",
      "tests/__setup__/*.ts",
      "babel.config.js"
    ],

    tests: ["src/__tests__/**/*.test.{ts,tsx}"],

    env: {
      type: "node",
      runner: "node"
    },

    testFramework: "jest",
    compilers: {
      "**/*.{ts,tsx}": w.compilers.typeScript({
        typescript: require("typescript"),
        module: "commonjs",
        jsx: "react"
      })
    }
  };
};
