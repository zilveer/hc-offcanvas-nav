/*!
 * jQuery HC-MobileNav
 * ===================
 * Version: 2.0.4
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-mobile-nav
 * Description: jQuery plugin for converting menus to mobile navigations
 * License: MIT
 */
!function(w,x){"use strict";var o,B=x.document,N=(o=w("head"),function(e,n,a){var l=o.find("style#"+n);l.length?l.html(e):a?w('<style id="'+n+'">'+e+"</style>").prependTo(o):w('<style id="'+n+'">'+e+"</style>").appendTo(o)}),M=0;w.fn.extend({hcMobileNav:function(e){if(!this.length)return this;var l,y=w.extend({},{maxWidth:1024,animate:!0,transitionSide:"left",disableBody:!0,closeOnNavClick:!0,customToggle:null,navClass:"",levelSpacing:40,labels:{close:"Close",back:"Back"}},e),C=w(B.getElementsByTagName("html")[0]),k=(w(B),w(B.body)),T=(l=function(e){var n=["Webkit","Moz","Ms","O"],a=(B.body||B.documentElement).style,l=e.charAt(0).toUpperCase()+e.slice(1);if(void 0!==a[e])return e;for(var o=0;o<n.length;o++)if(void 0!==a[n[o]+l])return n[o]+l;return!1}("transform"),function(e,n){if(l&&y.animate){var a="left"===y.transitionSide?n:-n;e[0].style[l]="translate3d("+a+"px,0,0)"}});return this.each(function(){var e=w(this),a=void 0,l=!1,o=0;if(e.is("ul"))a=e.clone().wrap("<nav></nav>").parent();else if(e.is("nav"))a=e.clone();else if(!(a=e.find("nav, ul").first().clone()).length)return void console.log("%c! HC MobileNav:%c There is no <nav> or <ul> elements in your menu.","color: red","color: black");var n=a.find("ul");if(n.length){M++;var t=n.find("li"),i={},s="hc-nav-"+M,r="\n          .hc-nav-trigger."+s+",\n          .hc-mobile-nav."+s+" {\n            display: block;\n          }\n          .hc-nav."+s+" {\n            display: none;\n          }";y.maxWidth&&(r="@media screen and (max-width: "+(y.maxWidth-1)+"px) {\n            "+r+"\n          }"),N(r,"hc-mobile-nav-style"),a.on("click touchstart",function(e){e.stopPropagation()}).removeAttr("id").removeClass().addClass("hc-mobile-nav "+s+" "+y.navClass+" "+(y.animate?"animate-nav":"")+" "+(y.disableBody?"disable-body":"")).find("[id]").removeAttr("id"),a.addClass("transform-"+y.transitionSide),n.each(function(){var e=w(this),n=e.parents("li").length;i[n]?i[n]=i[n].add(e):i[n]=e});var c=function(e){var s=Number(e);0===s?i[s].wrapAll('<div class="nav-wrapper"></div>'):i[s].wrap('<div class="nav-wrapper"></div>'),i[s].each(function(e){var n=w(this),a=0!==s?e:0;n.parent().attr("data-level",s).attr("data-index",a);var l,o,t=n.children("li").filter(function(){return w(this).find("ul").length});w('<span class="next">').click((l=s,o=a,function(e){e.stopPropagation(),e.preventDefault();var n=w(this),a=v.filter("[data-level="+l+"][data-index="+o+"]");return n.closest("li").addClass("level-open"),a.addClass("sub-level-open").on("click",b(l,o)),T(p,(l+1)*y.levelSpacing),!1})).appendTo(t.addClass("has-subnav").children("a")),0!==s&&w('<li class="nav-back"><a href="#">'+(y.labels.back||"")+"<span></span></a></li>").prependTo(n).children("a").click(b(s-1,a))})};for(var d in i)c(d);var v=a.find(".nav-wrapper").on("click",function(e){return e.stopPropagation()}),p=v.first();if(w('<li class="nav-close"><a href="#">'+(y.labels.close||"")+"<span></span></a></li>").prependTo(i[0].first()).children("a").click(m(!0)),y.closeOnNavClick&&t.children("a").click(m()),y.disableBody){var f="ontouchstart"in x?"touchstart":"click";a.on(f,m())}if(k.prepend(a),y.customToggle)w(y.customToggle).addClass(s).on("click",g);else{var u=w('<a class="hc-nav-trigger '+s+'"><span></span></a>').on("click",g);e.addClass("hc-nav "+s).after(u)}}else console.log("%c! HC MobileNav:%c Menu must contain <ul> element.","color: red","color: black");function h(e){e.preventDefault(),e.stopPropagation(),l=!0,o=C.scrollTop()||k.scrollTop(),a.addClass("nav-open"),y.disableBody&&(k.addClass("hc-nav-open"),B.body.scrollHeight>B.body.offsetHeight&&C.addClass("hc-yscroll")),o&&k.css("top",-o)}function m(n){return function(e){e.stopPropagation(),!0===n&&e.preventDefault(),l=!1,C.removeClass("hc-yscroll"),a.removeClass("nav-open"),p.removeAttr("style"),t.filter(".level-open").removeClass("level-open"),a.find(".sub-level-open").removeClass("sub-level-open"),y.disableBody&&k.removeClass("hc-nav-open"),o&&(k.css("top","").scrollTop(o),C.scrollTop(o),o=0)}}function b(a,e){return function(e){e.stopPropagation(),e.preventDefault();var n=v.filter("[data-level="+a+"]");n.off("click").removeClass("sub-level-open"),n.find(".level-open").removeClass("level-open"),n.find(".sub-level-open").removeClass("sub-level-open"),T(p,a*y.levelSpacing)}}function g(e){l?m()(e):h(e)}})}})}(jQuery,"undefined"!=typeof window?window:this);