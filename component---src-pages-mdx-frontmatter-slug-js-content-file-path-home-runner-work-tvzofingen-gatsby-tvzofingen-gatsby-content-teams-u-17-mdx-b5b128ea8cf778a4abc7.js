"use strict";(self.webpackChunktvz_gatsby=self.webpackChunktvz_gatsby||[]).push([[288],{9626:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return l}});var r=n(4942),o=n(7294);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=o.createContext({});function l(e){var t=o.useContext(u);return o.useMemo((function(){return"function"==typeof e?e(t):a(a({},t),e)}),[t,e])}var c={};function s(e){var t=e.components,n=e.children,r=e.disableParentContext,i=l(t);return r&&(i=t||c),o.createElement(u.Provider,{value:i},n)}},5433:function(e,t,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(7294),l=n(5697),c=[],s=[];function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function d(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=f(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function p(e,t){return u.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function m(e,t){var f,d;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var m=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:p,webpack:null,modules:null},t),h=null;function y(){return h||(h=e(m.loader)),h.promise}return c.push(y),"function"==typeof m.webpack&&s.push((function(){if(e=m.webpack,"object"===r(n.m)&&e().every((function(e){return void 0!==e&&void 0!==n.m[e]})))return y();var e})),d=f=function(t){function n(r){o(this,n);var a=i(this,t.call(this,r));return a.retry=function(){a.setState({error:null,loading:!0,timedOut:!1}),h=e(m.loader),a._loadModule()},y(),a.state={error:h.error,pastDelay:!1,timedOut:!1,loading:h.loading,loaded:h.loaded},a}return a(n,t),n.preload=function(){return y()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(m.modules)&&m.modules.forEach((function(t){e.context.loadable.report(t)})),h.loading){"number"==typeof m.delay&&(0===m.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),m.delay)),"number"==typeof m.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),m.timeout));var t=function(){e._mounted&&(e.setState({error:h.error,loaded:h.loaded,loading:h.loading}),e._clearTimeouts())};h.promise.then((function(){t()})).catch((function(e){t()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?u.createElement(m.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?m.render(this.state.loaded,this.props):null},n}(u.Component),f.contextTypes={loadable:l.shape({report:l.func.isRequired})},d}function h(e){return m(f,e)}h.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(d,e)};var y=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return u.Children.only(this.props.children)},t}(u.Component);function b(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then((function(){if(e.length)return b(e)}))}y.propTypes={report:l.func.isRequired},y.childContextTypes={loadable:l.shape({report:l.func.isRequired}).isRequired},h.Capture=y,h.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},h.preloadReady=function(){return new Promise((function(e,t){b(s).then(e,e)}))},e.exports=h},5665:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(9626),o=n(7294);function i(e){return o.createElement(o.Fragment)}var a=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?o.createElement(t,e,o.createElement(i,e)):i()},u=n(1082),l=n(3254),c=n(9824),s=n(121),f=n(9155),d={Link:u.Link,LazyPlot:f.L};function p(e){var t=e.data,n=e.children,i=t.mdx.frontmatter;return o.createElement(s.Z,{frontmatter:i},o.createElement(c.Z,null,o.createElement(l.Z,null,o.createElement(r.Zo,{components:d},n))))}function m(e){return o.createElement(p,e,o.createElement(a,e))}},9155:function(e,t,n){n.d(t,{L:function(){return m}});var r=n(3366),o=n(7294),i=n(5433),a=n.n(i);var u,l,c,s=n(3494).ZP.div(u||(l=["\n  margin: 2em auto;\n  width: 2em;\n  height: 2em;\n  transform: rotateZ(45deg);\n  div {\n    float: left;\n    width: 50%;\n    height: 50%;\n    position: relative;\n    transform: scale(1.1);\n  }\n  div::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: var(--color-text);\n    ",";\n    transform-origin: 100% 100%;\n  }\n  ","\n  @keyframes foldCube {\n    0%,\n    10% {\n      transform: perspective(140px) rotateX(-180deg);\n      opacity: 0;\n    }\n    25%,\n    75% {\n      transform: perspective(140px) rotateX(0deg);\n      opacity: 1;\n    }\n    90%,\n    100% {\n      transform: perspective(140px) rotateY(180deg);\n      opacity: 0;\n    }\n  }\n"],c||(c=l.slice(0)),l.raw=c,u=l),(function(e){return e.active&&"animation: foldCube 2.4s infinite linear both"}),[2,4,3].map((function(e,t){return"div:nth-child("+e+") {\n        transform: scale(1.1) rotateZ("+90*(t+1)+"deg);\n      }\n      div:nth-child("+e+")::before {\n        animation-delay: "+.3*(t+1)+"s;\n      }"})).join("\n")),f=function(e){var t=(0,o.useState)(!0),n=t[0],r=t[1];return o.createElement(s,Object.assign({},e,{active:n,onClick:function(){return r(!n)}}),Array(4).fill().map((function(e,t){return o.createElement("div",{key:t})})))},d=["layout","style","config"],p=a()({loader:function(){return Promise.all([n.e(960),n.e(969)]).then(n.bind(n,2318))},loading:function(e){return e.timedOut?o.createElement("blockquote",null,"Error: Loading Plotly timed out."):o.createElement(f,null)},timeout:1e4}),m=function(e){var t=e.layout,n=e.style,i=e.config,a=(0,r.Z)(e,d);return o.createElement(o.Fragment,null,o.createElement(p,Object.assign({layout:Object.assign({margin:{t:0,r:0,b:0,l:0},paper_bgcolor:"rgba(0, 0, 0, 0)",plot_bgcolor:"rgba(0, 0, 0, 0)",font:{color:"white",size:16},autosize:!0},t),style:Object.assign({width:"100%"},n),useResizeHandler:!0,config:Object.assign({displayModeBar:!1,showTips:!1},i)},a)))}},3254:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children;return r.createElement("div",{className:"container"},t)}},9824:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement("section",{className:"section"},t))}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-slug-js-content-file-path-home-runner-work-tvzofingen-gatsby-tvzofingen-gatsby-content-teams-u-17-mdx-b5b128ea8cf778a4abc7.js.map