(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function I(e){if(b(e)){const t={};for(let o=0;o<e.length;o++){const i=e[o],n=$(i)?be(i):I(i);if(n)for(const s in n)t[s]=n[s]}return t}else{if($(e))return e;if(k(e))return e}}const ge=/;(?![^(]*\))/g,ye=/:([^]+)/,$e=/\/\*.*?\*\//gs;function be(e){const t={};return e.replace($e,"").split(ge).forEach(o=>{if(o){const i=o.split(ye);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function j(e){let t="";if($(e))t=e;else if(b(e))for(let o=0;o<e.length;o++){const i=j(e[o]);i&&(t+=i+" ")}else if(k(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const w=e=>$(e)?e:e==null?"":b(e)||k(e)&&(e.toString===X||!F(e.toString))?JSON.stringify(e,q,2):String(e),q=(e,t)=>t&&t.__v_isRef?q(e,t.value):Me(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[i,n])=>(o[`${i} =>`]=n,o),{})}:Ie(t)?{[`Set(${t.size})`]:[...t.values()]}:k(t)&&!b(t)&&!Fe(t)?String(t):t,Se=[],Ce=()=>!1,ke=/^on[^a-z]/,we=e=>ke.test(e),Q=Object.assign,b=Array.isArray,Me=e=>T(e)==="[object Map]",Ie=e=>T(e)==="[object Set]",F=e=>typeof e=="function",$=e=>typeof e=="string",k=e=>e!==null&&typeof e=="object",X=Object.prototype.toString,T=e=>X.call(e),Fe=e=>T(e)==="[object Object]",Z=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},Be=/-(\w)/g,L=Z(e=>e.replace(Be,(t,o)=>o?o.toUpperCase():"")),ee=Z(e=>e.charAt(0).toUpperCase()+e.slice(1));function te(e){return ne(e)?te(e.__v_raw):!!(e&&e.__v_isReactive)}function ne(e){return!!(e&&e.__v_isReadonly)}function oe(e){return te(e)||ne(e)}function xe(e){return!!(e&&e.__v_isRef===!0)}let f=null,H=null;function U(e){const t=f;return f=e,H=e&&e.type.__scopeId||null,t}function B(e){H=e}function x(){H=null}function C(e,t=f,o){if(!t||e._n)return e;const i=(...n)=>{i._d&&Y(-1);const s=U(t);let r;try{r=e(...n)}finally{U(s),i._d&&Y(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}const Ae=e=>e.__isSuspense,Oe=e=>!!e.type.__asyncLoader,se="components";function u(e,t){return ze(se,e,!0,t)||e}const ve=Symbol();function ze(e,t,o=!0,i=!1){const n=f||Te;if(n){const s=n.type;if(e===se){const c=Pe(s,!1);if(c&&(c===t||c===L(t)||c===ee(L(t))))return s}const r=J(n[e]||s[e],t)||J(n.appContext[e],t);return!r&&i?s:r}}function J(e,t){return e&&(e[t]||e[L(t)]||e[ee(L(t))])}function v(e,t,o,i){let n;const s=o&&o[i];if(b(e)||$(e)){n=new Array(e.length);for(let r=0,c=e.length;r<c;r++)n[r]=t(e[r],r,void 0,s&&s[r])}else if(typeof e=="number"){n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r,void 0,s&&s[r])}else if(k(e))if(e[Symbol.iterator])n=Array.from(e,(r,c)=>t(r,c,void 0,s&&s[c]));else{const r=Object.keys(e);n=new Array(r.length);for(let c=0,a=r.length;c<a;c++){const S=r[c];n[c]=t(e[S],S,c,s&&s[c])}}else n=[];return o&&(o[i]=n),n}function ie(e,t,o={},i,n){if(f.isCE||f.parent&&Oe(f.parent)&&f.parent.isCE)return t!=="default"&&(o.name=t),d("slot",o,i&&i());let s=e[t];s&&s._c&&(s._d=!1),_();const r=s&&re(s(o)),c=p(g,{key:o.key||r&&r.key||`_${t}`},r||(i?i():[]),r&&e._===1?64:-2);return!n&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),s&&s._c&&(s._d=!0),c}function re(e){return e.some(t=>ae(t)?!(t.type===ce||t.type===g&&!re(t.children)):!0)?e:null}function Ne(){return{app:null,config:{isNativeTag:Ce,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}const Le=e=>e.__isTeleport,g=Symbol(void 0),He=Symbol(void 0),ce=Symbol(void 0),z=[];let h=null;function _(e=!1){z.push(h=e?null:[])}function Ee(){z.pop(),h=z[z.length-1]||null}let O=1;function Y(e){O+=e}function le(e){return e.dynamicChildren=O>0?h||Se:null,Ee(),O>0&&h&&h.push(e),e}function y(e,t,o,i,n,s){return le(l(e,t,o,i,n,s,!0))}function p(e,t,o,i,n){return le(d(e,t,o,i,n,!0))}function ae(e){return e?e.__v_isVNode===!0:!1}const ue="__vInternal",_e=({key:e})=>e??null,N=({ref:e,ref_key:t,ref_for:o})=>e!=null?$(e)||xe(e)||F(e)?{i:f,r:e,k:t,f:!!o}:e:null;function l(e,t=null,o=null,i=0,n=null,s=e===g?0:1,r=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_e(t),ref:t&&N(t),scopeId:H,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:f};return c?(P(a,o),s&128&&e.normalize(a)):o&&(a.shapeFlag|=$(o)?8:16),O>0&&!r&&h&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&h.push(a),a}const d=Re;function Re(e,t=null,o=null,i=0,n=null,s=!1){if((!e||e===ve)&&(e=ce),ae(e)){const c=V(e,t,!0);return o&&P(c,o),O>0&&!s&&h&&(c.shapeFlag&6?h[h.indexOf(e)]=c:h.push(c)),c.patchFlag|=-2,c}if(De(e)&&(e=e.__vccOpts),t){t=Ve(t);let{class:c,style:a}=t;c&&!$(c)&&(t.class=j(c)),k(a)&&(oe(a)&&!b(a)&&(a=Q({},a)),t.style=I(a))}const r=$(e)?1:Ae(e)?128:Le(e)?64:k(e)?4:F(e)?2:0;return l(e,t,o,i,n,r,s,!0)}function Ve(e){return e?oe(e)||ue in e?Q({},e):e:null}function V(e,t,o=!1){const{props:i,ref:n,patchFlag:s,children:r}=e,c=t?je(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&_e(c),ref:t&&t.ref?o&&n?b(n)?n.concat(N(t)):[n,N(t)]:N(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==g?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&V(e.ssContent),ssFallback:e.ssFallback&&V(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function M(e=" ",t=0){return d(He,null,e,t)}function P(e,t){let o=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(b(t))o=16;else if(typeof t=="object")if(i&65){const n=t.default;n&&(n._c&&(n._d=!1),P(e,n()),n._c&&(n._d=!0));return}else{o=32;const n=t._;!n&&!(ue in t)?t._ctx=f:n===3&&f&&(f.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:f},o=32):(t=String(t),i&64?(o=16,t=[M(t)]):o=8);e.children=t,e.shapeFlag|=o}function je(...e){const t={};for(let o=0;o<e.length;o++){const i=e[o];for(const n in i)if(n==="class")t.class!==i.class&&(t.class=j([t.class,i.class]));else if(n==="style")t.style=I([t.style,i.style]);else if(we(n)){const s=t[n],r=i[n];r&&s!==r&&!(b(s)&&s.includes(r))&&(t[n]=s?[].concat(s,r):r)}else n!==""&&(t[n]=i[n])}return t}Ne();let Te=null;function Pe(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}function De(e){return F(e)&&"__vccOpts"in e}const m=(e,t)=>{const o=e.__vccOpts||e;for(const[i,n]of t)o[i]=n;return o},We={name:"Header"},Ge=e=>(B("data-v-9469bc82"),e=e(),x(),e),Ke=Ge(()=>l("div",null,[l("h1",null,"Gabriele Aloisio"),l("div",{class:"typewriter"},[l("p",null,"Coding like a musician.")])],-1)),Ue=[Ke];function Je(e,t,o,i,n,s){return _(),y("header",null,Ue)}const D=m(We,[["render",Je],["__scopeId","data-v-9469bc82"]]);const Ye={name:"Container",props:["maxWidth"]};function qe(e,t,o,i,n,s){return _(),y("section",null,[ie(e.$slots,"default",{},void 0,!0)])}const E=m(Ye,[["render",qe],["__scopeId","data-v-5cf17405"]]),de="/aloxyz.github.io/assets/profile-9b43d8d4.jpg";const Qe={name:"Biography",components:{Container:E}},fe=e=>(B("data-v-dabf3294"),e=e(),x(),e),Xe=fe(()=>l("h2",null,"Hello 👋",-1)),Ze=fe(()=>l("img",{src:de,alt:""},null,-1));function et(e,t,o,i,n,s){const r=u("Container");return _(),p(r,null,{default:C(()=>[l("div",null,[l("div",null,[Xe,l("p",null,w(e.$root.biography),1)]),Ze])]),_:1})}const pe=m(Qe,[["render",et],["__scopeId","data-v-dabf3294"]]);const tt={name:"Breadcrumb",props:["bgColor","color"]};function nt(e,t,o,i,n,s){return _(),y("div",{style:I({backgroundColor:this.bgColor,color:this.color})},[ie(e.$slots,"default",{},void 0,!0)],4)}const me=m(tt,[["render",nt],["__scopeId","data-v-7cc124fb"]]);const ot={name:"Skills",props:["width"],components:{Container:E,Breadcrumb:me},data(){return{}}},R=e=>(B("data-v-5fe305ca"),e=e(),x(),e),st=R(()=>l("header",null,[l("h2",null,[M("Skills "),l("i",{class:"fa-solid fa-gear"})])],-1)),it={class:"content"},rt=R(()=>l("h3",null,"Technologies",-1)),ct=R(()=>l("h3",null,"Audio",-1)),lt=R(()=>l("h3",null,"Graphics",-1));function at(e,t,o,i,n,s){const r=u("Breadcrumb"),c=u("Container");return _(),p(c,null,{default:C(()=>[l("div",{class:"master",style:I({width:o.width})},[st,l("section",it,[l("section",null,[rt,l("div",null,[(_(!0),y(g,null,v(e.$root.skills.tech,a=>(_(),p(r,{bgColor:e.$root.colors.blue},{default:C(()=>[M(w(a),1)]),_:2},1032,["bgColor"]))),256))])]),l("section",null,[ct,l("div",null,[(_(!0),y(g,null,v(e.$root.skills.audio,a=>(_(),p(r,{bgColor:e.$root.colors.red},{default:C(()=>[M(w(a),1)]),_:2},1032,["bgColor"]))),256))])]),l("section",null,[lt,l("div",null,[(_(!0),y(g,null,v(e.$root.skills.graphics,a=>(_(),p(r,{bgColor:e.$root.colors.green},{default:C(()=>[M(w(a),1)]),_:2},1032,["bgColor"]))),256))])])])],4)]),_:1})}const W=m(ot,[["render",at],["__scopeId","data-v-5fe305ca"]]);const ut={name:"Links",props:["width"],components:{Container:E,Breadcrumb:me},data(){return{}}},_t=e=>(B("data-v-d4e5a33c"),e=e(),x(),e),dt=_t(()=>l("header",null,[l("h2",null,[M("Links "),l("i",{class:"fa-solid fa-link"})])],-1)),ft={class:"content"},pt=["href"];function mt(e,t,o,i,n,s){const r=u("Breadcrumb"),c=u("Container");return _(),p(c,null,{default:C(()=>[l("div",{class:"master",style:I({width:o.width})},[dt,l("section",ft,[l("div",null,[(_(!0),y(g,null,v(e.$root.links,a=>(_(),p(r,{bgColor:e.$root.colors.orange},{default:C(()=>[l("a",{href:a.url},w(a.name),9,pt)]),_:2},1032,["bgColor"]))),256))])])],4)]),_:1})}const G=m(ut,[["render",mt],["__scopeId","data-v-d4e5a33c"]]);const ht={},he=e=>(B("data-v-6ee8a14a"),e=e(),x(),e),gt=he(()=>l("h2",null,"Contacts",-1)),yt=he(()=>l("ul",null,[l("li",null,[l("i",{class:"fa-brands fa-linkedin fa-xl"}),l("a",{href:"https://www.linkedin.com/in/aloxyz"},"LinkedIn")]),l("li",null,[l("i",{class:"fa-solid fa-paper-plane fa-lg"}),l("a",{href:"mailto:aloxyz@tuta.io"},"Email")])],-1)),$t=[gt,yt];function bt(e,t,o,i,n,s){return _(),y("footer",null,$t)}const K=m(ht,[["render",bt],["__scopeId","data-v-6ee8a14a"]]);const St={name:"Main",components:{Biography:pe,Skills:W,Links:G,Header:D,Footer:K},data(){}},Ct={class:"dotBg"},kt={class:"leftCol"},wt={class:"rightCol"};function Mt(e,t,o,i,n,s){const r=u("Header"),c=u("Skills"),a=u("Biography"),S=u("Links"),A=u("Footer");return _(),y(g,null,[d(r),l("main",Ct,[l("div",kt,[d(c,{width:"24.7em"})]),l("div",wt,[d(a),d(S,{width:"29.3em"})])]),d(A)],64)}const It=m(St,[["render",Mt],["__scopeId","data-v-d86b9f2b"]]);const Ft={name:"MainMid",components:{Biography:pe,Skills:W,Links:G,Header:D,Footer:K},data(){}},Bt={class:"dotBg"};function xt(e,t,o,i,n,s){const r=u("Header"),c=u("Biography"),a=u("Skills"),S=u("Links"),A=u("Footer");return _(),y(g,null,[d(r),l("main",Bt,[d(c),d(a),d(S)]),d(A)],64)}const At=m(Ft,[["render",xt],["__scopeId","data-v-25f0a35e"]]);const Ot={name:"BiographySmall",components:{Container:E}},vt=e=>(B("data-v-4f16079e"),e=e(),x(),e),zt=vt(()=>l("header",null,[l("h2",null,"Hello 👋"),l("img",{src:de,alt:""})],-1));function Nt(e,t,o,i,n,s){const r=u("Container");return _(),p(r,null,{default:C(()=>[l("div",null,[zt,l("p",null,w(e.$root.biography),1)])]),_:1})}const Lt=m(Ot,[["render",Nt],["__scopeId","data-v-4f16079e"]]);const Ht={name:"MainSmall",components:{BiographySmall:Lt,Skills:W,Links:G,Header:D,Footer:K}},Et={class:"dotBg"};function Rt(e,t,o,i,n,s){const r=u("Header"),c=u("BiographySmall"),a=u("Skills"),S=u("Links"),A=u("Footer");return _(),y(g,null,[d(r),l("main",Et,[d(c),d(a),d(S)]),d(A)],64)}const Vt=m(Ht,[["render",Rt],["__scopeId","data-v-298d035b"]]);const jt={name:"App",components:{Main:It,MainMid:At,MainSmall:Vt},data(){return{isSmallScreen:!1,isMidScreen:!1,colors:{azure:"#7BCCEE",orange:"#FFA500",green:"#20BF55",red:"#E71D36",blue:"#0B4F6C"},biography:"I am Gabriele, also known as alo. My current focus is studying Computer Science at the University of Messina, while also exploring my interests in graphic design, music, sports, and engineering. I am also a dedicated Calisthenics athlete, having been training for about a year. My passions include sciences and arts, and I am also an advocate for FOSS.",skills:{tech:["C","Java","Python","Vue.js","Docker"],graphics:["Blender3D","Photoshop","Illustrator","Gimp","Ink/Stitch"],audio:["Bitwig","FL Studio","Reaper","Sound synthesis"]},links:[{name:"GitHub",url:"https://github.com/aloxyz"},{name:"GitLab",url:"https://gitlab.com/aloxyz"},{name:"Twitter",url:"https://twitter.com/alodesu"},{name:"Instagram",url:"https://instagram.com/alo.xyz"},{name:"Soundcloud",url:"https://soundcloud.com/aloxyz"},{name:"Bandcamp",url:"https://aloxyz.bandcamp.com/"}],sections:{projects:{title:"Projects",color:"#7bccee",cards:[{title:"Platea",content:"Open source Docker container orchestration tool",buttons:[{url:"https://gitlab.com/aloxyz/platea",content:'<i class="fa-brands fa-gitlab"></i>',color:"#FFA500"}]},{title:"Private Room - CoDeRTD",content:"Proof-gathering tool for illegal online content publishing",buttons:[{url:"https://www.codertd.com/it/privateroom",content:'<i class="fa-solid fa-link"></i>',color:"#7bccee"}]}]},music:{title:"Music",color:"#FFA500",cards:[{title:"Verdant - Colorful World",content:"GBA-inspired instrumental music for the Verdant (former H+ME) videogame",buttons:[{url:"https://www.youtube.com/playlist?list=PLkbHFHowIf5U7N8W45BGumo-1fE5C8wcT",content:'<i class="fa-brands fa-youtube"></i>',color:"#FFA500"},{url:"hme.plus",content:'<i class="fa-solid fa-link"></i>',color:"#7bccee"}]}]}}}},computed:{},methods:{randomColor(){var e=Object.keys(this.colors),t=e[Math.floor(Math.random()*e.length)];return this.colors[t]},midViewHandler(){this.isMidScreen=window.innerWidth<=1200},smallViewHandler(){this.isSmallScreen=window.innerWidth<=768}},created(){this.midViewHandler(),this.smallViewHandler(),window.addEventListener("resize",this.midViewHandler),window.addEventListener("resize",this.smallViewHandler)}};function Tt(e,t,o,i,n,s){const r=u("MainSmall"),c=u("MainMid"),a=u("Main");return n.isSmallScreen?(_(),p(r,{key:0})):n.isMidScreen?(_(),p(c,{key:1})):(_(),p(a,{key:2}))}const Pt=m(jt,[["render",Tt]]);Vue.createApp(Pt).mount("#app");
