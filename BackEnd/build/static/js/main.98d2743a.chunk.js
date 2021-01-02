(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,n,e){},16:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var r,o=e(2),a=e(4),c=e.n(a),i=e(9),u=e.n(i),s=(e(15),e(16),e(3)),l=e.n(s),h=e(7),f=e(0),p=e(1),v=e(6),b=e(5),d=function(){function t(n,e){Object(f.a)(this,t),this.name=void 0,this.parent=void 0,this.name=n,this.parent=e}return Object(p.a)(t,[{key:"getPath",value:function(){return this.parent?this.parent.getPath()+this.name:this.name}}]),t}(),j=function(t){Object(v.a)(e,t);var n=Object(b.a)(e);function e(t,r){var o;return Object(f.a)(this,e),(o=n.call(this,t,r)).content=void 0,o.content=null,o}return Object(p.a)(e,[{key:"setContent",value:function(t,n){if(0!==t.length)throw"Invalid Path";if(!(n instanceof Blob))throw new TypeError;this.content=n}},{key:"getContent",value:function(t){if(0!==t.length)throw"Invalid Path";return this.content}}]),e}(d),g=function(){function t(){Object(f.a)(this,t),this.content={}}return Object(p.a)(t,[{key:"set",value:function(t,n){var e=this.content[t];return this.content[t]=n,e}},{key:"get",value:function(t){return this.content[t]?this.content[t]:null}},{key:"getValues",value:function(){return Object.values(this.content)}}]),t}(),O=function(t){Object(v.a)(e,t);var n=Object(b.a)(e);function e(t,r){var o;return Object(f.a)(this,e),(o=n.call(this,t,r)).content=void 0,o.content=new g,o}return Object(p.a)(e,[{key:"setContent",value:function(t,n){var r=this,o=t.split("/");if(console.log(o),0===t.length){if(!(n instanceof g))throw TypeError();this.content=n,this.content.getValues().forEach((function(t){t.parent=r}))}else{var a=this.content.get(o[0]);a||(a=1===o.length&&n instanceof Blob?new j(o[0],this):new e(o[0],this),this.content.set(o[0],a));var c=o.splice(0,1).join("/");a.setContent(c,n)}}},{key:"getContent",value:function(t){var n=t.split("/");if(0===t.length)return this.content;var e=this.content.get(t);return e?e.getContent(n.splice(0,1).join("/")):null}}]),e}(d),w=function(){function t(){if(Object(f.a)(this,t),this.content=null,r)return r;r=this,this.content=null}return Object(p.a)(t,[{key:"getContent",value:function(t){var n=this;return this.content||(this.content=new O("",null)),[this.content.getContent(t),new Promise(function(){var e=Object(h.a)(l.a.mark((function e(r,o){var a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchContent(t);case 2:i=e.sent,null===(a=n.content)||void 0===a||a.setContent(t,i),r(null===(c=n.content)||void 0===c?void 0:c.getContent(t));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())]}},{key:"fetchContent",value:function(){var t=Object(h.a)(l.a.mark((function t(n){var e,r=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location,t.abrupt("return",fetch(e.protocol+"//"+e.hostname+":4000/content/"+n,{mode:"same-origin"}).then(function(){var t=Object(h.a)(l.a.mark((function t(n){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=n.headers.get("content-type")).includes("application/json")){t.next=9;break}return t.t0=r,t.next=5,n.json();case 5:return t.t1=t.sent,t.abrupt("return",t.t0._parseFolderContent.call(t.t0,t.t1));case 9:if(!e.includes("text/markdown")){t.next=13;break}return t.abrupt("return",new Blob);case 13:return t.abrupt("return",new Blob);case 14:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},{key:"_parseFolderContent",value:function(t){var n=new g;return t.content.forEach((function(t){t.isDirectory?n.set(t.name,new O(t.name,null)):t.isFile&&n.set(t.name,new j(t.name,null))})),n}}]),t}(),m=function(t){Object(v.a)(e,t);var n=Object(b.a)(e);function e(t){var r;return Object(f.a)(this,e),(r=n.call(this,t)).contentManager=new w,r.state={rootFolder:null},r.updaterRootMd(),r}return Object(p.a)(e,[{key:"updaterRootMd",value:function(){var t=Object(h.a)(l.a.mark((function t(){var n,e,r=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=this.contentManager.getContent(""))[1].then((function(t){r.setState({rootFolder:t})})),e=n[0],this.setState({rootFolder:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,n=[];return null===(t=this.state.rootFolder)||void 0===t||t.getValues().forEach((function(t){t instanceof j&&n.push(Object(o.jsx)("button",{children:t.name}))})),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:n})})}}]),e}(a.Component);var y=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(m,{})})})},k=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,19)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;e(t),r(t),o(t),a(t),c(t)}))};u.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),k()}},[[18,1,2]]]);
//# sourceMappingURL=main.98d2743a.chunk.js.map