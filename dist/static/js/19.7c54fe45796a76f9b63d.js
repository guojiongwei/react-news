webpackJsonp([19],{"1vvM":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,l=v(n("Zx67")),o=v(n("Zrlr")),i=v(n("wxAW")),s=v(n("zwoO")),u=v(n("Pf15")),r=v(n("GiK3")),c=n("F8kA"),d=v(n("+vBd")),f=v(n("NarX")),h=v(n("Gq5I"));v(n("5tcl"));function v(t){return t&&t.__esModule?t:{default:t}}var p=(0,h.default)(a=(0,c.withRouter)(a=function(t){function e(){var t,n,a,i;(0,o.default)(this,e);for(var u=arguments.length,r=Array(u),c=0;c<u;c++)r[c]=arguments[c];return n=a=(0,s.default)(this,(t=e.__proto__||(0,l.default)(e)).call.apply(t,[this].concat(r))),a.state={list:[{title:"文字",icon:"24"},{title:"图片",icon:"tupian"},{title:"上传视频",icon:"shipin"}],textBol:!1},i=n,(0,s.default)(a,i)}return(0,u.default)(e,t),(0,i.default)(e,[{key:"show",value:function(t){var e=this.props,n=e.state.user.user,a=e.showAlert,l=e.history;n.name?"文字"===t?this.setState({textBol:!0}):"图片"===t?a({content:"图片模块暂未完成!!!"}):"上传视频"===t&&a({content:"上传视频模块暂未完成!!!"}):a({content:"请先登录!",success:function(){l.slideStatus="top",l.push("/login")}})}},{key:"onClose",value:function(){this.setState({textBol:!1})}},{key:"render",value:function(){var t=this,e=this.state,n=e.list,a=e.textBol;e.content,e.show;return r.default.createElement("div",{className:"headeline-top-bar df-c"},n.map(function(e,n){return r.default.createElement("div",{className:"item border-half-right",key:n,onClick:t.show.bind(t,e.title)},r.default.createElement(d.default,{iconName:e.icon}),r.default.createElement("span",null,e.title))}),r.default.createElement(f.default,{className:a?"text-active":"",onClose:this.onClose.bind(this)}))}}]),e}(r.default.Component))||a)||a;e.default=p}});