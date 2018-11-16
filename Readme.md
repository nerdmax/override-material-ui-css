# override-material-ui-css

[![Greenkeeper badge](https://badges.greenkeeper.io/nerdmax/override-material-ui-css.svg)](https://greenkeeper.io/)
[![NPM Version](https://img.shields.io/npm/v/override-material-ui-css.svg?style=flat-square)][npm-url]
[![License Stats](https://img.shields.io/npm/l/override-material-ui-css.svg)][npm-url]
[![Downloads Stats](https://img.shields.io/npm/dm/override-material-ui-css.svg?style=flat-square)][npm-url]
[![Github stars](https://img.shields.io/github/stars/nerdmax/override-material-ui-css.svg)][github-url]
[![Github issues](https://img.shields.io/github/issues/nerdmax/override-material-ui-css.svg)][github-issues-url]
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/nerdmax/override-material-ui-css.svg?branch=master)](https://travis-ci.org/nerdmax/override-material-ui-css)
[![codecov](https://codecov.io/gh/nerdmax/override-material-ui-css/branch/master/graph/badge.svg)](https://codecov.io/gh/nerdmax/override-material-ui-css)
[![Dev Dependencies](https://david-dm.org/nerdmax/override-material-ui-css.svg)](https://david-dm.org/nerdmax/override-material-ui-css)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/nerdmax)

> [Material-UI](https://material-ui.com/) is a cool react component library and it's using [JSS](https://github.com/cssinjs/jss) as styling solution. The CSS injected by Material-UI to style a component has the highest specificity possible as the `<style>` is injected at the bottom of the `<head>` to ensure the components always render correctly. You need to change the order of the `<style>` injected by Material-UI if you want to override the it's default style

This library is a wrapper component which only takes the children prop and renders it without any modification but just moving Material-UI's `<style>` tag to the top of the `<head>` tag. It will make overriding style very easy.

PS: OverrideMaterialUICss will add [CSS Baseline](https://material-ui.com/style/css-baseline/). It's provided by Material-UI to kickstart an elegant, consistent, and simple baseline to build upon. It's not a must have thing and you can disable this feature by setting `useCssBaseline` to false. Eg: `<OverrideMaterialUICss useCssBaseline={false}> <button>testButton</button> </OverrideMaterialUICss>`

[![NPM](https://nodei.co/npm/override-material-ui-css.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/override-material-ui-css/)

- [override-material-ui-css](#override-material-ui-css)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
  - [Contributing](#contributing)

## Installation

Install the plugin with npm:

```shell
npm install --save-dev override-material-ui-css
```

## Basic Usage

Require the plugin in your index.js:

```typescript
import { OverrideMaterialUICss } from "override-material-ui-css";
```

Wrap your component with `OverrideMaterialUICss` :

```html
<OverrideMaterialUICss> <button>testButton</button> </OverrideMaterialUICss>
```

For more details, please check: [Live examples](https://nerdmax.github.io/override-material-ui-css)

## Contributing

1. Fork it (<https://github.com/nerdmax/override-material-ui-css/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-url]: https://www.npmjs.com/package/override-material-ui-css
[github-url]: https://github.com/nerdmax/override-material-ui-css
[github-issues-url]: https://github.com/nerdmax/override-material-ui-css/issues
