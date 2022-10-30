/*! For license information please see component---src-pages-halle-js-0565635eaba0ca3ff8bb.js.LICENSE.txt */
(self.webpackChunktvz_gatsby=self.webpackChunktvz_gatsby||[]).push([[987],{5837:function(t,e,n){var r=n(2109),o=n(7854);r({global:!0,forced:o.globalThis!==o},{globalThis:o})},5743:function(t,e,n){n(5837)},3254:function(t,e,n){"use strict";var r=n(7294);e.Z=function(t){var e=t.children;return r.createElement("div",{className:"container"},e)}},9824:function(t,e,n){"use strict";var r=n(7294);e.Z=function(t){var e=t.children;return r.createElement(r.Fragment,null,r.createElement("section",{className:"section"},e))}},9556:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return nt},default:function(){return rt}});var r=n(5861),o=n(4687),i=n.n(o),a=n(7294),c=n(5697),u=n.n(c),l=n(4942);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,l.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=(0,a.createContext)(null),d=p.Provider;function h(){var t=(0,a.useContext)(p);if(null==t)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}function m(){return h().map}var v=n(5987);n(3935);function g(t){function e(e,n){var r=t(e).current.instance;return(0,a.useImperativeHandle)(n,(function(){return r})),null}return(0,a.forwardRef)(e)}function y(t,e,n){return Object.freeze({instance:t,context:e,container:n})}function b(t,e){return null==e?function(e,n){var r=(0,a.useRef)();return r.current||(r.current=t(e,n)),r}:function(n,r){var o=(0,a.useRef)();o.current||(o.current=t(n,r));var i=(0,a.useRef)(n),c=o.current.instance;return(0,a.useEffect)((function(){i.current!==n&&(e(c,n,i.current),i.current=n)}),[c,n,r]),o}}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){(0,l.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e){var n,r=null!==(n=t.pane)&&void 0!==n?n:e.pane;return r?x(x({},t),{},{pane:r}):t}function E(t){return function(e){var n,r,o,i=h(),c=t(A(e,i),i);return function(t,e){var n=(0,a.useRef)(e);(0,a.useEffect)((function(){e!==n.current&&null!=t.attributionControl&&(null!=n.current&&t.attributionControl.removeAttribution(n.current),null!=e&&t.attributionControl.addAttribution(e)),n.current=e}),[t,e])}(i.map,e.attribution),n=c.current,r=e.eventHandlers,o=(0,a.useRef)(),(0,a.useEffect)((function(){return null!=r&&n.instance.on(r),o.current=r,function(){null!=o.current&&n.instance.off(o.current),o.current=null}}),[n,r]),function(t,e){(0,a.useEffect)((function(){var n;return(null!==(n=e.layerContainer)&&void 0!==n?n:e.map).addLayer(t.instance),function(){var n;null===(n=e.layerContainer)||void 0===n||n.removeLayer(t.instance),e.map.removeLayer(t.instance)}}),[e,t])}(c.current,i),c}}var O=n(7678),k=n.n(O),N=["position"],j=function(t){function e(e,n){var r=t(e).current,o=r.instance,i=r.context;return(0,a.useImperativeHandle)(n,(function(){return o})),null==e.children?null:a.createElement(d,{value:i},e.children)}return(0,a.forwardRef)(e)}(E(b((function(t,e){var n,r,o=t.position,i=(0,v.Z)(t,N),a=new O.Marker(o,i);return y(a,(n=e,r={overlayContainer:a},Object.freeze(f(f({},n),r))))}),(function(t,e,n){e.position!==n.position&&t.setLatLng(e.position),null!=e.icon&&e.icon!==n.icon&&t.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==n.zIndexOffset&&t.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==n.opacity&&t.setOpacity(e.opacity),null!=t.dragging&&e.draggable!==n.draggable&&(!0===e.draggable?t.dragging.enable():t.dragging.disable())})))),z=n(9828),S=n(3254),M=n(9824),L=n(43);function Z(t,e){var n=e.zoom,r=e.center;return new Promise((function(e,o){var i="Failed to fly to area";t.flyTo||o(i+": no flyTo method on map"),"number"!=typeof n&&o(i+": zoom invalid number "+n);var a=r||t.getCenter(),c=n||t.getZoom();t.flyTo(a,c,{duration:2}),t.once("moveend",(function(){e()}))}))}var C=n(2982),B=n(3366),R=n(885),H=["bounds","boundsOptions","center","children","className","id","placeholder","style","whenReady","zoom"];function T(){return T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},T.apply(this,arguments)}function I(t,e){var n=t.bounds,r=t.boundsOptions,o=t.center,i=t.children,c=t.className,u=t.id,l=t.placeholder,s=t.style,f=t.whenReady,p=t.zoom,h=(0,v.Z)(t,H),m=(0,a.useState)({className:c,id:u,style:s}),g=(0,R.Z)(m,1)[0],y=(0,a.useState)(null),b=(0,R.Z)(y,2),w=b[0],x=b[1];(0,a.useImperativeHandle)(e,(function(){var t;return null!==(t=null==w?void 0:w.map)&&void 0!==t?t:null}),[w]);var A=(0,a.useCallback)((function(t){if(null!==t&&null===w){var e=new O.Map(t,h);null!=o&&null!=p?e.setView(o,p):null!=n&&e.fitBounds(n,r),null!=f&&e.whenReady(f),x(function(t){return Object.freeze({__version:1,map:t})}(e))}}),[]);(0,a.useEffect)((function(){return function(){null==w||w.map.remove()}}),[w]);var E=w?a.createElement(d,{value:w},i):null!=l?l:null;return a.createElement("div",T({},g,{ref:A}),E)}var P=(0,a.forwardRef)(I);var J,U,D,F=["url"],K=function(t,e){return g(E(b(t,e)))}((function(t,e){var n=t.url,r=(0,v.Z)(t,F);return y(new O.TileLayer(n,A(r,e)),e)}),(function(t,e,n){var r=e.opacity,o=e.zIndex;null!=r&&r!==n.opacity&&t.setOpacity(r),null!=o&&o!==n.zIndex&&t.setZIndex(o)})),V=(U=function(t){return new O.Control.Zoom(t)},J=b((function(t,e){return y(U(t),e)})),D=function(t){var e=h(),n=J(t,e),r=n.current.instance,o=(0,a.useRef)(t.position),i=t.position;return(0,a.useEffect)((function(){return r.addTo(e.map),function(){r.remove()}}),[e.map,r]),(0,a.useEffect)((function(){null!=i&&i!==o.current&&(r.setPosition(i),o.current=i)}),[r,i]),n},g(D));var X=[{name:"OpenStreetMap",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{name:"BlueMarble",attribution:"&copy; NASA Blue Marble, image service by OpenGeo",url:"https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"}];function Y(t,e){return void 0===e&&(e=[]),[].concat((0,C.Z)(X||[]),(0,C.Z)(e)).find((function(e){return e.name===t}))}var q=function(t){void 0===t&&(t={}),this._service=Object.assign({},t),this.name=this._service.name,this.attribution=this._service.attribution,this.url=this._service.url};n(1082);var Q=["children","className","defaultBaseMap"],G="OpenStreetMap",W=function(t){var e=t.children,r=t.className,o=t.defaultBaseMap,i=void 0===o?G:o,c=(0,B.Z)(t,Q);(0,a.useEffect)((function(){delete k().Icon.Default.prototype._getIconUrl,k().Icon.Default.mergeOptions({iconRetinaUrl:n(1604).Z,iconUrl:n(4929).Z,shadowUrl:n(4904).Z})}),[]);var u,l,s,f,p,d=(u={names:(0,C.Z)(new Set([i,G]))},s=(l=void 0===u?{}:u).names,f=void 0===s?[]:s,p=l.services,f.map((function(t){return Y(t,p)})).map((function(t){return new q(t)}))).find((function(t){return t.name===i})),h="map";if(r&&(h=h+" "+r),"undefined"==typeof window||!window.document||!window.document.createElement)return a.createElement("div",{className:h},a.createElement("p",{className:"map-loading"},"Loading map..."));var m=Object.assign({className:"map-base",zoomControl:!1},c);return a.createElement("div",{className:h},a.createElement(P,m,e,d&&a.createElement(K,d),a.createElement(V,{position:"bottomright"})))},_={lat:47.28347960537729,lng:7.940711975097656},$=[_.lat,_.lng],tt={center:$,defaultBaseMap:"OpenStreetMap",zoom:7},et=function(t){var e=t.markerRef,n=m();return(0,a.useEffect)((function(){var t;e.current&&n&&(t=(0,r.Z)(i().mark((function t(){var o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=k().popup({maxWidth:800}),a=(e||{}).current,o.setContent("<p>BZZ 🤾</p>"),setTimeout((0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(n,{zoom:15,center:_});case 2:a.bindPopup(o),setTimeout((function(){return a.openPopup()}),2e3),setTimeout((function(){return a.setPopupContent('\n  <div className="content">\n    <h1>BZZ</h1>\n    <p>Strengelbacherstrasse Zofingen</p>\n  </div>\n')}),5e3);case 5:case"end":return t.stop()}}),t)}))),2500);case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})()}),[n,e]),null};et.propTypes={markerRef:u().object};var nt=function(){return a.createElement("title",null,"Halle")},rt=function(){var t=(0,a.useRef)();return a.createElement(z.Z,{title:"Halle"},a.createElement(M.Z,null,a.createElement(S.Z,null,a.createElement(W,tt,a.createElement(et,{markerRef:t}),a.createElement(j,{ref:t,position:$})),a.createElement("div",{className:"content"},a.createElement("p",null,"Der TV Zofingen bestreitet seine Heimspiele in der Halle BZZ.",a.createElement("ul",null,a.createElement("li",null,a.createElement(L.Z,{to:"https://www.handball.ch/de/matchcenter/hallen/140961#/"},"Hallenübersicht SHV")),a.createElement("li",null,a.createElement(L.Z,{to:"https://www.handball.ch/de/matchcenter/hallen/140961#/schedule"},"Spiele im BZZ"))))))))}},1604:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcY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"},4929:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="},4904:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"},7061:function(t,e,n){var r=n(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return z()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=p(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=f;var d={};function h(){}function m(){}function v(){}var g={};s(g,c,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(j([])));b&&b!==n&&i.call(b,c)&&(g=b);var w=v.prototype=h.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function n(o,a,c,u){var l=p(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=p(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:z}}function z(){return{value:void 0,done:!0}}return m.prototype=v,s(w,"constructor",v),s(v,"constructor",m),m.displayName=s(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(A.prototype),s(A.prototype,u,(function(){return this})),e.AsyncIterator=A,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new A(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,n){var r=n(7061)();t.exports=r;try{regeneratorRuntime=r}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},5861:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return o}})},4942:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},5987:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(3366);function o(t,e){if(null==t)return{};var n,o,i=(0,r.Z)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},885:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(181);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=component---src-pages-halle-js-0565635eaba0ca3ff8bb.js.map