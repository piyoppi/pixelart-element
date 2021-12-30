/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}};function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var o="{{lit-".concat(String(Math.random()).slice(2),"}}"),i="\x3c!--".concat(o,"--\x3e"),a=new RegExp("".concat(o,"|").concat(i)),s="$lit$",u=r((function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parts=[],this.element=n;for(var r=[],i=[],u=document.createTreeWalker(n.content,133,null,!1),c=0,h=-1,d=0,y=t.strings,v=t.values.length;d<v;){var m=u.nextNode();if(null!==m){if(h++,1===m.nodeType){if(m.hasAttributes()){for(var b=m.attributes,_=b.length,g=0,S=0;S<_;S++)l(b[S].name,s)&&g++;for(;g-- >0;){var w=y[d],k=p.exec(w)[2],P=k.toLowerCase()+s,x=m.getAttribute(P);m.removeAttribute(P);var O=x.split(a);this.parts.push({type:"attribute",index:h,name:k,strings:O}),d+=O.length-1}}"TEMPLATE"===m.tagName&&(i.push(m),u.currentNode=m.content)}else if(3===m.nodeType){var C=m.data;if(C.indexOf(o)>=0){for(var A=m.parentNode,T=C.split(a),N=T.length-1,E=0;E<N;E++){var j=void 0,R=T[E];if(""===R)j=f();else{var V=p.exec(R);null!==V&&l(V[2],s)&&(R=R.slice(0,V.index)+V[1]+V[2].slice(0,-s.length)+V[3]),j=document.createTextNode(R)}A.insertBefore(j,m),this.parts.push({type:"node",index:++h})}""===T[N]?(A.insertBefore(f(),m),r.push(m)):m.data=T[N],d+=N}}else if(8===m.nodeType)if(m.data===o){var U=m.parentNode;null!==m.previousSibling&&h!==c||(h++,U.insertBefore(f(),m)),c=h,this.parts.push({type:"node",index:h}),null===m.nextSibling?m.data="":(r.push(m),h--),d++}else for(var M=-1;-1!==(M=m.data.indexOf(o,M+1));)this.parts.push({type:"node",index:-1}),d++}else u.currentNode=i.pop()}for(var I=0,q=r;I<q.length;I++){var B=q[I];B.parentNode.removeChild(B)}})),l=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},c=function(e){return-1!==e.index},f=function(){return document.createComment("")},p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,h=133;function d(e,t){for(var n=e.element.content,r=e.parts,o=document.createTreeWalker(n,h,null,!1),i=v(r),a=r[i],s=-1,u=0,l=[],c=null;o.nextNode();){s++;var f=o.currentNode;for(f.previousSibling===c&&(c=null),t.has(f)&&(l.push(f),null===c&&(c=f)),null!==c&&u++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-u,a=r[i=v(r,i)]}l.forEach((function(e){return e.parentNode.removeChild(e)}))}var y=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,h,null,!1);n.nextNode();)t++;return t},v=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=t+1;n<e.length;n++){var r=e[n];if(c(r))return n}return-1},m=new WeakMap,b=function(e){return"function"==typeof e&&m.has(e)},_={},g={};function S(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=w(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function w(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.__parts=[],this.template=e,this.processor=n,this.options=r}var n,r;return n=t,r=[{key:"update",value:function(e){var t,n=0,r=S(this.__parts);try{for(r.s();!(t=r.n()).done;){var o=t.value;void 0!==o&&o.setValue(e[n]),n++}}catch(e){r.e(e)}finally{r.f()}var i,a=S(this.__parts);try{for(a.s();!(i=a.n()).done;){var s=i.value;void 0!==s&&s.commit()}}catch(e){a.e(e)}finally{a.f()}}},{key:"_clone",value:function(){for(var t,n=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],o=this.template.parts,i=document.createTreeWalker(n,133,null,!1),a=0,s=0,u=i.nextNode();a<o.length;)if(t=o[a],c(t)){for(;s<t.index;)s++,"TEMPLATE"===u.nodeName&&(r.push(u),i.currentNode=u.content),null===(u=i.nextNode())&&(i.currentNode=r.pop(),u=i.nextNode());if("node"===t.type){var l=this.processor.handleTextExpression(this.options);l.insertAfterNode(u.previousSibling),this.__parts.push(l)}else{var f;(f=this.__parts).push.apply(f,function(e){if(Array.isArray(e))return k(e)}(p=this.processor.handleAttributeExpressions(u,t.name,t.strings,this.options))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(p)||w(p)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}a++}else this.__parts.push(void 0),a++;var p;return e&&(document.adoptNode(n),customElements.upgrade(n)),n}}],r&&P(n.prototype,r),t}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(e){return e}}),A=" ".concat(o," "),T=function(){function e(t,n,r,o){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.strings=t,this.values=n,this.type=r,this.processor=o}return t=e,(n=[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var a=this.strings[r],u=a.lastIndexOf("\x3c!--");n=(u>-1||n)&&-1===a.indexOf("--\x3e",u+1);var l=p.exec(a);t+=null===l?a+(n?A:i):a.substr(0,l.index)+l[1]+l[2]+s+l[3]+o}return t+this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template"),t=this.getHTML();return void 0!==C&&(t=C.createHTML(t)),e.innerHTML=t,e}}])&&O(t.prototype,n),r&&O(t,r),e;var t,n,r}();function N(e,t,n){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},N(e,t,n||e)}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=U(e);if(t){var o=U(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return V(this,n)}}function V(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function M(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return t&&B(e.prototype,t),n&&B(e,n),e}function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}var H=function(e){return null===e||!("object"===L(e)||"function"==typeof e)},z=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},D=function(){function e(t,n,r){q(this,e),this.dirty=!0,this.element=t,this.name=n,this.strings=r,this.parts=[];for(var o=0;o<r.length-1;o++)this.parts[o]=this._createPart()}return F(e,[{key:"_createPart",value:function(){return new W(this)}},{key:"_getValue",value:function(){var e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){var r=n[0].value;if("symbol"===L(r))return String(r);if("string"==typeof r||!z(r))return r}for(var o="",i=0;i<t;i++){o+=e[i];var a=n[i];if(void 0!==a){var s=a.value;if(H(s)||!z(s))o+="string"==typeof s?s:String(s);else{var u,l=M(s);try{for(l.s();!(u=l.n()).done;){var c=u.value;o+="string"==typeof c?c:String(c)}}catch(e){l.e(e)}finally{l.f()}}}}return o+e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),W=function(){function e(t){q(this,e),this.value=void 0,this.committer=t}return F(e,[{key:"setValue",value:function(e){e===_||H(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;b(this.value);){var e=this.value;this.value=_,e(this)}this.value!==_&&this.committer.commit()}}]),e}(),J=function(){function e(t){q(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return F(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=f()),e.__insert(this.endNode=f())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;b(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=_,e(this)}var t=this.__pendingValue;t!==_&&(H(t)?t!==this.value&&this.__commitText(t):t instanceof T?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):z(t)?this.__commitIterable(t):t===g?(this.value=g,this.clear()):this.__commitText(t))}}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof x&&this.value.template===t)this.value.update(e.values);else{var n=new x(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,o=this.value,i=0,a=M(t);try{for(a.s();!(r=a.n()).done;){var s=r.value;void 0===(n=o[i])&&(n=new e(this.options),o.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(o[i-1])),n.setValue(s),n.commit(),i++}}catch(e){a.e(e)}finally{a.f()}i<o.length&&(o.length=i,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;t(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),$=function(){function e(t,n,r){if(q(this,e),this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=n,this.strings=r}return F(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;b(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue!==_){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=_}}}]),e}(),G=function(e){E(n,e);var t=R(n);function n(e,r,o){var i;return q(this,n),(i=t.call(this,e,r,o)).single=2===o.length&&""===o[0]&&""===o[1],i}return F(n,[{key:"_createPart",value:function(){return new K(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:N(U(n.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),n}(D),K=function(e){E(n,e);var t=R(n);function n(){return q(this,n),t.apply(this,arguments)}return F(n)}(W),Q=!1;!function(){try{var e={get capture(){return Q=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}}();var X=function(){function e(t,n,r){var o=this;q(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=n,this.eventContext=r,this.__boundHandleEvent=function(e){return o.handleEvent(e)}}return F(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;b(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue!==_){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),o=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=Y(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=_}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),Y=function(e){return e&&(Q?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)};function Z(e){var t=ee.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ee.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(o);return void 0===(n=t.keyString.get(r))&&(n=new u(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var ee=new Map,te=new WeakMap;function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function re(e){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"handleAttributeExpressions",value:function(e,t,n,r){var o=t[0];return"."===o?new G(e,t.slice(1),n).parts:"@"===o?[new X(e,t.slice(1),r.eventContext)]:"?"===o?[new $(e,t.slice(1),n)]:new D(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new J(e)}}])&&ne(t.prototype,n),e}()),"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var oe=function(e,t){return"".concat(e,"--").concat(t)},ie=!0;void 0===window.ShadyCSS?ie=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ie=!1);var ae=function(e){return function(t){var n=oe(t.type,e),r=ee.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},ee.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var a=t.strings.join(o);if(void 0===(i=r.keyString.get(a))){var s=t.getTemplateElement();ie&&window.ShadyCSS.prepareTemplateDom(s,e),i=new u(t,s),r.keyString.set(a,i)}return r.stringsArray.set(t.strings,i),i}},se=["html","svg"],ue=new Set;function le(e){return function(e){if(Array.isArray(e))return fe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ce(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){if(e){if("string"==typeof e)return fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(e,t):void 0}}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pe(e){return pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(e)}function he(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ye(e,t){if(t&&("object"===pe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ve(e){var t="function"==typeof Map?new Map:void 0;return ve=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return me(e,arguments,ge(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_e(r,e)},ve(e)}function me(e,t,n){return me=be()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&_e(o,n.prototype),o},me.apply(null,arguments)}function be(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _e(e,t){return _e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_e(e,t)}function ge(e){return ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ge(e)}window.JSCompiler_renameProperty=function(e,t){return e};var Se={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},we=function(e,t){return t!==e&&(t==t||e==e)},ke={attribute:!0,type:String,converter:Se,reflect:!1,hasChanged:we},Pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_e(e,t)}(l,e);var t,n,r,o,i,a,s,u=(t=l,n=be(),function(){var e,r=ge(t);if(n){var o=ge(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return ye(this,e)});function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=u.call(this)).initialize(),e}return r=l,o=[{key:"initialize",value:function(){var e=this;this._updateState=0,this._updatePromise=new Promise((function(t){return e._enableUpdatingResolver=t})),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach((function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}}))}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach((function(t,n){return e[n]=t})),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this.enableUpdating()}},{key:"enableUpdating",value:function(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ke,r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){var i=r._propertyValueToAttribute(t,n);if(void 0===i)return;this._updateState=8|this._updateState,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var o=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,o),this._updateState=-17&this._updateState}}}},{key:"requestUpdateInternal",value:function(e,t,n){var r=!0;if(void 0!==e){var o=this.constructor;n=n||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}},{key:"requestUpdate",value:function(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:(a=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,e.prev=1,e.next=4,this._updatePromise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:if(null==(t=this.performUpdate())){e.next=12;break}return e.next=12,t;case 12:return e.abrupt("return",!this._hasRequestedUpdate);case 13:case"end":return e.stop()}}),e,this,[[1,6]])})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function i(e){he(o,n,r,i,s,"next",e)}function s(e){he(o,n,r,i,s,"throw",e)}i(void 0)}))},function(){return s.apply(this,arguments)})},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"performUpdate",value:function(){if(this._hasRequestedUpdate){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}},{key:"_getUpdateComplete",value:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((function(e,n){return t._propertyToAttribute(n,t[n],e)})),this._reflectingProperties=void 0),this._markUpdated()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],i=[{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach((function(n,r){var o=e._attributeNameForProperty(r,n);void 0!==o&&(e._attributeToPropertyMap.set(o,r),t.push(o))})),t}},{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((function(t,n){return e._classProperties.set(n,t)}))}}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ke;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var n="symbol"===pe(e)?Symbol():"__".concat(e),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}},{key:"getPropertyDescriptor",value:function(e,t,n){return{get:function(){return this[t]},set:function(r){var o=this[e];this[t]=r,this.requestUpdateInternal(e,o,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){return this._classProperties&&this._classProperties.get(e)||ke}},{key:"finalize",value:function(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t,n=this.properties,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ce(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}([].concat(le(Object.getOwnPropertyNames(n)),le("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[])));try{for(r.s();!(t=r.n()).done;){var o=t.value;this.createProperty(o,n[o])}}catch(e){r.e(e)}finally{r.f()}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:we;return n(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||Se,o="function"==typeof r?r:r.fromAttribute;return o?o(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||Se.toAttribute)(e,n)}}}],o&&de(r.prototype,o),i&&de(r,i),l}(ve(HTMLElement));Pe.finalized=!0;var xe=Element.prototype;function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}xe.msMatchesSelector||xe.webkitMatchesSelector;var Ce=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ae=Symbol(),Te=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n!==Ae)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}var t,n;return t=e,(n=[{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(Ce?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}},{key:"toString",value:function(){return this.cssText}}])&&Oe(t.prototype,n),e}();function Ne(e){return Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(e)}function Ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Re(e,t,n){return Re="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Me(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},Re(e,t,n||e)}function Ve(e,t){return Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ve(e,t)}function Ue(e,t){if(t&&("object"===Ne(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Me(e){return Me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Me(e)}(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");var Ie={},qe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ve(e,t)}(s,e);var t,n,r,o,i,a=(o=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Me(o);if(i){var n=Me(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Ue(this,e)});function s(){return Ee(this,s),a.apply(this,arguments)}return t=s,r=[{key:"getStyles",value:function(){return this.styles}},{key:"_getUniqueStyles",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var e=this.getStyles();if(Array.isArray(e)){var t=function e(t,n){return t.reduceRight((function(t,n){return Array.isArray(n)?e(n,t):(t.add(n),t)}),n)}(e,new Set),n=[];t.forEach((function(e){return n.unshift(e)})),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((function(e){if(e instanceof CSSStyleSheet&&!Ce){var t=Array.prototype.slice.call(e.cssRules).reduce((function(e,t){return e+t.cssText}),"");return new Te(String(t),Ae)}return e}))}}}],(n=[{key:"initialize",value:function(){Re(Me(s.prototype),"initialize",this).call(this),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow(this.constructor.shadowRootOptions)}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ce?this.renderRoot.adoptedStyleSheets=e.map((function(e){return e instanceof CSSStyleSheet?e:e.styleSheet})):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((function(e){return e.cssText})),this.localName))}},{key:"connectedCallback",value:function(){Re(Me(s.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var t=this,n=this.render();Re(Me(s.prototype),"update",this).call(this,e),n!==Ie&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((function(e){var n=document.createElement("style");n.textContent=e.cssText,t.renderRoot.appendChild(n)})))}},{key:"render",value:function(){return Ie}}])&&je(t.prototype,n),r&&je(t,r),s}(Pe);qe.finalized=!0,qe.render=function(e,n,r){if(!r||"object"!==re(r)||!r.scopeName)throw new Error("The `scopeName` option is required.");var o=r.scopeName,i=te.has(n),a=ie&&11===n.nodeType&&!!n.host,s=a&&!ue.has(o),u=s?document.createDocumentFragment():n;if(function(e,n,r){var o=te.get(n);void 0===o&&(t(n,n.firstChild),te.set(n,o=new J(Object.assign({templateFactory:Z},r))),o.appendInto(n)),o.setValue(e),o.commit()}(e,u,Object.assign({templateFactory:ae(o)},r)),s){var l=te.get(u);te.delete(u),function(e,t,n){ue.add(e);var r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),i=o.length;if(0!==i){for(var a=document.createElement("style"),s=0;s<i;s++){var u=o[s];u.parentNode.removeChild(u),a.textContent+=u.textContent}!function(e){se.forEach((function(t){var n=ee.get(oe(t,e));void 0!==n&&n.keyString.forEach((function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach((function(e){n.add(e)})),d(e,n)}))}))}(e);var l=r.content;n?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,o=e.parts;if(null!=n)for(var i=document.createTreeWalker(r,h,null,!1),a=v(o),s=0,u=-1;i.nextNode();)for(u++,i.currentNode===n&&(s=y(t),n.parentNode.insertBefore(t,n));-1!==a&&o[a].index===u;){if(s>0){for(;-1!==a;)o[a].index+=s,a=v(o,a);return}a=v(o,a)}else r.appendChild(t)}(n,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);var c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){l.insertBefore(a,l.firstChild);var f=new Set;f.add(a),d(n,f)}}else window.ShadyCSS.prepareTemplateStyles(r,e)}(o,u,l.value instanceof x?l.value.template:void 0),t(n,n.firstChild),n.appendChild(u),te.set(n,l)}!i&&a&&window.ShadyCSS.styleElement(n.host)},qe.shadowRootOptions={mode:"open"}})();