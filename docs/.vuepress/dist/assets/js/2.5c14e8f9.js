(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{363:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return v}));n(32),n(88),n(390),n(113),n(365),n(201),n(87),n(119),n(13),n(120),n(62),n(121),n(366);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function p(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:h(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var r=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return g(t);var o=a.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),u=l.base,c=l.config;return"auto"===c?g(t):c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});var s=e.children||[];return 0===s.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,u)})):[]}return[]}function g(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},365:function(t,e,n){"use strict";var i=n(41),r=n(6),s=n(2),a=n(198),o=n(9),l=n(40),u=n(196),c=n(29),h=n(116),p=n(199),d=n(85),f=n(15),g=n(61),m=n(204),v=n(200),b=n(89),k=n(195),_=n(1),x=k.UNSUPPORTED_Y,y=Math.min,C=[].push,$=s(/./.exec),L=s(C),w=s("".slice);a("split",(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=f(c(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[s];if(!u(t))return r(e,s,t,a);for(var o,l,h,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,d+"g");(o=r(b,v,s))&&!((l=v.lastIndex)>g&&(L(p,w(s,g,o.index)),o.length>1&&o.index<s.length&&i(C,p,m(o,1)),h=o[0].length,g=l,p.length>=a));)v.lastIndex===o.index&&v.lastIndex++;return g===s.length?!h&&$(v,"")||L(p,""):L(p,w(s,g)),p.length>a?m(p,0,a):p}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=c(this),a=l(e)?void 0:g(e,t);return a?r(a,e,i,n):r(s,f(i),e,n)},function(t,i){var r=o(this),a=f(t),l=n(s,r,a,i,s!==e);if(l.done)return l.value;var u=h(r,RegExp),c=r.unicode,g=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(x?"g":"y"),m=new u(x?"^(?:"+r.source+")":r,g),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===a.length)return null===v(m,a)?[a]:[];for(var k=0,_=0,C=[];_<a.length;){m.lastIndex=x?0:_;var $,O=v(m,x?w(a,_):a);if(null===O||($=y(d(m.lastIndex+(x?_:0)),a.length))===k)_=p(a,_,c);else{if(L(C,w(a,k,_)),C.length===b)return C;for(var S=1;S<=O.length-1;S++)if(L(C,O[S]),C.length===b)return C;_=k=$}}return L(C,w(a,k)),C}]}),!!_((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),x)},366:function(t,e,n){"use strict";var i=n(0),r=n(2),s=n(114).indexOf,a=n(64),o=r([].indexOf),l=!!o&&1/o([1],1,-0)<0,u=a("indexOf");i({target:"Array",proto:!0,forced:l||!u},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return l?o(this,t,e)||0:s(this,t,e)}})},367:function(t,e,n){},368:function(t,e,n){"use strict";var i=n(0),r=n(17),s=n(23),a=n(392),o=n(209),l=n(1)((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();i({target:"Array",proto:!0,arity:1,forced:l||u},{push:function(t){var e=r(this),n=s(e),i=arguments.length;o(n+i);for(var l=0;l<i;l++)e[n]=arguments[l],n++;return a(e,n),n}})},369:function(t,e,n){var i=n(6),r=n(10),s=n(31),a=n(205),o=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in o||r(t,"flags")||!s(o,t)?e:i(a,t)}},370:function(t,e,n){var i=n(202),r=n(11);t.exports=function(t,e,n){return n.get&&i(n.get,e,{getter:!0}),n.set&&i(n.set,e,{setter:!0}),r.f(t,e,n)}},371:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},372:function(t,e,n){},373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e){t.exports=function(t){return null==t}},379:function(t,e,n){},380:function(t,e,n){},381:function(t,e,n){},382:function(t,e,n){},383:function(t,e,n){},384:function(t,e,n){},388:function(t,e,n){"use strict";n.r(e);var i=n(363),r={name:"SidebarGroup",components:{DropdownTransition:n(389).a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(388).default},methods:{isActive:i.e}},s=(n(411),n(60)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function o(t,e,n,i,r){const s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),t("RouterLink",s,n)}function l(t,e,n,r,s,a=1){return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u,e.level-1),l(t,e.children,n,r,s,a+1)])}))}var u={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:r,$themeConfig:s,$themeLocaleConfig:a},props:{item:u,sidebarDepth:c}}){const h=Object(i.e)(r,u.path),p="auto"===u.type?h||u.children.some(t=>Object(i.e)(r,u.basePath+"#"+t.slug)):h,d="external"===u.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,u.path,u.title||u.path):o(t,u.path,u.title||u.path,p),f=[e.frontmatter.sidebarDepth,c,a.sidebarDepth,s.sidebarDepth,1].find(t=>void 0!==t),g=a.displayAllHeaders||s.displayAllHeaders;if("auto"===u.type)return[d,l(t,u.children,u.basePath,r,f)];if((p||g)&&u.headers&&!i.d.test(u.path)){return[d,l(t,Object(i.c)(u.headers),u.path,r,f)]}return d}};n(412);function c(t,e){if("group"===e.type){const n=e.path&&Object(i.e)(t,e.path),r=e.children.some(e=>"group"===e.type?c(t,e):"page"===e.type&&Object(i.e)(t,e.path));return n||r}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(c(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(i.e)(this.$route,t.regularPath)}}},p=Object(s.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},389:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},r=(n(403),n(60)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},390:function(t,e,n){"use strict";var i=n(6),r=n(198),s=n(9),a=n(40),o=n(85),l=n(15),u=n(29),c=n(61),h=n(199),p=n(200);r("match",(function(t,e,n){return[function(e){var n=u(this),r=a(e)?void 0:c(e,t);return r?i(r,e,n):new RegExp(e)[t](l(n))},function(t){var i=s(this),r=l(t),a=n(e,i,r);if(a.done)return a.value;if(!i.global)return p(i,r);var u=i.unicode;i.lastIndex=0;for(var c,d=[],f=0;null!==(c=p(i,r));){var g=l(c[0]);d[f]=g,""===g&&(i.lastIndex=h(r,o(i.lastIndex),u)),f++}return 0===f?null:d}]}))},391:function(t,e,n){"use strict";n(367)},392:function(t,e,n){"use strict";var i=n(8),r=n(42),s=TypeError,a=Object.getOwnPropertyDescriptor,o=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=o?function(t,e){if(r(t)&&!a(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},393:function(t,e,n){var i=n(8),r=n(3),s=n(2),a=n(115),o=n(208),l=n(24),u=n(63).f,c=n(31),h=n(196),p=n(15),d=n(369),f=n(195),g=n(207),m=n(16),v=n(1),b=n(10),k=n(30).enforce,_=n(203),x=n(5),y=n(197),C=n(206),$=x("match"),L=r.RegExp,w=L.prototype,O=r.SyntaxError,S=s(w.exec),E=s("".charAt),I=s("".replace),j=s("".indexOf),R=s("".slice),T=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,P=/a/g,N=/a/g,A=new L(P)!==P,D=f.MISSED_STICKY,U=f.UNSUPPORTED_Y,H=i&&(!A||D||y||C||v((function(){return N[$]=!1,L(P)!=P||L(N)==N||"/a/i"!=L(P,"i")})));if(a("RegExp",H)){for(var W=function(t,e){var n,i,r,s,a,u,f=c(w,this),g=h(t),m=void 0===e,v=[],_=t;if(!f&&g&&m&&t.constructor===W)return t;if((g||c(w,t))&&(t=t.source,m&&(e=d(_))),t=void 0===t?"":p(t),e=void 0===e?"":p(e),_=t,y&&"dotAll"in P&&(i=!!e&&j(e,"s")>-1)&&(e=I(e,/s/g,"")),n=e,D&&"sticky"in P&&(r=!!e&&j(e,"y")>-1)&&U&&(e=I(e,/y/g,"")),C&&(t=(s=function(t){for(var e,n=t.length,i=0,r="",s=[],a={},o=!1,l=!1,u=0,c="";i<=n;i++){if("\\"===(e=E(t,i)))e+=E(t,++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:S(T,R(t,i+1))&&(i+=2,l=!0),r+=e,u++;continue;case">"===e&&l:if(""===c||b(a,c))throw new O("Invalid capture group name");a[c]=!0,s[s.length]=[c,u],l=!1,c="";continue}l?c+=e:r+=e}return[r,s]}(t))[0],v=s[1]),a=o(L(t,e),f?this:w,W),(i||r||v.length)&&(u=k(a),i&&(u.dotAll=!0,u.raw=W(function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)"\\"!==(e=E(t,i))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+E(t,++i);return r}(t),n)),r&&(u.sticky=!0),v.length&&(u.groups=v)),t!==_)try{l(a,"source",""===_?"(?:)":_)}catch(t){}return a},G=u(L),B=0;G.length>B;)g(W,L,G[B++]);w.constructor=W,W.prototype=w,m(r,"RegExp",W,{constructor:!0})}_("RegExp")},394:function(t,e,n){var i=n(8),r=n(197),s=n(22),a=n(370),o=n(30).get,l=RegExp.prototype,u=TypeError;i&&r&&a(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!o(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},395:function(t,e,n){var i=n(8),r=n(195).MISSED_STICKY,s=n(22),a=n(370),o=n(30).get,l=RegExp.prototype,u=TypeError;i&&r&&a(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!o(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},396:function(t,e,n){"use strict";var i=n(86).PROPER,r=n(16),s=n(9),a=n(15),o=n(1),l=n(369),u=RegExp.prototype.toString,c=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),h=i&&"toString"!=u.name;(c||h)&&r(RegExp.prototype,"toString",(function(){var t=s(this);return"/"+a(t.source)+"/"+a(l(t))}),{unsafe:!0})},397:function(t,e,n){"use strict";var i=n(0),r=n(398).trim;i({target:"String",proto:!0,forced:n(399)("trim")},{trim:function(){return r(this)}})},398:function(t,e,n){var i=n(2),r=n(29),s=n(15),a=n(371),o=i("".replace),l="["+a+"]",u=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),h=function(t){return function(e){var n=s(r(e));return 1&t&&(n=o(n,u,"")),2&t&&(n=o(n,c,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},399:function(t,e,n){var i=n(86).PROPER,r=n(1),s=n(371);t.exports=function(t){return r((function(){return!!s[t]()||"​᠎"!=="​᠎"[t]()||i&&s[t].name!==t}))}},400:function(t,e,n){"use strict";var i,r=n(0),s=n(2),a=n(33).f,o=n(85),l=n(15),u=n(117),c=n(29),h=n(118),p=n(14),d=s("".endsWith),f=s("".slice),g=Math.min,m=h("endsWith");r({target:"String",proto:!0,forced:!!(p||m||(i=a(String.prototype,"endsWith"),!i||i.writable))&&!m},{endsWith:function(t){var e=l(c(this));u(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:g(o(n),i),s=l(t);return d?d(e,s,r):f(e,r-s.length,r)===s}})},401:function(t,e,n){"use strict";n(372)},402:function(t,e,n){"use strict";n(373)},403:function(t,e,n){"use strict";n(374)},404:function(t,e,n){"use strict";n(375)},405:function(t,e,n){"use strict";n(376)},406:function(t,e,n){"use strict";n(377)},407:function(t,e,n){"use strict";n(379)},408:function(t,e,n){var i=n(43),r=n(19),s=n(34);t.exports=function(t){return"string"==typeof t||!r(t)&&s(t)&&"[object String]"==i(t)}},409:function(t,e,n){"use strict";n(380)},410:function(t,e,n){"use strict";n(381)},411:function(t,e,n){"use strict";n(382)},412:function(t,e,n){"use strict";n(383)},413:function(t,e,n){"use strict";n(384)},426:function(t,e,n){"use strict";n.r(e);var i=n(363),r={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},s=n(60),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(391),Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):n("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports),u=(n(368),n(201),n(32),n(88),n(393),n(394),n(395),n(396),n(62),n(13),n(87),n(365),n(397),n(113),n(400),n(122),n(366),n(210)),c=n.n(u),h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=c()(e,"title","");return c()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),p(t,i)},p=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},d={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[];for(let s=0;s<e.length&&!(r.length>=n);s++){const a=e[s];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(h(t,a))r.push(a);else if(a.headers)for(let e=0;e<a.headers.length&&!(r.length>=n);e++){const n=a.headers[e];n.title&&h(t,a,n.title)&&r.push(Object.assign({},a,{path:a.path+"#"+n.slug,header:n}))}}return r},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},f=(n(401),Object(s.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),g=(n(402),Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),m=n(389),v=n(211),b=n.n(v),k={name:"DropdownLink",components:{NavLink:a,DropdownTransition:m.a},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>b()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},_=(n(404),{name:"NavLinks",components:{NavLink:a,DropdownLink:Object(s.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(r=>{const s=t[r],a=i[r]&&i[r].label||s.lang;let o;return s.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,r),n.some(t=>t.path===o)||(o=r)),{text:a,link:o}})};return[...this.userNav,r]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}),x=(n(405),Object(s.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function y(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var C={name:"Navbar",components:{SidebarButton:g,NavLinks:x,SearchBox:f,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(y(this.$el,"paddingLeft"))+parseInt(y(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},$=(n(406),Object(s.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),L=n(378),w=n.n(L),O={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=w()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:i="master",docsRepo:r=e}=this.$site.themeConfig;return t&&r&&this.$page.relativePath?this.createEditLink(e,r,n,i,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,r,s){if(/bitbucket.org/.test(e)){return e.replace(i.a,"")+"/src"+`/${r}/`+(n?n.replace(i.a,"")+"/":"")+s+`?mode=edit&spa=0&at=${r}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(i.a,"")+"/-/edit"+`/${r}/`+(n?n.replace(i.a,"")+"/":"")+s}return(i.i.test(e)?e:"https://github.com/"+e).replace(i.a,"")+"/edit"+`/${r}/`+(n?n.replace(i.a,"")+"/":"")+s}}},S=(n(407),Object(s.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),E=n(408),I=n.n(E),j={name:"PageNav",props:["sidebarItems"],computed:{prev(){return T(R.PREV,this)},next(){return T(R.NEXT,this)}}};const R={NEXT:{resolveLink:function(t,e){return P(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return P(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function T(t,{$themeConfig:e,$page:n,$route:r,$site:s,sidebarItems:a}){const{resolveLink:o,getThemeLinkConfig:l,getPageLinkConfig:u}=t,c=l(e),h=u(n),p=w()(h)?c:h;return!1===p?void 0:I()(p)?Object(i.k)(s.pages,p,r.path):o(n,a)}function P(t,e,n){const i=[];!function t(e,n){for(let i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(let e=0;e<i.length;e++){const r=i[e];if("page"===r.type&&r.path===decodeURIComponent(t.path))return i[e+n]}}var N=j,A=(n(409),{components:{PageEdit:S,PageNav:Object(s.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),D=(n(410),Object(s.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),U={name:"Sidebar",components:{SidebarLinks:n(388).default,NavLinks:x},props:["items"]},H=(n(413),{name:"Layout",components:{Home:l,Page:D,Sidebar:Object(s.a)(U,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:$},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),W=Object(s.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=W.exports}}]);