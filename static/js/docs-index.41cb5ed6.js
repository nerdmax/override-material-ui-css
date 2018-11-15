(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/index.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"why-use-this-library"}},"Why use this library"),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://material-ui.com/"}},"Material-UI")," is a cool react component library and it's using ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/cssinjs/jss"}},"JSS")," as styling solution. The CSS injected by Material-UI to style a component has the highest specificity possible as the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<style>")," is injected at the bottom of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<head>")," to ensure the components always render correctly. You need to change the order of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<style>")," injected by Material-UI if you want to override the it's default style.")),o.a.createElement(r.MDXTag,{name:"p",components:t},"This library is a wrapper component which only takes the children prop and renders it without any modification but just moving Material-UI's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<style>")," tag to the top of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<head>")," tag. It will make overriding style very easy."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Check the examples in the side bar."))}}}]);