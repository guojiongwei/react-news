webpackJsonp([9],{IcnI:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t("2KeS"),a=t("Um34"),i=(r=a)&&r.__esModule?r:{default:r};var s=(0,o.createStore)(i.default);e.default=s},MWF8:function(n,e,t){var r={"./Cart/Cart":["PYWk",3],"./Cart/Cart.js":["PYWk",3],"./Cart/Cart.scss":["mpSp",7],"./Home/Home":["vgmR",2],"./Home/Home.js":["vgmR",2],"./Home/Home.scss":["4hS9",6],"./Kind/Kind":["dCql",1],"./Kind/Kind.js":["dCql",1],"./Kind/Kind.scss":["N8Vz",5],"./User/User":["cP8X",0],"./User/User.js":["cP8X",0],"./User/User.scss":["JR3j",4]};function o(n){var e=r[n];return e?t.e(e[1]).then(function(){return t(e[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}o.keys=function(){return Object.keys(r)},o.id="MWF8",n.exports=o},NHnr:function(n,e,t){"use strict";var r=u(t("GiK3")),o=u(t("O27J"));t("UVIz"),t("iCOP");var a=u(t("YaEn")),i=u(t("v5o6")),s=u(t("hKoQ")),l=u(t("IcnI"));function u(n){return n&&n.__esModule?n:{default:n}}function d(){o.default.render(r.default.createElement(a.default,{store:l.default}),document.getElementById("app"))}i.default.attach(document.body),s.default.polyfill(),d(),l.default.subscribe(d)},UVIz:function(n,e,t){var r=t("cUUs");"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("MTIv")(r,o);r.locals&&(n.exports=r.locals)},Um34:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(0,t("2KeS").combineReducers)({todoCart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1111",e=arguments[1],t=e.type,r=e.data;switch(t){case"ADD_CART":return r;case"DEL_CART":return[];default:return n}}});e.default=r},YaEn:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=p(t("Dd8w")),o=p(t("Zx67")),a=p(t("Zrlr")),i=p(t("wxAW")),s=p(t("zwoO")),l=p(t("Pf15")),u=p(t("GiK3")),d=t("F8kA"),f=t("MJGi"),c=p(t("s4OE"));function p(n){return n&&n.__esModule?n:{default:n}}var m=function(n){return(0,c.default)(function(){return t("MWF8")("./"+n)})},h=function(n){function e(){return(0,a.default)(this,e),(0,s.default)(this,(e.__proto__||(0,o.default)(e)).apply(this,arguments))}return(0,l.default)(e,n),(0,i.default)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.default.createElement(d.BrowserRouter,null,u.default.createElement(d.Switch,null,u.default.createElement(d.Route,{render:function(n){var e=n.location,t=n.history;"POP"==t.action?t.slideStatus="right":t.slideStatus="left";var o,a="left"===(o=t.slideStatus)||"top"===o?{atEnter:{offset:100},atLeave:{offset:-100},atActive:{offset:0}}:"right"===o||"bottom"===o?{atEnter:{offset:-100},atLeave:{offset:100},atActive:{offset:0}}:{atEnter:{offset:0},atLeave:{offset:0},atActive:{offset:0}},i=function(n){return function(e){var t={};return"left"===n||"right"===n?t={transform:"translateX("+e.offset+"%)"}:"top"!==n&&"bottom"!==n||(t={transform:"translateY("+e.offset+"%)"}),t}}(t.slideStatus);return t.slideStatus=!1,u.default.createElement(f.AnimatedSwitch,(0,r.default)({className:"animate-wrapper"},a,{runOnMount:"/"===e.pathname,mapStyles:i}),u.default.createElement(d.Route,{exact:!0,path:"/",component:m("Home/Home")}),u.default.createElement(d.Route,{path:"/kind",component:m("Kind/Kind")}),u.default.createElement(d.Route,{path:"/cart",component:m("Cart/Cart")}),u.default.createElement(d.Route,{path:"/user",component:m("User/User")}))}})))}}]),e}(u.default.Component);e.default=h},cUUs:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none; }\n\n#nprogress .bar {\n  background: #29d;\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px; }\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n  -ms-transform: rotate(3deg) translate(0px, -4px);\n  transform: rotate(3deg) translate(0px, -4px); }\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px; }\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n  animation: nprogress-spinner 400ms linear infinite; }\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative; }\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute; }\n\n@-webkit-keyframes nprogress-spinner {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes nprogress-spinner {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n",""])},iCOP:function(n,e,t){var r=t("vxCJ");"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("MTIv")(r,o);r.locals&&(n.exports=r.locals)},s4OE:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=c(t("Xxa5")),o=c(t("exGp")),a=c(t("Zx67")),i=c(t("Zrlr")),s=c(t("wxAW")),l=c(t("zwoO")),u=c(t("Pf15")),d=c(t("GiK3")),f=c(t("Y81h"));function c(n){return n&&n.__esModule?n:{default:n}}e.default=function(n){return function(e){function t(){var n,e,r,o;(0,i.default)(this,t);for(var s=arguments.length,u=Array(s),d=0;d<s;d++)u[d]=arguments[d];return e=r=(0,l.default)(this,(n=t.__proto__||(0,a.default)(t)).call.apply(n,[this].concat(u))),r.state={Component:null},o=e,(0,l.default)(r,o)}return(0,u.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=(0,o.default)(r.default.mark(function e(){var t,o;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.state.Component){e.next=2;break}return e.abrupt("return");case 2:return f.default.start(),e.prev=3,e.next=6,n();case 6:t=e.sent,o=t.default,this.setState({Component:o}),e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(3),e.t0;case 15:f.default.done();case 16:case"end":return e.stop()}},e,this,[[3,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state.Component;return n?d.default.createElement(n,this.props):null}}]),t}(d.default.Component)}},vxCJ:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,'@charset "UTF-8";\n/* 防止用户自定义背景颜色对网页的影响，添加让用户可以自定义字体 */\nhtml {\n  color: #000;\n  background: #fff;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  font-size: 100%; }\n\n/* IE6对positon:fixed的单独处理修正IE6滚动抖动的bug */\n*html, *html body {\n  background-image: url(about:blank);\n  /*修正IE6滚动抖动的bug*/\n  background-attachment: fixed;\n  /*根据自己实际，非必需*/ }\n\n/* 内外边距通常让各个浏览器样式的表现位置不同 */\nbody, div, dl, dt, dd, ul, li, pre, form, fieldset, select, input, textarea, button, p, blockquote, th, td, img, iframe {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  width: 100%; }\n\n/* 要注意表单元素并不继承父级 font 的问题 */\ninput, select, textarea {\n  font-size: 100%; }\n\n/* 重置button边框 */\n/* 去掉各Table cell 的边距并让其边重合 */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* IE bug fixed: th 不继承 text-align*/\nth {\n  text-align: inherit; }\n\n/* 对齐是排版最重要的因素, 别让什么都居中 */\ncaption, th {\n  text-align: left; }\n\n/* 去除默认边框 */\nfieldset, img {\n  border: none;\n  outline: none;\n  -moz-outline: none; }\n\n/* ie6 7 8(q) bug 显示为行内表现 */\niframe {\n  display: block; }\n\n/* 去掉列表前的标识, li 会继承 */\nol, ul, li {\n  list-style: none; }\n\n/* 来自yahoo, 让标题都自定义, 适应多个系统应用 */\nh1, h2, h3, h4, h5, h6 {\n  font-size: 100%;\n  font-weight: 500;\n  margin: 0;\n  padding: 0; }\n\n/* 让链接默认不显示下划线，在hover状态下显示下划线 */\na {\n  color: #333;\n  cursor: pointer;\n  outline: none;\n  text-decoration: none;\n  blr: expression(this.onFocus=this.blur()); }\n\na:hover {\n  text-decoration: underline; }\n\n/* 清理浮动 */\n.clearfix:before, .clearfix:after {\n  display: block;\n  content: " ";\n  clear: both; }\n\n.clearfix {\n  zoom: 1;\n  /* for ie67*/ }\n\n/* 重设 HTML5 标签, IE 需要在 js 中 createElement(TAG) */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\n/* HTML5 媒体文件跟 img 保持一致 */\naudio, canvas, video {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\naddress, caption, cite, code, dfn, em, th {\n  font-style: normal;\n  font-weight: normal; }\n\n/*解决盒模型问题css3属性也可用来统一FORM元素风格*/\n.box-sizing {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.animate-wrapper div:nth-of-type(1) {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n',""])}},["NHnr"]);