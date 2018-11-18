(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/WithoutOverrideMaterialUICss.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),s=t("./node_modules/docz/dist/index.m.js"),c=t("./src/OverrideMaterialUICss.tsx"),i=t("./node_modules/@material-ui/core/Button/index.js"),m=t.n(i),d=t("./node_modules/emotion/dist/index.esm.js");function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.default=function(e){var n=e.components,t=l(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"without-overridematerialuicss"}},"Without OverrideMaterialUICss"),a.a.createElement(r.MDXTag,{name:"p",components:n},"This is the material-ui's button with some customised css created by ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://emotion.sh/"}},"emotion"),":"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metastring:""}},"css(`\n  color: red;\n  background-color: blue;\n  font-size: 4rem;\n`);\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"We cannot change the button style."),a.a.createElement(s.Playground,{__codesandbox:"undefined",__position:0,__code:'<Button\n  variant="contained"\n  className={css(`\n  color: red;\n  background-color: blue;\n  font-size: 4rem;\n`)}\n>\n  Button\n</Button>',__scope:{props:t,OverrideMaterialUICss:c.a,Button:m.a,css:d.css}},a.a.createElement(m.a,{variant:"contained",className:Object(d.css)("\n    color: red;\n    background-color: blue;\n    font-size: 4rem;\n  ")},"Button")))}}}]);