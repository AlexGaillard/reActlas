"use strict";(self.webpackChunkreatlas=self.webpackChunkreatlas||[]).push([[181],{2181:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(7294),l=n(7625),r=n(1436);const c=function(){return a.createElement("div",{className:"not-found"},a.createElement(l.G,{icon:r.WV2}),a.createElement("p",null,"Country not found"))};var u=n(3727);const o=function(e){var t=e.countryData;return a.createElement("div",{className:"country","aria-label":"See more details about ".concat(t.name)},a.createElement("img",{src:t.flag,alt:"Flag of ".concat(t.name)}),a.createElement("div",null,a.createElement("h3",null,t.name),a.createElement("p",null,a.createElement("span",null,"Population:")," ",new Intl.NumberFormat("en-US").format(t.population)),a.createElement("p",null,a.createElement("span",null,"Region:")," ",t.region),a.createElement("p",null,a.createElement("span",null,"Capital:")," ",t.capital)))},m=function(e){return e.displayed.map((function(e){return a.createElement(u.rU,{to:{pathname:"/".concat(e.name),state:{country:e}},key:e.alpha3Code},a.createElement(o,{key:e.name,countryData:e}))}))},i=function(){return a.createElement("div",{className:"loader"},a.createElement(l.G,{icon:r.LM3,spin:!0})," ",a.createElement("p",null,"Loading..."))},s=function(e){var t=e.displayed,n=e.searchString;return a.createElement("div",{id:"countries"},!t.length&&n?a.createElement(c,null):t.length?a.createElement(m,{displayed:t}):a.createElement(i,null))}}}]);