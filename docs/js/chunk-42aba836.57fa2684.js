(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42aba836"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),a=r("9112");for(var c in i){var s=n[c],f=s&&s.prototype;if(f&&f.forEach!==o)try{a(f,"forEach",o)}catch(u){f.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=r("ae40"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=r("ae40"),c=o("filter"),s=a("filter");n({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),p=r("e8b5"),b=r("861d"),d=r("825a"),v=r("7b0b"),h=r("fc6a"),m=r("c04e"),g=r("5c6c"),y=r("7c73"),O=r("df75"),S=r("241c"),_=r("057f"),w=r("7418"),j=r("06cf"),L=r("9bf2"),E=r("d1e7"),P=r("9112"),C=r("6eeb"),x=r("5692"),T=r("f772"),A=r("d012"),D=r("90e3"),k=r("b622"),G=r("e538"),M=r("746f"),N=r("d44e"),$=r("69f3"),F=r("b727").forEach,V=T("hidden"),R="Symbol",H="prototype",J=k("toPrimitive"),I=$.set,B=$.getterFor(R),q=Object[H],Q=i.Symbol,U=o("JSON","stringify"),W=j.f,z=L.f,K=_.f,X=E.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=i.QObject,it=!nt||!nt[H]||!nt[H].findChild,ot=c&&u((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(q,e);n&&delete q[e],z(t,e,r),n&&t!==q&&z(q,e,n)}:z,at=function(t,e){var r=Y[t]=y(Q[H]);return I(r,{type:R,tag:t,description:e}),c||(r.description=e),r},ct=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},st=function(t,e,r){t===q&&st(Z,e,r),d(t);var n=m(e,!0);return d(r),l(Y,n)?(r.enumerable?(l(t,V)&&t[V][n]&&(t[V][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,V)||z(t,V,g(1,{})),t[V][n]=!0),ot(t,n,r)):z(t,n,r)},ft=function(t,e){d(t);var r=h(e),n=O(r).concat(dt(r));return F(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=m(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,V)&&this[V][e])||r)},pt=function(t,e){var r=h(t),n=m(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var i=W(r,n);return!i||!l(Y,n)||l(r,V)&&r[V][n]||(i.enumerable=!0),i}},bt=function(t){var e=K(h(t)),r=[];return F(e,(function(t){l(Y,t)||l(A,t)||r.push(t)})),r},dt=function(t){var e=t===q,r=K(e?Z:h(t)),n=[];return F(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===q&&r.call(Z,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),ot(this,e,g(1,t))};return c&&it&&ot(q,e,{configurable:!0,set:r}),at(e,t)},C(Q[H],"toString",(function(){return B(this).tag})),C(Q,"withoutSetter",(function(t){return at(D(t),t)})),E.f=lt,L.f=st,j.f=pt,S.f=_.f=bt,w.f=dt,G.f=function(t){return at(k(t),t)},c&&(z(Q[H],"description",{configurable:!0,get:function(){return B(this).description}}),a||C(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),F(O(rt),(function(t){M(t)})),n({target:R,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ut,defineProperty:st,defineProperties:ft,getOwnPropertyDescriptor:pt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:dt}),n({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),U){var vt=!s||u((function(){var t=Q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(b(e)||void 0!==t)&&!ct(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,U.apply(null,i)}})}Q[H][J]||P(Q[H],J,Q[H].valueOf),N(Q,R),A[V]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),a=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var r=[][t],f=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:s,l=o(e,1)?e[1]:void 0;return c[t]=!!r&&!i((function(){if(f&&!n)return!0;var t={length:-1};f?a(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,u,l)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),c=a((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,u=4==t,l=6==t,p=5==t||l;return function(b,d,v,h){for(var m,g,y=o(b),O=i(y),S=n(d,v,3),_=a(O.length),w=0,j=h||c,L=e?j(b,_):r?j(b,0):void 0;_>w;w++)if((p||w in O)&&(m=O[w],g=S(m,w,y),t))if(e)L[w]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:s.call(L,m)}else if(u)return!1;return l?-1:f||u?u:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},c109:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form"},[r("Formparts"),r("Graphparts")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"formparts"},[r("div",{staticClass:"formset"},[r("form",{attrs:{id:"generate"}},[r("div",{staticClass:"fieldset"},[r("label",{staticClass:"field_input",attrs:{for:"length"}},[t._v("塩基長："),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.length,expression:"length",modifiers:{number:!0}}],attrs:{name:"length",id:"length",type:"number",step:"100",min:"100",max:"10000"},domProps:{value:t.length},on:{input:function(e){e.target.composing||(t.length=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),r("label",{staticClass:"field_input",attrs:{for:"locate"}},[t._v("変異導入箇所："),r("input",{attrs:{name:"locate",id:"locate",type:"range",value:"1",step:"1",min:"1",max:t.length}}),t._v(t._s(t.length))]),t._m(0),t._m(1)]),t._m(2)])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"field_input",attrs:{for:"iteration"}},[t._v("配列本数："),r("input",{attrs:{name:"iteration",id:"number",type:"number",value:"1000",step:"1",min:"1",max:"10000"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"field_input",attrs:{for:"base"}},[t._v("導入変異："),r("select",{attrs:{name:"base",id:"base"}},[r("option",{attrs:{value:"1"}},[t._v("A挿入")]),r("option",{attrs:{value:"2"}},[t._v("G挿入")]),r("option",{attrs:{value:"3"}},[t._v("C挿入")]),r("option",{attrs:{value:"4"}},[t._v("T挿入")]),r("option",{attrs:{value:"5"}},[t._v("削除")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field_btn"},[r("input",{attrs:{type:"submit",value:"送信"}})])}];r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r("2f62"),l={name:"Formparts",data:function(){return{length:this.$store.state.length}},computed:f({},Object(u["c"])(["getLength"])),methods:f({},Object(u["b"])(["setLength"]))},p=l,b=r("2877"),d=Object(b["a"])(p,o,a,!1,null,null,null),v=d.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"graphparts"},[r("div",{attrs:{id:"graph_origin"}},[t._v(" ## graph_o ## ")]),r("div",{attrs:{id:"graph_mutate"}},[t._v(" ## graph_m ## ")])])}],g={name:"Graphparts"},y=g,O=Object(b["a"])(y,h,m,!1,null,null,null),S=O.exports,_={name:"Form",components:{Formparts:v,Graphparts:S}},w=_,j=Object(b["a"])(w,n,i,!1,null,null,null);e["default"]=j.exports},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=c.f,f=o(n),u={},l=0;while(f.length>l)r=i(n,e=f[l++]),void 0!==r&&s(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=i((function(){a(1)})),f=!c||s;n({target:"Object",stat:!0,forced:f,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-42aba836.57fa2684.js.map