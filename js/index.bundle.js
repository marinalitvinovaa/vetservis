!function(){var e={506:function(){var e,t,n,r=(n="onpaste",(t=document.createElement("input")).setAttribute(n,""),("function"==typeof t[n]?"paste":"input")+".mask"),o=navigator.userAgent,c=/iphone/i.test(o),i=/android/i.test(o);$.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},$.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each((function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())}))):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,n){var o,a,l,s,u;return!t&&this.length>0?$(this[0]).data($.mask.dataName)():(n=$.extend({placeholder:$.mask.placeholder,completed:null},n),o=$.mask.definitions,a=[],l=u=t.length,s=null,$.each(t.split(""),(function(e,t){"?"==t?(u--,l=e):o[t]?(a.push(new RegExp(o[t])),null===s&&(s=a.length-1)):a.push(null)})),this.trigger("unmask").each((function(){var d=$(this),m=$.map(t.split(""),(function(e,t){if("?"!=e)return o[e]?n.placeholder:e})),f=d.val();function p(e){for(;++e<u&&!a[e];);return e}function h(e,t){var r,o;if(!(e<0)){for(r=e,o=p(t);r<u;r++)if(a[r]){if(!(o<u&&a[r].test(m[o])))break;m[r]=m[o],m[o]=n.placeholder,o=p(o)}y(),d.caret(Math.max(s,e))}}function v(e,t){var r;for(r=e;r<t&&r<u;r++)a[r]&&(m[r]=n.placeholder)}function y(){d.val(m.join(""))}function b(e){var t,r,o=d.val(),c=-1;for(t=0,pos=0;t<u;t++)if(a[t]){for(m[t]=n.placeholder;pos++<o.length;)if(r=o.charAt(pos-1),a[t].test(r)){m[t]=r,c=t;break}if(pos>o.length)break}else m[t]===o.charAt(pos)&&t!==l&&(pos++,c=t);return e?y():c+1<l?(d.val(""),v(0,u)):(y(),d.val(d.val().substring(0,c+1))),l?t:s}d.data($.mask.dataName,(function(){return $.map(m,(function(e,t){return a[t]&&e!=n.placeholder?e:null})).join("")})),d.attr("readonly")||d.one("unmask",(function(){d.unbind(".mask").removeData($.mask.dataName)})).bind("focus.mask",(function(){var n;clearTimeout(e),f=d.val(),n=b(),e=setTimeout((function(){y(),n==t.length?d.caret(0,n):d.caret(n)}),10)})).bind("blur.mask",(function(){b(),d.val()!=f&&d.change()})).bind("keydown.mask",(function(e){var t,n,r,o=e.which;8===o||46===o||c&&127===o?(n=(t=d.caret()).begin,(r=t.end)-n==0&&(n=46!==o?function(e){for(;--e>=0&&!a[e];);return e}(n):r=p(n-1),r=46===o?p(r):r),v(n,r),h(n,r-1),e.preventDefault()):27==o&&(d.val(f),d.caret(0,b()),e.preventDefault())})).bind("keypress.mask",(function(e){var t,r,o,c=e.which,l=d.caret();e.ctrlKey||e.altKey||e.metaKey||c<32||c&&(l.end-l.begin!=0&&(v(l.begin,l.end),h(l.begin,l.end-1)),(t=p(l.begin-1))<u&&(r=String.fromCharCode(c),a[t].test(r)&&(function(e){var t,r,o,c;for(t=e,r=n.placeholder;t<u;t++)if(a[t]){if(o=p(t),c=m[t],m[t]=r,!(o<u&&a[o].test(c)))break;r=c}}(t),m[t]=r,y(),o=p(t),i?setTimeout($.proxy($.fn.caret,d,o),0):d.caret(o),n.completed&&o>=u&&n.completed.call(d))),e.preventDefault())})).bind(r,(function(){setTimeout((function(){var e=b(!0);d.caret(e),n.completed&&e==d.val().length&&n.completed.call(d)}),0)})),b()})))}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";if(n(506),$("#phone").mask("+7(999) 999-9999"),$(window).width()>670){const e=$(".owl-carousel");e.owlCarousel({loop:!1,center:!1}),$(".slider__btn--prev").click((function(){e.trigger("prev.owl.carousel",[300])})),$(".slider__btn--next").click((function(){e.trigger("next.owl.carousel")}))}$(document).ready((function(){function e(){var e=$(window).width(),t=$(".owl-carousel");e<670?t.trigger("destroy.owl.carousel"):t.owlCarousel({singleItem:!0})}$(document).ready(e),$(window).resize(e),window.addEventListener("resize",(function(){if(document.querySelector(".owl-loaded")){let e=document.querySelectorAll(".owl-item");function t(){e[e.length-1].classList.contains("active")?document.querySelector(".slider__btn--next").classList.add("disabled"):document.querySelector(".slider__btn--next").classList.remove("disabled"),e[0].classList.contains("active")?document.querySelector(".slider__btn--prev").classList.add("disabled"):document.querySelector(".slider__btn--prev").classList.remove("disabled")}document.querySelector(".slider__btn--next").addEventListener("click",t),document.querySelector(".slider__btn--prev").addEventListener("click",t)}}))})),document.querySelector(".menu-icon-wrapper").addEventListener("click",(e=>{e.stopPropagation()})),document.querySelector(".menu-icon-wrapper").onclick=function(){document.querySelector(".menu-icon").classList.toggle("menu-icon-active"),document.querySelector(".menu__mobile").classList.toggle("active"),document.body.classList.toggle("no-scroll")},document.querySelectorAll(".header-bottom__link").forEach((e=>e.addEventListener("click",(e=>{e.stopPropagation()})))),document.querySelectorAll(".header-bottom__link").forEach((e=>e.addEventListener("click",(()=>{console.log(e.innerHTML),document.body.classList.toggle("no-scroll"),document.querySelector(".menu__mobile").classList.remove("active"),document.querySelector(".menu-icon").classList.remove("menu-icon-active")}))));const e=document.querySelector(".header-bottom__menu"),t=document.querySelector(".header-top__wrap-info"),r=document.querySelector(".menu__mobile-inner"),o=document.querySelector(".header-bottom"),c=document.querySelector(".header-top__info");function i(){const n=Math.max(document.documentElement.clientWidth,window.innerWidth||0);n<=920?c.classList.contains("mobile-info")||(r.append(c),c.classList.add("mobile-info")):c.classList.contains("mobile-info")&&(t.append(c),c.classList.remove("mobile-info")),n<=520?o.classList.contains("mobile")||(r.prepend(o),o.classList.add("mobile")):o.classList.contains("mobile")&&(e.append(o),o.classList.remove("mobile"))}window.addEventListener("resize",i),i(),document.querySelectorAll(".price__item").forEach((function(e){e.addEventListener("click",(()=>{e.querySelector(".price__button").classList.toggle("price__button--active"),e.querySelector(".price__tables").classList.toggle("none")}))}));const a=document.querySelector(".form__inner"),l=document.querySelector("form"),s=l.querySelector("#html");function u(){document.querySelector(".form__title").innerText="Ждем вас вместе с вашими любимцами!",a.append(l),s.checked=!1,document.querySelector(".error").remove(),l.querySelectorAll(".form__input").forEach((e=>e.value=""))}l.addEventListener("submit",(e=>{if(e.preventDefault(),s.checked)document.querySelector(".form__title").innerText="Форма успешно отправлена",document.querySelector(".form-contact").remove(),setTimeout(u,5e3);else if(s.checked){if(!l.querySelector("[type=tel]").value){let e="";l.querySelector(".error")&&l.querySelector(".error").remove(),e=document.createElement("span"),e.innerText="Необходимо ввести номер телефона",e.classList.add("error"),l.append(e)}}else{let e="";l.querySelector(".error")&&l.querySelector(".error").remove(),e=document.createElement("span"),e.innerText="Необходимо согласиться с политикой конфиденциальности",e.classList.add("error"),l.append(e)}})),document.querySelectorAll(".policy_link").forEach((e=>e.addEventListener("click",(e=>e.preventDefault()))))}()}();
