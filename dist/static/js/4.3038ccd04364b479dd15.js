webpackJsonp([4,14,28],{"3n80":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=g(r("Xxa5")),i=g(r("exGp")),o=g(r("Zx67")),l=g(r("Zrlr")),d=g(r("wxAW")),c=g(r("zwoO")),s=g(r("Pf15")),A=g(r("GiK3")),m=r("F8kA"),p=g(r("HPFO")),u=g(r("Mul5")),f=g(r("qs0m")),h=g(r("Gq5I"));function g(e){return e&&e.__esModule?e:{default:e}}r("tS7Y");var w=(0,h.default)(n=(0,m.withRouter)(n=function(e){function t(){var e,r,n,a;(0,l.default)(this,t);for(var i=arguments.length,d=Array(i),s=0;s<i;s++)d[s]=arguments[s];return r=n=(0,c.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(d))),n.state={swiper:null},a=r,(0,c.default)(n,a)}return(0,s.default)(t,e),(0,d.default)(t,[{key:"activeTabs",value:function(e){var t=this.props;t.setTabsIndex,t.getRecordList,t.state.record.types;this.state.swiper&&this.state.swiper.slideTo(e)}},{key:"componentWillMount",value:function(){var e=this.props,t=e.match.params.type;e.state.record.index;this.getData(1*t)}},{key:"componentDidMount",value:function(){var e=this.refs["record-swiper"].swiper;this.setState({swiper:e}),e.slideTo(this.props.state.record.index)}},{key:"slideChangeTransitionEnd",value:function(){this.getData(this.state.swiper.activeIndex)}},{key:"getData",value:function(){var e=(0,i.default)(a.default.mark(function e(t){var r,n,i,o,l,d,c;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,n=r.showLoading,i=r.hideLoading,o=r.setTabsIndex,l=r.getRecordList,d=r.state.record.types,o(t),!(d[t].list.length>0)){e.next=4;break}return e.abrupt("return");case 4:return c=d[t].title,n(),e.next=8,l({title:c});case 8:i();case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.state.record,r=t.types,n=t.index;return A.default.createElement("div",{className:"record-wrapper"},A.default.createElement(p.default,{title:"收藏/历史"}),A.default.createElement("div",{className:"tabs df-c border-half-top"},r.map(function(t,r){return A.default.createElement("div",{className:"tab "+(r===n?"tab-active":""),key:r,onClick:function(t){return e.activeTabs(r)}},t.title)})),A.default.createElement("div",{className:"record-content"},A.default.createElement(u.default,{ref:"record-swiper",on:{slideChangeTransitionEnd:this.slideChangeTransitionEnd.bind(this)}},r.map(function(e,t){return A.default.createElement(f.default,{key:t,type:e})}))))}}]),t}(A.default.Component))||n)||n;t.default=w},qs0m:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=m(r("Zx67")),i=m(r("Zrlr")),o=m(r("wxAW")),l=m(r("zwoO")),d=m(r("Pf15")),c=m(r("GiK3")),s=r("F8kA"),A=m(r("CyZm"));function m(e){return e&&e.__esModule?e:{default:e}}var p=(0,m(r("Gq5I")).default)(n=(0,s.withRouter)(n=function(e){function t(){var e,r,n,o;(0,i.default)(this,t);for(var d=arguments.length,c=Array(d),s=0;s<d;s++)c[s]=arguments[s];return r=n=(0,l.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(c))),n.state={hasMore:!0},o=r,(0,l.default)(n,o)}return(0,d.default)(t,e),(0,o.default)(t,[{key:"handleLoad",value:function(){var e=this.props,t=e.getRecordList,r=e.state.record;return t({title:r.types[r.index].title})}},{key:"handleRefresh",value:function(){var e=this.props,t=e.refreshRecordList,r=e.state.record;return t({title:r.types[r.index].title})}},{key:"render",value:function(){var e=this,t=this.props,r=t.type,n=t.className;return c.default.createElement("section",{className:"swiper-box "+n},c.default.createElement("p",{className:"tip"},"昨天总共阅读了",r.list.length||0,"篇文章"),c.default.createElement(A.default,{className:"pullload-wrapper",handleLoad:this.handleLoad.bind(this),handleRefresh:this.handleRefresh.bind(this),hasMore:this.state.hasMore},c.default.createElement("ul",null,r.list.map(function(t,r){return c.default.createElement("li",{key:r,className:"item border-half-bottom",onClick:function(r){e.props.history.slideStatus="left",e.props.history.push("/article/"+t.id)}},0===t.images.length?c.default.createElement("div",null,c.default.createElement("h4",null,t.title),c.default.createElement("p",{className:"wes-3"},t.intro),c.default.createElement("div",{className:"df-sb"},c.default.createElement("div",{className:"small-box"},c.default.createElement("span",null,t.source),c.default.createElement("span",null,"评论：",t.comment),c.default.createElement("span",null,t.time)))):1===t.images.length?c.default.createElement("div",{className:"df-sb"},c.default.createElement("div",{className:"item-l"},c.default.createElement("h4",null,t.title),c.default.createElement("p",{className:"wes-2"},t.intro),c.default.createElement("div",{className:"df-sb"},c.default.createElement("div",{className:"small-box"},c.default.createElement("span",null,t.source),c.default.createElement("span",null,"评论：",t.comment)))),c.default.createElement("div",{className:"item-r"},c.default.createElement("img",{src:t.images[0],alt:""}))):c.default.createElement("div",null,c.default.createElement("div",{className:"item-t"},c.default.createElement("h4",null,t.title),c.default.createElement("p",{className:"wes-1"},t.intro)),c.default.createElement("div",{className:"item-b df-sb"},t.images.map(function(e,r){return c.default.createElement("img",{src:e,alt:e,key:r,style:{width:2===t.images.length?"40%":"25%"}})})),c.default.createElement("div",{className:"df-sb"},c.default.createElement("div",{className:"small-box"},c.default.createElement("span",null,t.source),c.default.createElement("span",null,"评论：",t.comment)))))}))))}}]),t}(c.default.Component))||n)||n;t.default=p},tS7Y:function(e,t,r){var n=r("vkai");"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("MTIv")(n,a);n.locals&&(e.exports=n.locals)},vkai:function(e,t,r){(e.exports=r("FZ+f")(!0)).push([e.i,".record-wrapper{width:100%;height:100%}.record-wrapper .tabs{background-color:#fff}.record-wrapper .tabs .tab{width:.7rem;text-align:center;line-height:.4rem;font-size:.14rem;margin:0 .15rem;border-bottom:.02rem solid transparent}.record-wrapper .tabs .tab-active{color:#f85959;border-bottom:.02rem solid #f85959}.record-wrapper .record-content{width:100%;height:calc(100% - .92rem)}.record-wrapper .record-content .swiper-box{width:100%;height:100%}.record-wrapper .record-content .pullload-wrapper{width:100%;height:calc(100% - .4rem)}.record-wrapper .record-content .tip{line-height:.4rem;color:#666;padding:0 .1rem;font-size:.14rem}.record-wrapper .record-content .item{padding:.2rem .1rem;background-color:#fff}.record-wrapper .record-content .item h4{color:#363636}.record-wrapper .record-content .item p{font-size:.16rem;line-height:.2rem;margin:.1rem 0}.record-wrapper .record-content .item .small-box>*{display:inline-block;vertical-align:middle;font-size:.1rem;margin-right:.04rem;color:#999}.record-wrapper .record-content .item-l{width:70%;padding-right:10px}.record-wrapper .record-content .item-r{width:30%}.record-wrapper .record-content .item-r img{width:100%}","",{version:3,sources:["C:/Users/Administrator/Desktop/无忧/react/react-toutiao/src/views/Record/C:/Users/Administrator/Desktop/无忧/react/react-toutiao/src/views/Record/C:/Users/Administrator/Desktop/无忧/react/react-toutiao/src/views/Record/index.less","C:/Users/Administrator/Desktop/无忧/react/react-toutiao/src/views/Record/C:/Users/Administrator/Desktop/无忧/react/react-toutiao/src/views/Record/index.less"],names:[],mappings:"AAAA,gBACI,WAAA,AACA,WAAA,CCCH,ADHD,sBAIQ,qBAAA,CCEP,ADND,2BAMY,YAAA,AACA,kBAAA,AACA,kBAAA,AACA,iBAAA,AACA,gBAAA,AACA,sCAAA,CCGX,ADdD,kCAcY,cAAA,AACA,kCAAA,CCGX,ADlBD,gCAmBQ,WAAA,AACA,0BAAA,CCEP,ADtBD,4CAsBY,WAAA,AACA,WAAA,CCGX,AD1BD,kDA0BY,WAAA,AACA,yBAAA,CCGX,AD9BD,qCA8BY,kBAAA,AACA,WAAA,AACA,gBAAA,AACA,gBAAA,CCGX,ADpCD,sCAoCY,oBAAA,AACA,qBAAA,CCGX,ADxCD,yCAuCgB,aAAA,CCIf,AD3CD,wCA0CgB,iBAAA,AACA,kBAAA,AACA,cAAA,CCIf,ADhDD,mDAgDoB,qBAAA,AACA,sBAAA,AACA,gBAAA,AACA,oBAAA,AACA,UAAA,CCGnB,ADvDD,wCAyDY,UAAA,AACA,kBAAA,CCCX,AD3DD,wCA6DY,SAAA,CCCX,AD9DD,4CA+DgB,UAAA,CCEf",file:"index.less",sourcesContent:['.record-wrapper {\n    width: 100%;\n    height: 100%;\n    .tabs {\n        background-color: #fff;\n        .tab {\n            width: 0.7rem;\n            text-align: center;\n            line-height: 0.4rem;\n            font-size: 0.14rem;\n            margin: 0 0.15rem;\n            border-bottom: 0.02rem solid transparent;\n        }\n        .tab-active {\n            color: @theme-red;\n            border-bottom: 0.02rem solid @theme-red;\n        }\n    }\n    .record-content {\n        width: 100%;\n        height: e("calc(100% - 0.92rem)");\n        .swiper-box {\n            width: 100%;\n            height: 100%;\n        }\n        .pullload-wrapper {\n            width: 100%;\n            height: e("calc(100% - 0.4rem)");\n        }\n        .tip {\n            line-height: 0.4rem;\n            color: @font-gray;\n            padding: 0 0.1rem;\n            font-size: 0.14rem;\n        }\n        .item {\n            padding: 0.2rem 0.1rem;\n            background-color: #fff;\n            h4 {\n                color: @font-normal;\n            }\n            p {\n                font-size: 0.16rem;\n                line-height: 0.2rem;\n                margin: 0.1rem 0;\n            }\n            .small-box {\n                >* {\n                    display: inline-block;\n                    vertical-align: middle;\n                    font-size: 0.1rem;\n                    margin-right: 0.04rem;\n                    color: #999;\n                }\n            }\n        }\n        .item-l {\n            width: 70%;\n            padding-right: 10px;\n        }\n        .item-r {\n            width: 30%;\n            img {\n                width: 100%;\n            }\n        }\n        \n    }\n}\n',".record-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.record-wrapper .tabs {\n  background-color: #fff;\n}\n.record-wrapper .tabs .tab {\n  width: 0.7rem;\n  text-align: center;\n  line-height: 0.4rem;\n  font-size: 0.14rem;\n  margin: 0 0.15rem;\n  border-bottom: 0.02rem solid transparent;\n}\n.record-wrapper .tabs .tab-active {\n  color: #f85959;\n  border-bottom: 0.02rem solid #f85959;\n}\n.record-wrapper .record-content {\n  width: 100%;\n  height: calc(100% - 0.92rem);\n}\n.record-wrapper .record-content .swiper-box {\n  width: 100%;\n  height: 100%;\n}\n.record-wrapper .record-content .pullload-wrapper {\n  width: 100%;\n  height: calc(100% - 0.4rem);\n}\n.record-wrapper .record-content .tip {\n  line-height: 0.4rem;\n  color: #666;\n  padding: 0 0.1rem;\n  font-size: 0.14rem;\n}\n.record-wrapper .record-content .item {\n  padding: 0.2rem 0.1rem;\n  background-color: #fff;\n}\n.record-wrapper .record-content .item h4 {\n  color: #363636;\n}\n.record-wrapper .record-content .item p {\n  font-size: 0.16rem;\n  line-height: 0.2rem;\n  margin: 0.1rem 0;\n}\n.record-wrapper .record-content .item .small-box > * {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 0.1rem;\n  margin-right: 0.04rem;\n  color: #999;\n}\n.record-wrapper .record-content .item-l {\n  width: 70%;\n  padding-right: 10px;\n}\n.record-wrapper .record-content .item-r {\n  width: 30%;\n}\n.record-wrapper .record-content .item-r img {\n  width: 100%;\n}\n"],sourceRoot:""}])}});