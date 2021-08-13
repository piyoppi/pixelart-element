/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},n="{{lit-".concat(String(Math.random()).slice(2),"}}"),r="\x3c!--".concat(n,"--\x3e"),i=new RegExp("".concat(n,"|").concat(r)),o="$lit$",a=function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parts=[],this.element=r;for(var a=[],u=[],f=document.createTreeWalker(r.content,133,null,!1),p=0,h=-1,d=0,y=t.strings,v=t.values.length;d<v;){var m=f.nextNode();if(null!==m){if(h++,1===m.nodeType){if(m.hasAttributes()){for(var _=m.attributes,b=_.length,g=0,S=0;S<b;S++)s(_[S].name,o)&&g++;for(;g-- >0;){var w=y[d],k=c.exec(w)[2],P=k.toLowerCase()+o,x=m.getAttribute(P);m.removeAttribute(P);var O=x.split(i);this.parts.push({type:"attribute",index:h,name:k,strings:O}),d+=O.length-1}}"TEMPLATE"===m.tagName&&(u.push(m),f.currentNode=m.content)}else if(3===m.nodeType){var C=m.data;if(C.indexOf(n)>=0){for(var A=m.parentNode,N=C.split(i),T=N.length-1,E=0;E<T;E++){var j=void 0,R=N[E];if(""===R)j=l();else{var V=c.exec(R);null!==V&&s(V[2],o)&&(R=R.slice(0,V.index)+V[1]+V[2].slice(0,-o.length)+V[3]),j=document.createTextNode(R)}A.insertBefore(j,m),this.parts.push({type:"node",index:++h})}""===N[T]?(A.insertBefore(l(),m),a.push(m)):m.data=N[T],d+=T}}else if(8===m.nodeType)if(m.data===n){var U=m.parentNode;null!==m.previousSibling&&h!==p||(h++,U.insertBefore(l(),m)),p=h,this.parts.push({type:"node",index:h}),null===m.nextSibling?m.data="":(a.push(m),h--),d++}else for(var M=-1;-1!==(M=m.data.indexOf(n,M+1));)this.parts.push({type:"node",index:-1}),d++}else f.currentNode=u.pop()}for(var I=0,q=a;I<q.length;I++){var B=q[I];B.parentNode.removeChild(B)}},s=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},u=function(e){return-1!==e.index},l=function(){return document.createComment("")},c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,f=133;function p(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,f,null,!1),o=d(r),a=r[o],s=-1,u=0,l=[],c=null;i.nextNode();){s++;var p=i.currentNode;for(p.previousSibling===c&&(c=null),t.has(p)&&(l.push(p),null===c&&(c=p)),null!==c&&u++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-u,a=r[o=d(r,o)]}l.forEach((function(e){return e.parentNode.removeChild(e)}))}var h=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,f,null,!1);n.nextNode();)t++;return t},d=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=t+1;n<e.length;n++){var r=e[n];if(u(r))return n}return-1},y=new WeakMap,v=function(e){return"function"==typeof e&&y.has(e)},m={},_={};function b(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function g(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.__parts=[],this.template=e,this.processor=n,this.options=r}var n,r;return n=t,(r=[{key:"update",value:function(e){var t,n=0,r=b(this.__parts);try{for(r.s();!(t=r.n()).done;){var i=t.value;void 0!==i&&i.setValue(e[n]),n++}}catch(e){r.e(e)}finally{r.f()}var o,a=b(this.__parts);try{for(a.s();!(o=a.n()).done;){var s=o.value;void 0!==s&&s.commit()}}catch(e){a.e(e)}finally{a.f()}}},{key:"_clone",value:function(){for(var t,n=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],i=this.template.parts,o=document.createTreeWalker(n,133,null,!1),a=0,s=0,l=o.nextNode();a<i.length;)if(t=i[a],u(t)){for(;s<t.index;)s++,"TEMPLATE"===l.nodeName&&(r.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=r.pop(),l=o.nextNode());if("node"===t.type){var c=this.processor.handleTextExpression(this.options);c.insertAfterNode(l.previousSibling),this.__parts.push(c)}else{var f;(f=this.__parts).push.apply(f,function(e){if(Array.isArray(e))return S(e)}(p=this.processor.handleAttributeExpressions(l,t.name,t.strings,this.options))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(p)||g(p)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}a++}else this.__parts.push(void 0),a++;var p;return e&&(document.adoptNode(n),customElements.upgrade(n)),n}}])&&w(n.prototype,r),t}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(e){return e}}),O=" ".concat(n," "),C=function(){function e(t,n,r,i){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.strings=t,this.values=n,this.type=r,this.processor=i}return t=e,(i=[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",i=!1,a=0;a<e;a++){var s=this.strings[a],u=s.lastIndexOf("\x3c!--");i=(u>-1||i)&&-1===s.indexOf("--\x3e",u+1);var l=c.exec(s);t+=null===l?s+(i?O:r):s.substr(0,l.index)+l[1]+l[2]+o+l[3]+n}return t+this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template"),t=this.getHTML();return void 0!==x&&(t=x.createHTML(t)),e.innerHTML=t,e}}])&&P(t.prototype,i),a&&P(t,a),e;var t,i,a}();function A(e,t,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var i=R(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return t&&I(e.prototype,t),n&&I(e,n),e}function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var F=function(e){return null===e||!("object"===B(e)||"function"==typeof e)},L=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},H=function(){function e(t,n,r){M(this,e),this.dirty=!0,this.element=t,this.name=n,this.strings=r,this.parts=[];for(var i=0;i<r.length-1;i++)this.parts[i]=this._createPart()}return q(e,[{key:"_createPart",value:function(){return new z(this)}},{key:"_getValue",value:function(){var e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){var r=n[0].value;if("symbol"===B(r))return String(r);if("string"==typeof r||!L(r))return r}for(var i="",o=0;o<t;o++){i+=e[o];var a=n[o];if(void 0!==a){var s=a.value;if(F(s)||!L(s))i+="string"==typeof s?s:String(s);else{var u,l=V(s);try{for(l.s();!(u=l.n()).done;){var c=u.value;i+="string"==typeof c?c:String(c)}}catch(e){l.e(e)}finally{l.f()}}}}return i+e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),z=function(){function e(t){M(this,e),this.value=void 0,this.committer=t}return q(e,[{key:"setValue",value:function(e){e===m||F(e)&&e===this.value||(this.value=e,v(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;v(this.value);){var e=this.value;this.value=m,e(this)}this.value!==m&&this.committer.commit()}}]),e}(),W=function(){function e(t){M(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return q(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;v(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=m,e(this)}var t=this.__pendingValue;t!==m&&(F(t)?t!==this.value&&this.__commitText(t):t instanceof C?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):L(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof k&&this.value.template===t)this.value.update(e.values);else{var n=new k(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,a=V(t);try{for(a.s();!(r=a.n()).done;){var s=r.value;void 0===(n=i[o])&&(n=new e(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(s),n.commit(),o++}}catch(e){a.e(e)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;t(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),D=function(){function e(t,n,r){if(M(this,e),this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=n,this.strings=r}return q(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;v(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue!==m){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}}]),e}(),J=function(e){N(n,e);var t=E(n);function n(e,r,i){var o;return M(this,n),(o=t.call(this,e,r,i)).single=2===i.length&&""===i[0]&&""===i[1],o}return q(n,[{key:"_createPart",value:function(){return new $(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:A(R(n.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),n}(H),$=function(e){N(n,e);var t=E(n);function n(){return M(this,n),t.apply(this,arguments)}return n}(z),G=!1;!function(){try{var e={get capture(){return G=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}}();var K=function(){function e(t,n,r){var i=this;M(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=n,this.eventContext=r,this.__boundHandleEvent=function(e){return i.handleEvent(e)}}return q(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;v(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue!==m){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),i=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Q(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),Q=function(e){return e&&(G?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)};function X(e){var t=Y.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Y.set(e.type,t));var r=t.stringsArray.get(e.strings);if(void 0!==r)return r;var i=e.strings.join(n);return void 0===(r=t.keyString.get(i))&&(r=new a(e,e.getTemplateElement()),t.keyString.set(i,r)),t.stringsArray.set(e.strings,r),r}var Y=new Map,Z=new WeakMap;function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new J(e,t.slice(1),n).parts:"@"===i?[new K(e,t.slice(1),r.eventContext)]:"?"===i?[new D(e,t.slice(1),n)]:new H(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new W(e)}}])&&ee(t.prototype,n),e}()),"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var ne=function(e,t){return"".concat(e,"--").concat(t)},re=!0;void 0===window.ShadyCSS?re=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),re=!1);var ie=function(e){return function(t){var r=ne(t.type,e),i=Y.get(r);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Y.set(r,i));var o=i.stringsArray.get(t.strings);if(void 0!==o)return o;var s=t.strings.join(n);if(void 0===(o=i.keyString.get(s))){var u=t.getTemplateElement();re&&window.ShadyCSS.prepareTemplateDom(u,e),o=new a(t,u),i.keyString.set(s,o)}return i.stringsArray.set(t.strings,o),o}},oe=["html","svg"],ae=new Set;function se(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ue(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){if(e){if("string"==typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t){return!t||"object"!==ce(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function de(e){var t="function"==typeof Map?new Map:void 0;return(de=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return ye(e,arguments,_e(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),me(r,e)})(e)}function ye(e,t,n){return(ye=ve()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&me(i,n.prototype),i}).apply(null,arguments)}function ve(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e){return(_e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}window.JSCompiler_renameProperty=function(e,t){return e};var be={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ge=function(e,t){return t!==e&&(t==t||e==e)},Se={attribute:!0,type:String,converter:be,reflect:!1,hasChanged:ge},we=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(l,e);var t,n,r,i,o,a,s,u=(t=l,n=ve(),function(){var e,r=_e(t);if(n){var i=_e(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return he(this,e)});function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=u.call(this)).initialize(),e}return r=l,o=[{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach((function(n,r){var i=e._attributeNameForProperty(r,n);void 0!==i&&(e._attributeToPropertyMap.set(i,r),t.push(i))})),t}},{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((function(t,n){return e._classProperties.set(n,t)}))}}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Se;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var n="symbol"===ce(e)?Symbol():"__".concat(e),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}},{key:"getPropertyDescriptor",value:function(e,t,n){return{get:function(){return this[t]},set:function(r){var i=this[e];this[t]=r,this.requestUpdateInternal(e,i,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){return this._classProperties&&this._classProperties.get(e)||Se}},{key:"finalize",value:function(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t,n=this.properties,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ue(e))){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}([].concat(se(Object.getOwnPropertyNames(n)),se("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[])));try{for(r.s();!(t=r.n()).done;){var i=t.value;this.createProperty(i,n[i])}}catch(e){r.e(e)}finally{r.f()}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ge;return n(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||be,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||be.toAttribute)(e,n)}}}],(i=[{key:"initialize",value:function(){var e=this;this._updateState=0,this._updatePromise=new Promise((function(t){return e._enableUpdatingResolver=t})),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach((function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}}))}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach((function(t,n){return e[n]=t})),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this.enableUpdating()}},{key:"enableUpdating",value:function(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Se,r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){var o=r._propertyValueToAttribute(t,n);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var i=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"requestUpdateInternal",value:function(e,t,n){var r=!0;if(void 0!==e){var i=this.constructor;n=n||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}},{key:"requestUpdate",value:function(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:(a=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,e.prev=1,e.next=4,this._updatePromise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:if(null==(t=this.performUpdate())){e.next=12;break}return e.next=12,t;case 12:return e.abrupt("return",!this._hasRequestedUpdate);case 13:case"end":return e.stop()}}),e,this,[[1,6]])})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=a.apply(e,t);function o(e){fe(i,n,r,o,s,"next",e)}function s(e){fe(i,n,r,o,s,"throw",e)}o(void 0)}))},function(){return s.apply(this,arguments)})},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"performUpdate",value:function(){if(this._hasRequestedUpdate){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}},{key:"_getUpdateComplete",value:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((function(e,n){return t._propertyToAttribute(n,t[n],e)})),this._reflectingProperties=void 0),this._markUpdated()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}])&&pe(r.prototype,i),o&&pe(r,o),l}(de(HTMLElement));we.finalized=!0;var ke=Element.prototype;function Pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}ke.msMatchesSelector||ke.webkitMatchesSelector;var xe=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oe=Symbol(),Ce=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n!==Oe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}var t,n;return t=e,(n=[{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(xe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}},{key:"toString",value:function(){return this.cssText}}])&&Pe(t.prototype,n),e}();function Ae(e){return(Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t,n){return(Ee="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ve(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function je(e,t){return(je=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Re(e,t){return!t||"object"!==Ae(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ve(e){return(Ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");var Ue={},Me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&je(e,t)}(s,e);var t,n,r,i,o,a=(i=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Ve(i);if(o){var n=Ve(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Re(this,e)});function s(){return Ne(this,s),a.apply(this,arguments)}return t=s,r=[{key:"getStyles",value:function(){return this.styles}},{key:"_getUniqueStyles",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var e=this.getStyles();if(Array.isArray(e)){var t=function e(t,n){return t.reduceRight((function(t,n){return Array.isArray(n)?e(n,t):(t.add(n),t)}),n)}(e,new Set),n=[];t.forEach((function(e){return n.unshift(e)})),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((function(e){if(e instanceof CSSStyleSheet&&!xe){var t=Array.prototype.slice.call(e.cssRules).reduce((function(e,t){return e+t.cssText}),"");return new Ce(String(t),Oe)}return e}))}}}],(n=[{key:"initialize",value:function(){Ee(Ve(s.prototype),"initialize",this).call(this),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow(this.constructor.shadowRootOptions)}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?xe?this.renderRoot.adoptedStyleSheets=e.map((function(e){return e instanceof CSSStyleSheet?e:e.styleSheet})):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((function(e){return e.cssText})),this.localName))}},{key:"connectedCallback",value:function(){Ee(Ve(s.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var t=this,n=this.render();Ee(Ve(s.prototype),"update",this).call(this,e),n!==Ue&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((function(e){var n=document.createElement("style");n.textContent=e.cssText,t.renderRoot.appendChild(n)})))}},{key:"render",value:function(){return Ue}}])&&Te(t.prototype,n),r&&Te(t,r),s}(we);Me.finalized=!0,Me.render=function(e,n,r){if(!r||"object"!==te(r)||!r.scopeName)throw new Error("The `scopeName` option is required.");var i=r.scopeName,o=Z.has(n),a=re&&11===n.nodeType&&!!n.host,s=a&&!ae.has(i),u=s?document.createDocumentFragment():n;if(function(e,n,r){var i=Z.get(n);void 0===i&&(t(n,n.firstChild),Z.set(n,i=new W(Object.assign({templateFactory:X},r))),i.appendInto(n)),i.setValue(e),i.commit()}(e,u,Object.assign({templateFactory:ie(i)},r)),s){var l=Z.get(u);Z.delete(u),function(e,t,n){ae.add(e);var r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),o=i.length;if(0!==o){for(var a=document.createElement("style"),s=0;s<o;s++){var u=i[s];u.parentNode.removeChild(u),a.textContent+=u.textContent}!function(e){oe.forEach((function(t){var n=Y.get(ne(t,e));void 0!==n&&n.keyString.forEach((function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach((function(e){n.add(e)})),p(e,n)}))}))}(e);var l=r.content;n?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,f,null,!1),a=d(i),s=0,u=-1;o.nextNode();)for(u++,o.currentNode===n&&(s=h(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=d(i,a);return}a=d(i,a)}else r.appendChild(t)}(n,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);var c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){l.insertBefore(a,l.firstChild);var y=new Set;y.add(a),p(n,y)}}else window.ShadyCSS.prepareTemplateStyles(r,e)}(i,u,l.value instanceof k?l.value.template:void 0),t(n,n.firstChild),n.appendChild(u),Z.set(n,l)}!o&&a&&window.ShadyCSS.styleElement(n.host)},Me.shadowRootOptions={mode:"open"}})();