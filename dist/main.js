!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){var a=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},r=(a(e.i,i,o),i.locals?i.locals:{});e.exports=r},function(e,t,n){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r={};function c(e,t,n){for(var a=0;a<t.length;a++){var i={css:t[a][1],media:t[a][2],sourceMap:t[a][3]};r[e][a]?r[e][a](i):r[e].push(h(i,n))}}function d(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,a){var i=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=s(t,i);else{var o=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function u(e,t,n){var a=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,m=0;function h(e,t){var n,a,i;if(t.singleton){var o=m++;n=f||(f=d(t)),a=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=d(t),a=u.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i()),e=n.base?e+n.base:e,t=t||[],r[e]||(r[e]=[]),c(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){r[e]||(r[e]=[]),c(e,t,n);for(var a=t.length;a<r[e].length;a++)r[e][a]();r[e].length=t.length,0===r[e].length&&delete r[e]}}}},function(e,t,n){var a=n(3),i=n(4),o=n(5),r=n(6),c=n(7),d=n(8),l=n(9),s=n(10),p=n(11);t=a(!1);var u=i(o),f=i(r),m=i(c),h=i(d),g=i(l),b=i(s),x=i(p);t.push([e.i,'@font-face{font-family:"Roboto";font-weight:200;src:url('+u+')}@font-face{font-family:"Roboto";font-weight:300;src:url('+f+')}@font-face{font-family:"Roboto";font-weight:400;src:url('+m+')}@font-face{font-family:"Roboto";font-weight:600;src:url('+h+')}@font-face{font-family:"Roboto";font-weight:700;src:url('+g+")}*{border:0;padding:0;margin:0;box-sizing:border-box;font-family:Roboto, serif;text-decoration:none}#content{background:url("+b+")}.container{width:90%;max-width:1000px;margin:0 auto}header{height:550px;background:url("+x+") fixed;background-size:cover;color:#fff;width:100%;position:relative}header nav{display:flex;justify-content:flex-end;position:relative;z-index:1}header nav a{color:#fff;display:inline-block;margin:30px 30px;font-size:20px;font-weight:200;border-bottom:solid 1px transparent}header nav a:hover{border-bottom:solid 1px #fff}header .title-container{height:100%;position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-wrap:wrap;align-content:center}header .title-container h1,header .title-container h3{width:100%;text-align:center}header .title-container h1{margin-bottom:15px;font-weight:300;font-size:48px}header .title-container h3{font-weight:200;font-style:italic;font-size:24px}.home{position:relative;height:750px}.home .img-container{width:80%;height:400px;overflow:hidden;box-shadow:0 0 16px rgba(0,0,0,0.4);position:absolute;top:-48px;z-index:0}.home .img-container img{width:100%}.home .about-container{width:50%;background:#fff;padding:40px;box-shadow:0 0 16px rgba(0,0,0,0.4);position:relative;top:160px;float:right}.home .about-container h2{font-size:48px;font-weight:300;margin-bottom:40px}.home .about-container h4{font-weight:300;font-style:italic;margin-bottom:20px;line-height:28px}.home .about-container p{line-height:28px;text-align:justify}.menu{margin-bottom:60px}.menu h2{margin-top:40px;margin-bottom:40px;text-align:center;font-size:48px;font-weight:300}.menu .external-border{border:solid 1px #000;padding:10px}.menu .article-container{display:flex}.menu .article-container article{padding:15px}.menu .article-container article .menu-title{text-align:center;font-size:28px;font-weight:600;margin-bottom:28px}.menu .article-container article div{border-bottom:dotted 2px #000;margin-bottom:32px;padding-bottom:16px;display:flex;flex-wrap:wrap}.menu .article-container article div .name{width:80%;font-weight:600;font-size:20px}.menu .article-container article div .price{width:20%;text-align:right;font-size:20px}.menu .article-container article div .description{margin-top:15px;color:#676767}.gallery{width:100%;display:flex;flex-wrap:wrap}.gallery .img-container{width:25%;height:240px}.gallery .img-container img{width:100%;height:100%;object-fit:cover;opacity:0.7}.gallery .img-container img:hover{opacity:1;transition:opacity 0.3s ease}.location{background:#fff;padding:64px 0;display:flex;flex-wrap:wrap}.location h3{text-align:center;font-weight:300;font-size:40px;margin-bottom:30px;width:100%}.location .container{display:flex}.location .container .address{width:50%}.location .container .address .street{margin-bottom:15px}.location .container .schedule{width:50%;display:flex;flex-wrap:wrap}.location .container .schedule h4{width:100%;text-align:center}.location .container .schedule p{width:50%;text-align:center}.map{width:100%}footer{background:#000;color:#fff}footer p{text-align:center;padding:20px 0}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=(r=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),o=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var r,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a=0;a<e.length;a++){var i=[].concat(e[a]);n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i)}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"321de678e592d0b8f44f1a82d7ca4b62.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"88823c2015ffd5fa89d567e17297a137.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"11eabca2251325cfc5589c9c6fb57b46.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"58aef543c97bbaf6a9896e8484456d98.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"e07df86cef2e721115583d61d1fb68a6.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"18beaf05ef33f7bbb04f114e091d2c79.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"fe7988be77cc336cf7bf0ee8d7bca7fa.jpg"},function(e,t,n){"use strict";n.r(t);const a=document.createElement("a"),i=document.createElement("a"),o=document.createElement("a"),r=()=>{const e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("div"),r=document.createElement("h1"),c=document.createElement("h3");return a.innerText="Home",a.href="#",i.innerText="Menu",i.href="#",o.innerText="Contact Us",o.href="#",n.classList.add("title-container"),n.classList.add("container"),r.innerText="The Coffee Shop",c.innerText="The Coffee Shop, but with smaller characters :)",t.className="container",n.appendChild(r),n.appendChild(c),t.appendChild(a),t.appendChild(i),t.appendChild(o),e.appendChild(t),e.appendChild(n),e};var c=n.p+"5f0e5e5d2aee701ad8cfdfbd4723c519.jpg";const d=()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("h4"),a=document.createElement("p"),i=document.createElement("div"),o=document.createElement("img"),r=document.createElement("div");return o.src=c,i.className="img-container",i.appendChild(o),t.innerText="About Us",n.innerText="Here should be the description but instead of that here is just a random text :)",a.innerText="Morbi euismod lacus arcu, volutpat rutrum lacus vulputate quis. Suspendisse eget risus luctus eros aliquet vestibulum vel nec sem. Aenean facilisis elementum dolor, sed lobortis eros lacinia vel. Mauris nec quam eu metus porttitor pharetra tincidunt a lacus. Donec sit amet viverra augue. Aenean nunc sapien, posuere nec suscipit non, convallis at metus. Sed accumsan fringilla diam. Sed tempus, diam ut rutrum accumsan, leo dolor pharetra mauris, non scelerisque quam est id velit.",r.className="about-container",r.appendChild(t),r.appendChild(n),r.appendChild(a),e.classList.add("container"),e.classList.add("home"),e.appendChild(i),e.appendChild(r),e};var l=n.p+"af5bba8fdf58ed0378cf0cbccb5034a4.jpg",s=n.p+"02e0a359eee4428980de8cf074707567.jpg",p=n.p+"16984ccdd9ca1ffd4d23ae9c79e7f5eb.jpg",u=n.p+"a96d8909dac51ea3c28fc3adb0ff1f1b.jpg",f=n.p+"cffadaa8d7a6b5133489a0a1109b71ad.jpg",m=n.p+"efc8ebea7ab9e478a2cce6a59507ad84.jpg",h=n.p+"eaec130dcf9be01afd66bfcbc3cc9703.jpg",g=n.p+"276bb4ad2255f37ede19550346ecf5b5.jpg";const b=()=>{const e=document.createElement("div");return e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("article"),n=document.createElement("article"),a=document.createElement("h2"),i=document.createElement("div"),o=document.createElement("div"),r=document.createElement("p"),c=document.createElement("p");return a.innerText="Menu",r.innerText="Food",c.innerText="Drinks",t.appendChild(c),n.appendChild(r),["Cappuccino","Mocha","Latte","Espresso","Macchiato"].forEach(e=>{const n=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p"),o=document.createElement("div");n.innerText=e,a.innerText="$"+Math.floor(30*Math.random()).toString(),i.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non.",n.classList.add("name"),a.classList.add("price"),i.classList.add("description"),o.appendChild(n),o.appendChild(a),o.appendChild(i),t.appendChild(o)}),["Sandwich","Biscuit","Wrap","Bagel","Cake"].forEach(e=>{const t=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p"),o=document.createElement("div");t.innerText=e,a.innerText="$"+Math.floor(30*Math.random()).toString(),i.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non.",t.classList.add("name"),a.classList.add("price"),i.classList.add("description"),o.appendChild(t),o.appendChild(a),o.appendChild(i),n.appendChild(o)}),e.classList.add("menu"),e.classList.add("container"),r.classList.add("menu-title"),c.classList.add("menu-title"),o.classList.add("external-border"),i.classList.add("external-border"),i.classList.add("external-border"),i.classList.add("article-container"),i.appendChild(t),i.appendChild(n),o.appendChild(i),e.appendChild(a),e.appendChild(o),e})()),e.appendChild((()=>{const e=document.createElement("div");return[l,s,p,u,f,m,h,g].forEach(t=>{const n=document.createElement("div"),a=document.createElement("img");a.src=t,n.classList.add("img-container"),n.appendChild(a),e.appendChild(n)}),e.classList.add("gallery"),e})()),e},x=()=>{const e=document.createElement("div");return e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h3"),i=document.createElement("p"),o=document.createElement("p"),r=document.createElement("p"),c=document.createElement("h4"),d=document.createElement("p"),l=document.createElement("p"),s=document.createElement("div");return a.innerText="Visit Us",i.innerHTML="1 Macquarie St,</br>Sydney NSW 2000, Australia",o.innerText="+61 2 9240 2255",r.innerText="example@email.com",c.innerText="Schedule",d.innerHTML="Monday to Friday</br>12:00 - 22:30",l.innerHTML="Saturday and Sunday</br>12:00 - 22:00",e.classList.add("location"),s.classList.add("container"),t.classList.add("address"),n.classList.add("schedule"),i.classList.add("street"),t.appendChild(i),t.appendChild(o),t.appendChild(r),n.appendChild(c),n.appendChild(d),n.appendChild(l),s.appendChild(t),s.appendChild(n),e.appendChild(a),e.appendChild(s),e})()),e.appendChild((()=>{const e=document.createElement("iframe");return e.classList.add("map"),e.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.3397555421225!2d151.21314029242754!3d-33.85956641319514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae67d5541c77%3A0x8af817cc7e3857d7!2sAria%20Restaurant%20Sydney!5e0!3m2!1ses!2smx!4v1578622220577!5m2!1ses!2smx",e.width="800",e.height="600",e.frameBorder="0",e.style.border="0",e})()),e},v=()=>{const e=document.createElement("footer"),t=document.createElement("p");return t.innerText="Oscar De La Lanza 2020",e.appendChild(t),e};n(0);const C=document.getElementById("content");C.appendChild(r()),C.appendChild(d()),C.appendChild(v()),a.addEventListener("click",()=>{C.innerHTML="",C.appendChild(r()),C.appendChild(d()),C.appendChild(v())}),i.addEventListener("click",()=>{C.innerHTML="",C.appendChild(r()),C.appendChild(b()),C.appendChild(v())}),o.addEventListener("click",()=>{C.innerHTML="",C.appendChild(r()),C.appendChild(x()),C.appendChild(v())})}]);