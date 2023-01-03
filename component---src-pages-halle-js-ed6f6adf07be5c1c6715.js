"use strict";(self.webpackChunktvz_gatsby=self.webpackChunktvz_gatsby||[]).push([[987],{4217:function(e,n,t){t.r(n),t.d(n,{Head:function(){return H},default:function(){return I}});var r=t(7294);const u=(0,r.createContext)(null),o=u.Provider;function c(){const e=(0,r.useContext)(u);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var l=t(5243);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i({bounds:e,boundsOptions:n,center:t,children:u,className:c,id:i,placeholder:s,style:f,whenReady:p,zoom:d,...m},h){const[v]=(0,r.useState)({className:c,id:i,style:f}),[b,y]=(0,r.useState)(null);(0,r.useImperativeHandle)(h,(()=>b?.map??null),[b]);const g=(0,r.useCallback)((r=>{if(null!==r&&null===b){const u=new l.Map(r,m);null!=t&&null!=d?u.setView(t,d):null!=e&&u.fitBounds(e,n),null!=p&&u.whenReady(p),y(function(e){return Object.freeze({__version:1,map:e})}(u))}}),[]);(0,r.useEffect)((()=>()=>{b?.map.remove()}),[b]);const E=b?r.createElement(o,{value:b},u):s??null;return r.createElement("div",a({},v,{ref:g}),E)}const s=(0,r.forwardRef)(i);var f=t(3935);function p(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function d(e,n){return null==n?function(n,t){const u=(0,r.useRef)();return u.current||(u.current=e(n,t)),u}:function(t,u){const o=(0,r.useRef)();o.current||(o.current=e(t,u));const c=(0,r.useRef)(t),{instance:l}=o.current;return(0,r.useEffect)((function(){c.current!==t&&(n(l,t,c.current),c.current=t)}),[l,t,u]),o}}function m(e,n){const t=(0,r.useRef)(n);(0,r.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}function h(e,n){const t=(0,r.useRef)();(0,r.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}function v(e,n){const t=e.pane??n.pane;return t?{...e,pane:t}:e}function b(e){return function(n){const t=c(),u=e(v(n,t),t);return m(t.map,n.attribution),h(u.current,n.eventHandlers),function(e,n){(0,r.useEffect)((function(){return(n.layerContainer??n.map).addLayer(e.instance),function(){n.layerContainer?.removeLayer(e.instance),n.map.removeLayer(e.instance)}}),[n,e])}(u.current,t),u}}const y=function(e){function n(n,t){const{instance:u}=e(n).current;return(0,r.useImperativeHandle)(t,(()=>u)),null}return(0,r.forwardRef)(n)}(b(d((function({url:e,...n},t){return p(new l.TileLayer(e,v(n,t)),t)}),(function(e,n,t){!function(e,n,t){const{opacity:r,zIndex:u}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=u&&u!==t.zIndex&&e.setZIndex(u)}(e,n,t);const{url:r}=n;null!=r&&r!==t.url&&e.setUrl(r)}))));const g=function(e,n){return function(e){function n(n,t){const{instance:u,context:c}=e(n).current;return(0,r.useImperativeHandle)(t,(()=>u)),null==n.children?null:r.createElement(o,{value:c},n.children)}return(0,r.forwardRef)(n)}(b(d(e,n)))}((function({position:e,...n},t){const r=new l.Marker(e,n);return p(r,(u=t,o={overlayContainer:r},Object.freeze({...u,...o})));var u,o}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),E=function(e,n){const t=function(e,n){return function(t,r){const u=c(),o=e(v(t,u),u);return m(u.map,t.attribution),h(o.current,t.eventHandlers),n(o.current,u,t,r),o}}(d(e),n);return function(e){function n(n,t){const[u,o]=(0,r.useState)(!1),{instance:c}=e(n,o).current;(0,r.useImperativeHandle)(t,(()=>c)),(0,r.useEffect)((function(){u&&c.update()}),[c,u,n.children]);const l=c._contentNode;return l?(0,f.createPortal)(n.children,l):null}return(0,r.forwardRef)(n)}(t)}((function(e,n){return p(new l.Popup(e,n.overlayContainer),n)}),(function(e,n,{position:t},u){(0,r.useEffect)((function(){const{instance:r}=e;function o(e){e.popup===r&&(r.update(),u(!0))}function c(e){e.popup===r&&u(!1)}return n.map.on({popupopen:o,popupclose:c}),null==n.overlayContainer?(null!=t&&r.setLatLng(t),r.openOn(n.map)):n.overlayContainer.bindPopup(r),function(){n.map.off({popupopen:o,popupclose:c}),n.overlayContainer?.unbindPopup(),n.map.removeLayer(r)}}),[e,n,u,t])}));var w={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},C=t(9601),x=t(3254),O=t(9824),Z=t(43);const z=[47.28347960537729,7.940711975097656],H=()=>r.createElement("title",null,"Halle");var I=()=>r.createElement(C.Z,{title:"Halle"},r.createElement(O.Z,null,r.createElement(x.Z,null,r.createElement(s,{style:{height:"450px",width:"100%"},center:z,zoom:15},r.createElement(y,w),r.createElement(g,{position:z},r.createElement(E,null,r.createElement("div",{className:"content"},r.createElement("h1",null,"BZZ"),r.createElement("p",null,"Strengelbacherstrasse Zofingen"))))),r.createElement("div",{className:"content"},r.createElement("p",null,"Der TV Zofingen bestreitet seine Heimspiele in der Halle BZZ."),r.createElement("ul",null,r.createElement("li",null,r.createElement(Z.Z,{to:"https://www.handball.ch/de/matchcenter/hallen/140961#/"},"Hallenübersicht SHV")),r.createElement("li",null,r.createElement(Z.Z,{to:"https://www.handball.ch/de/matchcenter/hallen/140961#/schedule"},"Spiele im BZZ")))))))}}]);
//# sourceMappingURL=component---src-pages-halle-js-ed6f6adf07be5c1c6715.js.map