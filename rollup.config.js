import resolve from "rollup-plugin-node-resolve"
import filesize from "rollup-plugin-filesize"
import sourceMaps from "rollup-plugin-sourcemaps"
import pkg from "./package.json"
import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import cleanup from "rollup-plugin-cleanup"

const input = "compiled/index.js"

const plugins = [
  babel(),
  resolve({
    extensions: [".js", ".jsx", ".json"]
  }),
  commonjs({
    namedExports: {
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      "node_modules/@material-ui/core/styles/index.js": [
        "createGenerateClassName",
        "jssPreset"
      ]
    }
  }),
  cleanup(),
  sourceMaps(),
  filesize()
]

export default [
  {
    input,
    external: ["react", "react-dom"],
    output: [
      {
        file: pkg.unpkg,
        format: "umd",
        sourcemap: true,
        name: "pebble",
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    ],
    plugins
  },
  {
    input,
    external: Object.keys(pkg.dependencies),
    output: [
      {
        file: pkg.module,
        format: "es",
        sourcemap: true
      },
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      }
    ],
    plugins
  }
]
