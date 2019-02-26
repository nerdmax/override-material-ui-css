# override-material-ui-css

[![Greenkeeper badge](https://badges.greenkeeper.io/nerdmax/override-material-ui-css.svg)](https://greenkeeper.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![NPM Version](https://img.shields.io/npm/v/override-material-ui-css.svg?style=flat-square)][npm-url]
[![License Stats](https://img.shields.io/npm/l/override-material-ui-css.svg)][npm-url]
[![Downloads Stats](https://img.shields.io/npm/dm/override-material-ui-css.svg?style=flat-square)][npm-url]
[![Github stars](https://img.shields.io/github/stars/nerdmax/override-material-ui-css.svg)][github-url]
[![Github issues](https://img.shields.io/github/issues/nerdmax/override-material-ui-css.svg)][github-issues-url]
[![Build Status](https://travis-ci.org/nerdmax/override-material-ui-css.svg?branch=master)](https://travis-ci.org/nerdmax/override-material-ui-css)
[![codecov](https://codecov.io/gh/nerdmax/override-material-ui-css/branch/master/graph/badge.svg)](https://codecov.io/gh/nerdmax/override-material-ui-css)
[![Dev Dependencies](https://david-dm.org/nerdmax/override-material-ui-css.svg)](https://david-dm.org/nerdmax/override-material-ui-css)

[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/nerdmax)

> [Material-UI](https://material-ui.com/) is a cool react component library and it's using [JSS](https://github.com/cssinjs/jss) as styling solution. The CSS injected by Material-UI to style a component has the highest specificity possible as the `<style>` is injected at the bottom of the `<head>` to ensure the components always render correctly. You need to change the order of the `<style>` injected by Material-UI if you want to override its default style

This library is a wrapper component which only takes the children prop and renders it without any modification but just moving Material-UI's `<style>` tag to the top of the `<head>` tag. It will make overriding style very easy.

PS: OverrideMaterialUICss will add [CSS Baseline](https://material-ui.com/style/css-baseline/). It's provided by Material-UI to kickstart an elegant, consistent, and simple baseline to build upon. It's not a must have thing and you can disable this feature by setting `useCssBaseline` to false. Eg:

`<OverrideMaterialUICss useCssBaseline={false}> <button>testButton</button> </OverrideMaterialUICss>`

[![NPM](https://nodei.co/npm/override-material-ui-css.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/override-material-ui-css/)

- [override-material-ui-css](#override-material-ui-css)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
  - [Contributing](#contributing)
  - [Contributors](#contributors)

## Installation

Install the plugin with npm:

```shell
npm install --save-dev override-material-ui-css
```

## Basic Usage

Require the plugin in your index.js:

```typescript
import { OverrideMaterialUICss } from "override-material-ui-css"
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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table cellspacing="0" cellpadding="1"><tr><td><a href="https://github.com/nerdmax"><img src="https://avatars3.githubusercontent.com/u/18550349?v=4" width="100px;" height="100px;" alt="Max Liu"/><br /><sub><b>Max Liu</b></sub></a><br /><a href="https://github.com/nerdmax/override-material-ui-css/commits?author=nerdmax" title="Code">💻</a> <a href="https://github.com/nerdmax/override-material-ui-css/commits?author=nerdmax" title="Documentation">📖</a> <a href="#infra-nerdmax" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/nerdmax/override-material-ui-css/commits?author=nerdmax" title="Tests">⚠️</a></td></tr></table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
