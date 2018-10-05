/*
 * HC Off-canvas Nav
 * ===================
 * Version: 3.2.0
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-offcanvas-nav
 * Description: jQuery plugin for creating off-canvas multi-level navigations
 * License: MIT
 */
"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(W,j){var c,E=j.document,$=W(E.getElementsByTagName("html")[0]),F=(W(E),(/iPad|iPhone|iPod/.test(navigator.userAgent)||!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform))&&!j.MSStream),_="ontouchstart"in j||navigator.maxTouchPoints||j.DocumentTouch&&E instanceof DocumentTouch,L=function(n){return!isNaN(parseFloat(n))&&isFinite(n)},U=function(n){return n.stopPropagation()},z=function(e){return function(n){n.preventDefault(),n.stopPropagation(),"function"==typeof e&&e()}},Q=function(n,e,t){var a=t.children(),o=a.length,c=-1<e?Math.max(0,Math.min(e-1,o)):Math.max(0,Math.min(o+e+1,o));0===c?t.prepend(n):a.eq(c-1).after(n)},V=function(n){return-1!==["left","right"].indexOf(n)?"x":"y"},G=(c=function(n){var e=["Webkit","Moz","Ms","O"],t=(E.body||E.documentElement).style,a=n.charAt(0).toUpperCase()+n.slice(1);if(void 0!==t[n])return n;for(var o=0;o<e.length;o++)if(void 0!==t[e[o]+a])return e[o]+a;return!1}("transform"),function(n,e,t){if(c)if(0===e)n.css(c,"");else if("x"===V(t)){var a="left"===t?e:-e;n.css(c,a?"translate3d(".concat(a,"px,0,0)"):"")}else{var o="top"===t?e:-e;n.css(c,o?"translate3d(0,".concat(o,"px,0)"):"")}else n.css(t,e)}),e=function(n,e,t){console.warn("%cHC Off-canvas Nav:%c "+t+"%c '"+n+"'%c is now deprecated and will be removed. Use%c '"+e+"'%c instead.","color: #fa253b","color: default","color: #5595c6","color: default","color: #5595c6","color: default")},I=0;W.fn.extend({hcOffcanvasNav:function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.length)return this;var q=this,A=W(E.body);n.side&&(e("side","position","option"),n.position=n.side);var D=W.extend({},{maxWidth:1024,pushContent:!1,position:"left",levelOpen:"overlap",levelSpacing:40,levelTitles:!1,navTitle:null,navClass:"",disableBody:!0,closeOnClick:!0,customToggle:null,insertClose:!0,insertBack:!0,labelClose:"Close",labelBack:"Back"},n),H="nav-open";return this.each(function(){var e=W(this);if(e.find("ul").addBack("ul").length){var a,o,c,b="hc-nav-".concat(++I),l=(a="hc-offcanvas-".concat(I,"-style"),o=W("head"),function(n,e){var t=o.find("style#".concat(a));t.length?t.html(e?t.html()+n:n):W('<style id="'.concat(a,'">').concat(n,"</style>")).appendTo(o)});e.addClass("hc-nav ".concat(b));var t,i,s,r=W("<nav>").on("click",U),p=W('<div class="nav-container">').appendTo(r),v=null,d={},f=!1,u=0,h=0,g=0,m=null,y={},k=[];D.customToggle?c=W(D.customToggle).addClass("hc-nav-trigger ".concat(b)).on("click",n):(c=W('<a class="hc-nav-trigger '.concat(b,'"><span></span></a>')).on("click",n),e.after(c));var C=function(){p.css("transition",""),x(),h=p.outerWidth(),g=p.outerHeight();var n=p.css("transform").match(/-?\d+/g),e=0!=n[4]?(n[4]<0?-1:1)*h+"px":0,t=0!=n[5]?(n[5]<0?-1:1)*g+"px":0;(e||t)&&l(".hc-offcanvas-nav.".concat(b," .nav-container {\n              transform:translate3d(").concat(e,", ").concat(t,", 0);\n            }\n"),!0)},x=function(){var n;t=p.css("transition-property"),n=p.css("transition-duration"),i=parseFloat(n)*(/\ds$/.test(n)?1e3:1),s=p.css("transition-timing-function"),v&&v.length&&t&&l("".concat(function n(e){return"string"==typeof e?e:e.attr("id")?"#"+e.attr("id"):e.attr("class")?e.prop("tagName").toLowerCase()+"."+e.attr("class").replace(/\s+/g,"."):n(e.parent())+" "+e.prop("tagName").toLowerCase()}(D.pushContent)," {\n              transition: ").concat(t," ").concat(i,"ms ").concat(s,";\n            }"),!0)},O=function(n){var e=c.css("display"),t="\n            .hc-offcanvas-nav.".concat(b," {\n              display: block;\n            }\n            .hc-nav-trigger.").concat(b," {\n              display: ").concat(e&&"none"!==e?e:"block","\n            }\n            .hc-nav.").concat(b," {\n              display: none;\n            }\n            .hc-offcanvas-nav.").concat(b,".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper {\n              transform: translate3d(-").concat(D.levelSpacing,"px,0,0);\n            }\n            .hc-offcanvas-nav.").concat(b,".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper {\n              transform: translate3d(").concat(D.levelSpacing,"px,0,0);\n            }\n            .hc-offcanvas-nav.").concat(b,".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper {\n              transform: translate3d(0,-").concat(D.levelSpacing,"px,0);\n            }\n            .hc-offcanvas-nav.").concat(b,".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper {\n              transform: translate3d(0,").concat(D.levelSpacing,"px,0);\n            }\n          ");D.maxWidth&&(t="@media screen and (max-width: ".concat(D.maxWidth-1,"px) {\n              ").concat(t,"\n            }")),l(t),n&&x(),p.css("transition","none");var a=r.hasClass(H);r.off("click").attr("class","").addClass("\n              hc-offcanvas-nav\n              ".concat(b,"\n              ").concat(D.navClass||"","\n              nav-levels-").concat(D.levelOpen||"none","\n              nav-position-").concat(D.position,"\n              ").concat(D.disableBody?"disable-body":"","\n              ").concat(F?"is-ios":"","\n              ").concat(_?"touch-device":"","\n              ").concat(a?H:"","\n            ")),D.disableBody&&r.on("click",M),v="boolean"!=typeof D.pushContent?W(D.pushContent):null,setTimeout(C,1)};W(j).on("load",C);var T=function(){var n;d=function c(n){var e=[];return n.each(function(){var n=W(this),o={classes:n.attr("class"),items:[]};n.children("li").each(function(){var n=W(this),e=n.children(":not(ul):not(div)").add(n.contents().filter(function(){return 3===this.nodeType&&this.nodeValue.trim()})),t=n.find("ul"),a=t.first().add(t.first().siblings("ul"));a.length&&!n.data("hc-uniqid")&&n.data("hc-uniqid",Math.random().toString(36).substr(2)+"-"+Math.random().toString(36).substr(2)),o.items.push({uniqid:n.data("hc-uniqid"),classes:n.attr("class"),$content:e,subnav:a.length?c(a):[]})}),e.push(o)}),e}((n=e.find("ul").addBack("ul")).first().add(n.first().siblings("ul")))},S=function(n){n&&(p.empty(),y={}),function h(n,e,g,t,a){var m=W('<div class="nav-wrapper nav-wrapper-'.concat(g,'">')).appendTo(e).on("click",U),o=W('<div class="nav-content">').appendTo(m);if(t&&o.prepend("<h2>".concat(t,"</h2>")),W.each(n,function(n,e){var u=W("<ul>").addClass(e.classes).appendTo(o);W.each(e.items,function(n,e){var t=e.$content,a=t.find("a").addBack("a"),o=a.length?a.clone():W("<a>").append(t.clone()).on("click",U);a.length&&o.on("click",function(n){n.stopPropagation(),a[0].click()}),"#"===o.attr("href")&&o.on("click",function(n){n.preventDefault()}),D.closeOnClick&&(!1===D.levelOpen||"none"===D.levelOpen?o.on("click",M):o.filter(function(){var n=W(this);return!e.subnav.length||n.attr("href")&&"#"!==n.attr("href").charAt(0)}).on("click",M));var c=W("<li>").addClass(e.classes).append(o);if(u.append(c),D.levelSpacing&&("expand"===D.levelOpen||!1===D.levelOpen||"none"===D.levelOpen)){var l=D.levelSpacing*g;l&&u.css("text-indent","".concat(l,"px"))}if(e.subnav.length){var i=g+1,s=e.uniqid,r="";if(y[i]||(y[i]=0),c.addClass("nav-parent"),!1!==D.levelOpen&&"none"!==D.levelOpen){var p=y[i],v=W('<span class="nav-next">').appendTo(o),d=W('<label for="'.concat(b,"-").concat(i,"-").concat(p,'">')).on("click",U),f=W('<input type="checkbox" id="'.concat(b,"-").concat(i,"-").concat(p,'">')).attr("data-level",i).attr("data-index",p).val(s).on("click",U).on("change",B);-1!==k.indexOf(s)&&(m.addClass("sub-level-open").on("click",function(){return N(i,p)}),c.addClass("level-open"),f.prop("checked",!0)),c.prepend(f),r=!0===D.levelTitles?t.text().trim():"",o.attr("href")&&"#"!==o.attr("href").charAt(0)?v.append(d):o.prepend(d.on("click",function(){W(this).parent().trigger("click")}))}y[i]++,h(e.subnav,c,i,r,y[i]-1)}})}),g&&void 0!==a&&!1!==D.insertBack&&"overlap"===D.levelOpen){var c=o.children("ul"),l=W('<li class="nav-back"><a href="#">'.concat(D.labelBack||"","<span></span></a></li>"));l.children("a").on("click",z(function(){return N(g,a)})),!0===D.insertBack?c.first().prepend(l):L(D.insertBack)&&Q(l,D.insertBack,c)}if(0===g&&!1!==D.insertClose){var i=o.children("ul"),s=W('<li class="nav-close"><a href="#">'.concat(D.labelClose||"","<span></span></a></li>"));s.children("a").on("click",z(M)),!0===D.insertClose?i.first().prepend(s):L(D.insertClose)&&Q(s,D.insertClose,i.first().add(i.first().siblings("ul")))}}(d,p,0,D.navTitle)};O(),T(),S(),A.append(r);var w=function(n,e,t){var a=W("#".concat(b,"-").concat(n,"-").concat(e)),o=a.val(),c=a.parent("li"),l=c.closest(".nav-wrapper");if(a.prop("checked",!1),l.removeClass("sub-level-open"),c.removeClass("level-open"),-1!==k.indexOf(o)&&k.splice(k.indexOf(o),1),t&&"overlap"===D.levelOpen){l.off("click").on("click",U),G(p,(n-1)*D.levelSpacing,D.position);var i="x"===V(D.position)?h:g;v&&v.length&&G(v,i+(n-1)*D.levelSpacing,D.position)}};q.options=function(n){return n?D[n]:Object.assign({},D)},q.isOpen=function(){return r.hasClass(H)},q.open=function(){setTimeout(P,1.5)},q.close=M,q.update=function(n,e){"object"===_typeof(n)&&(D=W.extend({},D,n),O(!0),S(!0)),(!0===n||e)&&(O(!0),T(),S(!0))}}else console.error("%c! HC Offcanvas Nav:%c Menu must contain <ul> element.","color: #fa253b","color: default");function B(){var n=W(this),e=Number(n.attr("data-level")),t=Number(n.attr("data-index"));n.prop("checked")?function(n,e){var t=W("#".concat(b,"-").concat(n,"-").concat(e)),a=t.val(),o=t.parent("li"),c=o.closest(".nav-wrapper");if(c.addClass("sub-level-open"),o.addClass("level-open"),-1===k.indexOf(a)&&k.push(a),"overlap"===D.levelOpen){c.on("click",function(){return N(n,e)}),G(p,n*D.levelSpacing,D.position);var l="x"===V(D.position)?h:g;v&&v.length&&G(v,l+n*D.levelSpacing,D.position)}}(e,t):N(e,t)}function P(){f=!0,r.addClass(H),c.addClass("toggle-open"),"expand"===D.levelOpen&&m&&clearTimeout(m),D.disableBody&&(u=$.scrollTop()||A.scrollTop(),E.documentElement.scrollHeight>E.documentElement.offsetHeight&&$.addClass("hc-nav-yscroll"),A.addClass("hc-nav-open"),u&&A.css("top",-u));var n="x"===V(D.position)?h:g;v&&v.length&&G(v,n,D.position),setTimeout(function(){q.trigger("open",W.extend({},D))},i+1)}function M(){f=!1,v&&v.length&&G(v,0),r.removeClass(H),p.removeAttr("style"),c.removeClass("toggle-open"),!1!==D.levelOpen&&"none"!==D.levelOpen&&(m=setTimeout(function(){N(0)},"expand"===D.levelOpen?i:0)),D.disableBody&&(A.removeClass("hc-nav-open"),$.removeClass("hc-nav-yscroll"),u&&(A.css("top","").scrollTop(u),$.scrollTop(u),u=0)),setTimeout(function(){q.trigger("close.$",W.extend({},D)),q.trigger("close.once",W.extend({},D)).off("close.once")},i+1)}function n(n){n.preventDefault(),n.stopPropagation(),f?M():P()}function N(n,e){for(var t=n;t<=Object.keys(y).length;t++)if(t==n&&void 0!==e)w(n,e,!0);else for(var a=0;a<y[t];a++)w(t,a,t==n)}})}})}(jQuery,"undefined"!=typeof window?window:this);