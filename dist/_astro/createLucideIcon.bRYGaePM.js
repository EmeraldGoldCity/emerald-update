import{a as y,r as l}from"./index.DK-fsZOb.js";var _={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R;function h(){if(R)return c;R=1;var e=y(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(u,t,m){var n,f={},d=null,x=null;m!==void 0&&(d=""+m),t.key!==void 0&&(d=""+t.key),t.ref!==void 0&&(x=t.ref);for(n in t)s.call(t,n)&&!a.hasOwnProperty(n)&&(f[n]=t[n]);if(u&&u.defaultProps)for(n in t=u.defaultProps,t)f[n]===void 0&&(f[n]=t[n]);return{$$typeof:r,type:u,key:d,ref:x,props:f,_owner:i.current}}return c.Fragment=o,c.jsx=p,c.jsxs=p,c}var w;function E(){return w||(w=1,_.exports=h()),_.exports}var L=E();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,o,s)=>s?s.toUpperCase():o.toLowerCase()),v=e=>{const r=b(e);return r.charAt(0).toUpperCase()+r.slice(1)},C=(...e)=>e.filter((r,o,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=l.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:i="",children:a,iconNode:p,...u},t)=>l.createElement("svg",{ref:t,...g,width:r,height:r,stroke:e,strokeWidth:s?Number(o)*24/Number(r):o,className:C("lucide",i),...u},[...p.map(([m,n])=>l.createElement(m,n)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,r)=>{const o=l.forwardRef(({className:s,...i},a)=>l.createElement(O,{ref:a,iconNode:r,className:C(`lucide-${k(v(e))}`,`lucide-${e}`,s),...i}));return o.displayName=v(e),o};export{A as c,L as j};
