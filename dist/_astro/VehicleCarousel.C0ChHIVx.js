import{c as n,j as t}from"./createLucideIcon.bRYGaePM.js";import{r as h}from"./index.DK-fsZOb.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],m=n("chevron-left",u);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],g=n("chevron-right",d);function f({images:e,alt:c="Vehicle"}){const[l,r]=h.useState(0),s=()=>{r(o=>o===0?e.length-1:o-1)},i=()=>{r(o=>o===e.length-1?0:o+1)};return e.length===0?null:t.jsxs("div",{className:"relative group",children:[t.jsx("div",{className:"flex items-center justify-center h-48 mb-4 overflow-hidden",children:t.jsx("img",{src:e[l],alt:`${c} view ${l+1}`,className:"max-w-full max-h-full object-contain transition-opacity duration-300"})}),e.length>1&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:s,className:"absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Previous image",children:t.jsx(m,{className:"w-5 h-5"})}),t.jsx("button",{onClick:i,className:"absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Next image",children:t.jsx(g,{className:"w-5 h-5"})}),t.jsx("div",{className:"flex justify-center gap-2 mt-2",children:e.map((o,a)=>t.jsx("button",{onClick:()=>r(a),className:`w-2 h-2 rounded-full transition-all ${a===l?"bg-[#d4af37] w-6":"bg-gray-300"}`,"aria-label":`Go to image ${a+1}`},a))})]})]})}export{f as VehicleCarousel};
