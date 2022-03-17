var ce=Object.defineProperty,de=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var re=(t,a,r)=>a in t?ce(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,Z=(t,a)=>{for(var r in a||(a={}))me.call(a,r)&&re(t,r,a[r]);if(ue)for(var r of ue(a))he.call(a,r)&&re(t,r,a[r]);return t},V=(t,a)=>de(t,ge(a));import{u as P,a as ee,r as u,v as pe,b as S,j as l,c as e,A as _e,T as ve,d as fe,e as Se,F as te,M as ie,B as W,f as be,g as ye,q as Ce,h as Fe,R as we,i as R,k as Ee,l as Ne}from"./vendor.05c149c7.js";const Ae=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&m(p)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};Ae();const D="https://mazete-api-dev.pechakucha.ai",xe=fe({stringify:t=>t.kana+t.label});function ke(){const[t,a]=u.exports.useState([0,0]);return u.exports.useLayoutEffect(()=>{function r(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),t}const Be=["\u30AD\u30E3\u30E9\u540D\u307E\u305F\u306F\u4F5C\u54C1\u540D\u3067\u3055\u304C\u3059","\u5834\u9762\u540D\u307E\u305F\u306F\u4F5C\u54C1\u540D\u3067\u3055\u304C\u3059"];function Ie(){const t=P();ee();const[a,r]=u.exports.useState(1),[m,n]=u.exports.useState([]),[s,p]=u.exports.useState(null),[d,w]=u.exports.useState(!1),[C,E]=u.exports.useState([]),[b,$]=u.exports.useState([]),[T,O]=u.exports.useState([]),[N,_]=u.exports.useState([]),[F,A]=u.exports.useState([]),[x,v]=u.exports.useState(null),[K,H]=ke();u.exports.useEffect(async()=>{let o=sessionStorage.register_id||null,i=sessionStorage.background||null,f=sessionStorage.user_list||null;if(sessionStorage.removeItem("outline_data"),f&&n(JSON.parse(f)),i&&p(JSON.parse(i)),!o){o=pe();var g=JSON.stringify({register_id:o}),J={method:"post",url:`${D}/register_id`,headers:{"Content-Type":"application/json"},data:g};await S(J)}let j=JSON.stringify({user_id:o,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),B={method:"post",url:`${D}/get_chara_list`,headers:{"Content-Type":"application/json"},data:j};S(B).then(h=>{E(h.data.chara_list)}).catch(h=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let c=JSON.stringify({user_id:o,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),y={method:"post",url:`${D}/get_world_list`,headers:{"Content-Type":"application/json"},data:c};S(y).then(h=>{$(h.data.world_list)}).catch(h=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let L={method:"post",url:`${D}/get_autocomplete_chara`,headers:{"Content-Type":"application/json"},data:{}};S(L).then(h=>{_(h.data.auto_complete),A(h.data.auto_complete)}).catch(h=>{});let I={method:"post",url:`${D}/get_autocomplete_world`,headers:{"Content-Type":"application/json"},data:{}};S(I).then(h=>{O(h.data.auto_complete)}).catch(h=>{})},[]),u.exports.useEffect(()=>{s&&m.length>0?w(!0):w(!1)},[m,s]);const z=o=>{let i=m,f=C.filter(g=>g.chara_id==o)[0];if(i==null?void 0:i.map(g=>g.chara_id).includes(o)){for(let g=0;g<i.length;g++)i[g].chara_id===o&&(i.splice(g,1),g--);n([...i])}else i.length<3&&(i.push(f),n([...i]))},k=()=>{let o=sessionStorage.register_id||null,i=JSON.stringify({user_id:o,chosen_chara_ids:m.map(g=>g.chara_id).toString(),chosen_world_ids:[s.world_id].toString()}),f={method:"post",url:`${D}/generate_outline`,headers:{"Content-Type":"application/json"},data:i};S(f).then(g=>{sessionStorage.setItem("outline_id",g.data.outline_id),sessionStorage.setItem("background",JSON.stringify(s)),sessionStorage.setItem("user_list",JSON.stringify(m)),sessionStorage.removeItem("outline_data"),t("/synopsis",{state:{}})}).catch(g=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},G=o=>{o.preventDefault();let i=sessionStorage.register_id||null,f=x,g=m.map(B=>B.chara_id).toString(),J="";s&&(J=[s.world_id].toString());let j=JSON.stringify({user_id:i,search_query:f,chosen_chara_ids:g,chosen_world_ids:J});if(a==1){let B={method:"post",url:`${D}/get_chara_list`,headers:{"Content-Type":"application/json"},data:j};S(B).then(c=>{E(c.data.chara_list)}).catch(c=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}else{let B={method:"post",url:`${D}/get_world_list`,headers:{"Content-Type":"application/json"},data:j};S(B).then(c=>{$(c.data.world_list)}).catch(c=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}},Q=o=>i=>{i.stopPropagation();let f=m;for(let g=0;g<f.length;g++)f[g].chara_id===o&&(f.splice(g,1),g--);n([...f])};return l("div",{className:"container",id:"character_select",children:[l("div",{className:"container-wrap",children:[l("div",{className:"common-header",children:[e("div",{className:"common-header-title01",children:"-\u4F5C\u54C1\u30EA\u30DF\u30C3\u30AF\u30B9-"}),e("div",{className:"common-header-title02",children:"\u30DE\u305C\u3066"})]}),l("div",{className:"preview",children:[l("div",{className:"preview-part",onClick:()=>{r(1),A(N),v(null)},children:[l("div",{className:"preview-img-part",children:[m==null?void 0:m.map(o=>e("div",{style:{backgroundImage:`url(${o.img_url})`},className:"avatar-preview",children:l("div",{className:"avatar-preview-close",onClick:Q(o.chara_id),children:[e("span",{}),e("span",{})]})},o.chara_id)),m.length==0&&e("div",{className:"avatar-preview",style:{backgroundImage:"url(/assets/image/default-avatar.png)"}})]}),e("div",{className:a===1?"preview-title-part active":"preview-title-part",children:"\u30AD\u30E3\u30E9"})]}),l("div",{className:"preview-part",onClick:()=>{r(2),A(T),v(null)},children:[e("div",{className:"preview-img-part",children:e("div",{style:{backgroundImage:`url(${s!=null?s.img_url:"/assets/image/point-bg.png"})`},className:s!=null?"world-preview":"world-none-preview"})}),e("div",{className:a===2?"preview-title-part active":"preview-title-part",children:"\u30B7\u30C1\u30E5\u30A8\u30FC\u30B7\u30E7\u30F3"})]})]}),l("div",{className:"point-select",children:[e("div",{className:"point-search",children:l("form",{onSubmit:G,children:[e(_e,{value:x,onChange:(o,i)=>{typeof i=="string"?v(i):i&&i.inputValue?v(i.inputValue):i&&i.label?v(i.label):v(i)},filterOptions:(o,i)=>xe(o,i),selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:F,getOptionLabel:o=>typeof o=="string"?o:o.label,renderOption:(o,i)=>e("li",V(Z({},o),{children:i.label})),renderInput:o=>e(ve,V(Z({},o),{label:"",placeholder:Be[a-1],onChange:i=>{v(i.target.value)}}))}),e("button",{className:"search-btn",children:e("img",{src:"/assets/image/point-search.png",alt:""})})]})}),e("div",{className:"point-intro",children:"\u753B\u50CF\u306FBing\u306E\u691C\u7D22\u7D50\u679C\u3092\u3082\u3068\u306B\u8868\u793A\u3057\u3066\u3044\u307E\u3059"}),l("div",{className:"point-body",style:{height:`calc(${H}px - 305px)`},children:[a===1&&e("div",{className:"point-body-wrap",children:C==null?void 0:C.map((o,i)=>e("div",{style:{backgroundImage:`url(${o.img_url})`},onClick:()=>z(o.chara_id),className:`${m.map(f=>f.chara_id).includes(o.chara_id)?"active":""} character-item`,children:e("span",{})},i))}),a==2&&e("div",{className:"point-body-wrap",children:b==null?void 0:b.map((o,i)=>e("div",{style:{backgroundImage:`url(${o.img_url})`},className:`${(s==null?void 0:s.img_url)==o.img_url?"active":""} location-item`,onClick:f=>{p(o)},children:e("span",{})},i))})]})]})]}),l("button",{onClick:k,className:`character-add-btn ${d?"active":""}`,disabled:!d,children:[e("img",{src:"/assets/image/imgpsh_fullsize_anim.png",alt:""}),"\u30DE\u305C\u308B"]})]})}const ae="https://mazete-api-dev.pechakucha.ai";function $e(){const[t,a]=u.exports.useState([0,0]);return u.exports.useLayoutEffect(()=>{function r(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),t}function Oe(){const t=P(),a=u.exports.useRef(),[r,m]=u.exports.useState(!1),[n,s]=u.exports.useState(!0),[p,d]=u.exports.useState(""),[w,C]=u.exports.useState([]),[E,b]=u.exports.useState(null),[$,T]=u.exports.useState(10);$e(),u.exports.useEffect(()=>{var F;let _=((F=a==null?void 0:a.current)==null?void 0:F.scrollHeight)+"px";T(_)},[p]),u.exports.useEffect(()=>{let _=window.innerHeight;document.getElementById("loading_synposis").style.height=_+"px";let F=sessionStorage.register_id||null,A=sessionStorage.outline_id||null,x=sessionStorage.background||null,v=sessionStorage.outline_data||null,K=sessionStorage.user_images||null;b(JSON.parse(x));let H=JSON.stringify({user_id:F,outline_id:A});if(v)s(!1),C(JSON.parse(K)),d(v);else{let z={method:"post",url:`${ae}/get_outline`,headers:{"Content-Type":"application/json"},data:H};S(z).then(k=>{k.data.generated&&k.data.outline&&!k.data.error?(s(!1),C(k.data.chara_img_urls),d(k.data.outline),sessionStorage.setItem("user_images",JSON.stringify(k.data.chara_img_urls))):t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(k=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}},[]);const O=()=>{let _=sessionStorage.register_id||null,F=sessionStorage.outline_id||null;sessionStorage.setItem("outline_data",JSON.stringify(p));let A=JSON.stringify({user_id:_,outline_id:F}),x={method:"post",url:`${ae}/generate_story`,headers:{"Content-Type":"application/json"},data:A};S(x).then(v=>{t(`/talk/${v.data.story_id}`,{state:{}})}).catch(v=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};u.exports.useEffect(()=>{a.current&&r&&a.current.focus()},[r]);const N=()=>{m(!1);let _=sessionStorage.register_id||null,F=sessionStorage.outline_id||null,A=JSON.stringify({user_id:_,outline_id:F,outline:p}),x={method:"post",url:`${ae}/update_outline`,headers:{"Content-Type":"application/json"},data:A};S(x).then(v=>{C(v.data.new_chara_img_urls)}).catch(v=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return l("div",{className:"container",id:"loading_synposis",children:[l("div",{className:"container-wrap",children:[e("div",{className:`ls-top ${r?"editing":""}`,children:e("div",{className:"ls-top-wrap",style:{backgroundImage:`url(${E==null?void 0:E.img_url}`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:e("div",{className:"ls-top-body",children:w.map((_,F)=>e("div",{className:"ls-top-item",style:{backgroundImage:`url(${_})`}},F))})})}),l("div",{className:"ls-main",children:[e("div",{className:"ls-main-title",children:"\u307E\u3048\u304C\u304D"}),l("div",{className:"ls-main-loading-text",children:[n&&l("div",{className:"ls-main-loading-part",children:[e("img",{src:"/assets/image/white-loading.gif",alt:""}),e("span",{children:"\u4E0B\u66F8\u304D\u6E96\u5099\u4E2D"})]}),!n&&e("textarea",{style:{height:$},ref:a,className:"ls-main-loading-wrap",value:p,disabled:!r,onChange:_=>{d(_.target.value)},onBlur:N}),n&&e("div",{className:"ls-main-loading-wrap"})]}),!r&&l("a",{className:"ls-main-edit-btn",onClick:()=>{a.current.focus(),m(!0)},children:[e("span",{children:"\u7DE8\u96C6"}),e("img",{src:"/assets/image/edit-icon.png",alt:""})]}),!r&&e("div",{className:"ls-main-making-btn-part",children:e("button",{onClick:O,className:n?"ls-main-making-btn":"ls-main-making-btn active",disabled:n,children:"\u3053\u306E\u4E16\u754C\u7DDA\u306B\u5165\u308B"})})]})]}),!r&&e("button",{className:"back-to-btn",onClick:()=>{let _=sessionStorage.user_list||null;t("/",{state:{user_list:_}})},children:e("img",{src:"/assets/image/back-to-img.png",alt:""})})]})}const U="https://mazete-api-dev.pechakucha.ai",De={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:260,bgcolor:"background.paper",borderRadius:"10px",p:4};function oe(t){return new Promise(a=>setTimeout(a,t))}function Te(){const[t,a]=u.exports.useState([0,0]);return u.exports.useLayoutEffect(()=>{function r(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),t}function ze(){const t=P(),[a,r]=u.exports.useState(!0),[m,n]=u.exports.useState(!0),[s,p]=u.exports.useState(null),[d,w]=u.exports.useState(0),[C,E]=u.exports.useState(null),[b,$]=u.exports.useState(null),[T,O]=u.exports.useState([]),[N,_]=u.exports.useState(!1),[F,A]=u.exports.useState(!1),[x,v]=u.exports.useState(!1),[K,H]=Te();let{id:z}=Se();const[k,G]=u.exports.useState(!1),Q=()=>{G(!0);let c=sessionStorage.register_id||null,y=JSON.stringify({user_id:c,story_id:z}),L={method:"post",url:`${U}/get_shared_message`,headers:{"Content-Type":"application/json"},data:y};S(L).then(I=>{t("/movie",{state:{message:I.data.message,movie_url:I.data.movie_url}})}).catch(I=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};u.exports.useEffect(()=>{console.log("asd");let c=sessionStorage.register_id||null,y=sessionStorage.data||null;if(console.log(y),y)r(!1),p(JSON.parse(y));else{let L=JSON.stringify({user_id:c,story_id:z}),I={method:"post",url:`${U}/get_story`,headers:{"Content-Type":"application/json"},data:L};S(I).then(h=>{if(h.data.generated&&!h.data.error){p(h.data),sessionStorage.setItem("data",JSON.stringify(h.data));let X=h.data.story.map(Y=>{const q=new Image;return q.src=Y.chara_img_url,q});n(X),r(!1)}else t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(h=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}},[]),u.exports.useEffect(()=>{s&&o()},[s,d]),u.exports.useEffect(async()=>{if(s){let c=s.story;await oe(1),E(c[d].position)}},[b]);const o=()=>{let c=s.story;c[d]&&($(c[d].chara_img_url),c[d].multiple?(_(!0),O(c[d].content)):(_(!1),i(c[d].content)))},i=async c=>{v(!0);for(var y=0;y<c.length;)O([c.substring(0,y+1)]),y++,await oe(75);v(!1),s.story.length-1==d&&A(!0)},f=c=>{N&&(_(!1),i(c))},g=()=>{!x&&!N&&s.story.length-1>d&&w(d+1)},J=()=>{d===0&&sessionStorage.removeItem("data"),t("/synopsis",{state:{}}),d!=0&&!x&&(w(d-1),A(!1))},j=c=>{c.preventDefault(),sessionStorage.removeItem("outline_id"),sessionStorage.removeItem("background"),sessionStorage.removeItem("user_list"),sessionStorage.removeItem("data"),t("/",{state:{}})},B=c=>{if(!N)return;let y=sessionStorage.register_id||null;r(!0);let L=JSON.stringify({user_id:y,story_id:z,chosen_content:c}),I={method:"post",url:`${U}/generate_rest_story`,headers:{"Content-Type":"application/json"},data:L};S(I).then(h=>{let X=h.data.story_id,Y=JSON.stringify({user_id:y,story_id:X}),q={method:"post",url:`${U}/get_rest_story`,headers:{"Content-Type":"application/json"},data:Y};S(q).then(M=>{if(M.data.generated&&!M.data.error){s.story.splice(d+1,s.story.length-d-1),s.story=s.story.concat(M.data.story),p(s),sessionStorage.setItem("data",JSON.stringify(s)),f(c);let ne=M.data.story.map(le=>{const se=new Image;return se.src=le.chara_img_url,se});n(ne),r(!1)}else t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(M=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}).catch(h=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return l(te,{children:[a&&e("div",{className:"container",id:"loading_adventure",children:e("div",{className:"container-wrap",children:l("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})})}),!a&&l("div",{className:"container",id:"adventure_state",style:{height:H},children:[l("div",{className:"container-wrap",onClick:g,children:[e("div",{className:"as-thumb",style:{backgroundImage:`url(${s==null?void 0:s.background_url})`},children:b&&e("img",{src:b,alt:"",className:`as-thumb-character ${C==0?"lb":C==1?"mb":"rb"}`})}),e("div",{className:"as-text",children:T.map((c,y)=>e("div",{className:`as-text-wrap ${x||N||F?"":"arrow"}`,style:{minHeight:`${N?"unset":"80px"}`},onClick:()=>{B(c)},children:c},y))})]}),e("button",{className:"back-to-btn",onClick:J,children:e("img",{src:d==0?"/assets/image/back-to-img.png":"/assets/image/back.png",alt:""})}),F&&l("div",{className:"text-select-btn-group",children:[e("a",{onClick:j,className:"final-btn",children:"\u30C8\u30C3\u30D7\u3078"}),e("a",{className:"final-btn",onClick:Q,children:"\u30B7\u30A7\u30A2"})]})]}),e(ie,{open:k,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:l(W,{sx:De,children:[e(W,{id:"modal-modal-title",variant:"h6",component:"h2",style:{textAlign:"center"},children:e("img",{src:"/assets/image/white-loading.gif",alt:""})}),e(be,{id:"modal-modal-description",sx:{mt:2},children:"\u30B7\u30A7\u30A2\u7528\u306E\u52D5\u753B\u3092\u4F5C\u6210\u4E2D..."})]})})]})}function Le(){const t=ee();return e("div",{className:"flex-center position-ref full-height full-width bg-white",children:e("div",{className:"message",style:{padding:"10px"},dangerouslySetInnerHTML:{__html:t.state.message}})})}const Je="https://mazete-api-dev.pechakucha.ai",je={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",borderRadius:"10px",p:4};function Re(){const t=P(),a=ee(),[r,m]=u.exports.useState(!1),[n,s]=u.exports.useState(a.state.message),p=()=>{m(!1)},d=b=>{b.preventDefault(),sessionStorage.removeItem("outline_id"),sessionStorage.removeItem("background"),sessionStorage.removeItem("user_list"),t("/",{state:{}})},w=()=>{ye.exports.saveAs(a.state.movie_url,"video")},C=b=>{let $=sessionStorage.register_id||null;localStorage.setItem("movie_url",a.state.movie_url);let T=JSON.stringify({user_id:$,message:n,movie_url:a.state.movie_url}),O={method:"post",url:`${Je}/get_twitter_authenticate_url`,headers:{"Content-Type":"application/json"},data:T};S(O).then(N=>{localStorage.setItem("background",sessionStorage.background),localStorage.setItem("outline_data",sessionStorage.outline_data),localStorage.setItem("outline_id",sessionStorage.outline_id),localStorage.setItem("register_id",sessionStorage.register_id),localStorage.setItem("user_list",sessionStorage.user_list),localStorage.setItem("message",n),localStorage.setItem("movie_url",a.state.movie_url),window.location.href=N.data.authenticate_url}).catch(N=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},E=b=>{b.preventDefault(),t(-1)};return l("div",{className:"container",id:"movie",children:[l("div",{className:"container-wrap",children:[e("div",{className:"movie-header",children:e("div",{className:"movie-header-title",children:"\u30B7\u30A7\u30A2"})}),l("div",{className:"movie_area",children:[l("div",{className:"movie_box",children:[e("span",{children:"\u52D5\u753B"}),e("div",{className:"movie_box_video",children:e("video",{id:"talk_movie",src:a.state.movie_url,autoPlay:!0,muted:!0,controls:!0})}),l("div",{className:"flex_box",children:[e("div",{className:"share_box",children:l("a",{onClick:()=>{m(!0)},children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"16",viewBox:"0 0 20 16",children:e("path",{fill:"#FFF",d:"M20 1.896c-.737.32-1.526.537-2.356.637.847-.5 1.5-1.291 1.805-2.233-.793.462-1.67.8-2.606.98C16.093.491 15.024 0 13.846 0 11.58 0 9.744 1.808 9.744 4.037c0 .317.033.625.106.921-3.412-.166-6.438-1.775-8.46-4.22-.352.595-.555 1.291-.555 2.029 0 1.4.729 2.637 1.83 3.362-.677-.016-1.313-.2-1.864-.504v.05c0 1.958 1.416 3.587 3.293 3.958-.343.092-.708.142-1.08.142-.263 0-.522-.025-.772-.075.521 1.604 2.039 2.77 3.836 2.804-1.403 1.084-3.175 1.73-5.099 1.73-.33 0-.657-.021-.979-.059C1.81 15.333 3.967 16 6.281 16c7.557 0 11.685-6.154 11.685-11.492 0-.175-.005-.35-.013-.52.801-.571 1.496-1.28 2.047-2.092z"})}),e("span",{children:"\u30C4\u30A4\u30FC\u30C8"})]})}),e("div",{className:"download_box",children:l("a",{onClick:w,children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"22",viewBox:"0 0 19 22",children:e("path",{fill:"#FFF",d:"M9.484 15.139c.264 0 .528-.098.791-.362l3.262-3.134c.176-.176.283-.372.283-.635 0-.508-.42-.86-.898-.86-.254 0-.498.098-.674.293l-1.27 1.348-.605.752.127-1.445v-9.98c0-.538-.45-1.007-1.016-1.007-.566 0-1.025.47-1.025 1.006v9.98l.127 1.446-.606-.752-1.27-1.348c-.175-.195-.419-.293-.673-.293-.488 0-.898.352-.898.86 0 .263.107.459.283.635l3.262 3.134c.263.264.527.362.8.362zm5.616 6.23c2.177 0 3.33-1.152 3.33-3.31V8.576c0-2.158-1.153-3.31-3.33-3.31H12.53v2.236h2.364c.84 0 1.308.43 1.308 1.318v9.004c0 .88-.469 1.309-1.308 1.309H4.025c-.85 0-1.298-.43-1.298-1.309V8.82c0-.888.449-1.318 1.298-1.318h2.403V5.266H3.82c-2.168 0-3.33 1.152-3.33 3.31v9.483c0 2.158 1.162 3.31 3.33 3.31H15.1z"})}),e("span",{children:"\u4FDD\u5B58"})]})})]})]}),e("div",{className:"footer_box",children:e("div",{className:"recreate_box",children:e("div",{id:"back_button_footer_talk",onClick:d,children:e("span",{children:"\u30C8\u30C3\u30D7\u3078\u306B\u623B\u308B"})})})})]})]}),e("button",{className:"back-to-btn",onClick:E,children:e("img",{src:"/assets/image/back-to-img.png",alt:""})}),e(ie,{open:r,onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:l(W,{sx:je,children:[e(W,{children:e("textarea",{className:"twitter-message",value:n,onChange:b=>{s(b.target.value)}})}),e(W,{display:"flex",justifyContent:"flex-end",children:e("div",{className:"share-btn",onClick:C,children:e("span",{children:"Twitter\u306B\u6295\u7A3F"})})})]})})]})}const He="https://mazete-api-dev.pechakucha.ai";function Me(){const t=P(),[a,r]=u.exports.useState(!0);return u.exports.useEffect(()=>{(async()=>{sessionStorage.setItem("background",localStorage.background),sessionStorage.setItem("outline_data",localStorage.outline_data),sessionStorage.setItem("outline_id",localStorage.outline_id),sessionStorage.setItem("register_id",localStorage.register_id),sessionStorage.setItem("user_list",localStorage.user_list),localStorage.removeItem("background"),localStorage.removeItem("outline_data"),localStorage.removeItem("outline_id"),localStorage.removeItem("register_id"),localStorage.removeItem("user_list");const{oauth_token:m,oauth_verifier:n}=Ce.parse(window.location.search);if(m&&n){let s=sessionStorage.register_id||null,p=JSON.stringify({user_id:s,oauth_token:m,oauth_verifier:n}),d={method:"post",url:`${He}/tweet_movie`,headers:{"Content-Type":"application/json"},data:p};S(d).then(w=>{sessionStorage.removeItem("outline_id"),sessionStorage.removeItem("background"),sessionStorage.removeItem("user_list");let C=localStorage.message,E=localStorage.movie_url;w.data.error?alert("Twitter\u3078\u306E\u6295\u7A3F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002"):alert("Twitter\u306B\u6295\u7A3F\u3057\u307E\u3057\u305F\u3002"),t("/movie",{state:{message:C,movie_url:E}})}).catch(w=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}})()},[]),e(te,{children:a&&e("div",{className:"container",id:"loading_adventure",children:e("div",{className:"container-wrap",children:l("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})})})})}function Pe(){return e(Fe,{children:l(we,{children:[e(R,{path:"/",element:e(Ie,{})}),e(R,{path:"/synopsis",element:e(Oe,{})}),e(R,{path:"/talk/:id",element:e(ze,{})}),e(R,{path:"/movie",element:e(Re,{})}),e(R,{path:"/movie/upload_twitter",element:e(Me,{})}),e(R,{path:"/error",element:e(Le,{})})]})})}function We(){return e(te,{children:e(Pe,{})})}Ee.render(e(Ne.StrictMode,{children:e(We,{})}),document.getElementById("root"));
