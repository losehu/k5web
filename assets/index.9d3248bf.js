import{k as v,ak as B,_ as E}from"./index.ab5e1824.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as $,r as C,bH as A,C as F,D as S,aI as n,aH as o,G as k,aN as _,aM as b,a$ as H,ba as R,bF as D,bI as I,bK as P,n as T}from"./arco.949c921a.js";import{i as M,e as N,b as U,g as V}from"./serial.c741fbda.js";import{C as z}from"./index.12828262.js";import"./chart.b6f2f6d9.js";import"./vue.d12e9c08.js";import"./useConfig.aff24c27.js";import"./index.df0a6ce7.js";import"./helper.196ee190.js";const K={class:"container"},L=["innerHTML"],G={name:"Chi"},O=$({...G,setup(j){const s=v(),u=C({status:"\u70B9\u51FB\u5199\u5165\u6309\u94AE\u5199\u5165\u5B57\u5E93\u5230\u8BBE\u5907<br/><br/>",eepromType:"",showHide:0}),w=async(e=0,t)=>{var p;await N(s.connectPort);for(let a=e;a<t.length+e;a+=128)await U(s.connectPort,a,t.slice(a-e,a-e+128),128,(p=s.configuration)==null?void 0:p.uart),u.status=u.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((a-e)/t.length*100).toFixed(1)+"%<br/>",T(()=>{const r=document==null?void 0:document.getElementById("statusArea");r&&(r.scrollTop=r==null?void 0:r.scrollHeight)});u.status=u.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A100.0%<br/>",await V(s.connectPort)},h=async(e=1)=>{var p,a,r,m,g;if(s.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}if(((p=s.configuration)==null?void 0:p.uart)=="official"){alert(sessionStorage.getItem("noticeVersionNoSupport"));return}u.status=u.status+"\u6B63\u5728\u4E0B\u8F7D\u5B57\u5E93...<br />";let t;if(e==4){(a=s.configuration)!=null&&a.newpinyin?t=await fetch("/pinyin_plus.bin"):t=await fetch("/pinyin.bin");const c=t.body.getReader(),i=[];for(;;){const{done:d,value:f}=await c.read();if(d)break;i.push(...f)}const l=new Uint8Array(i);await w(131072,l);return}if(e==5){const c=await M(s.connectPort,(r=s.configuration)==null?void 0:r.uart);if(c!=262144&&c!=524288){u.status=u.status+"\u53EA\u652F\u6301 2Mbit \u4EE5\u4E0A EEPROM \u5199\u5165<br/>";return}t=await fetch("/ssb.bin");const i=t.body.getReader(),l=[];for(;;){const{done:f,value:y}=await i.read();if(f)break;l.push(...y)}const d=new Uint8Array(l);await w(246312,d);return}if(e==1){if(((m=s.configuration)==null?void 0:m.charset)=="losehu"){t=await fetch("/old_font.bin");const c=t.body.getReader(),i=[];for(;;){const{done:d,value:f}=await c.read();if(d)break;i.push(...f)}const l=new Uint8Array(i);await w(8192,l);return}if(((g=s.configuration)==null?void 0:g.charset)=="gb2312"){t=await fetch("/new_font_k.bin");const c=t.body.getReader(),i=[];for(;;){const{done:d,value:f}=await c.read();if(d)break;i.push(...f)}const l=new Uint8Array(i);await w(9344,l);return}}};return(e,t)=>{const p=B,a=H,r=z,m=R,g=D,c=A,i=I,l=P;return F(),S("div",K,[n(p,{items:[e.$t("menu.list"),e.$t("menu.font")]},null,8,["items"]),n(l,{gutter:20,align:"stretch"},{default:o(()=>[n(i,{span:24},{default:o(()=>[n(c,{class:"general-card"},{title:o(()=>[k("span",{onClick:t[0]||(t[0]=()=>{u.showHide+=1})},_(e.$t("menu.font")+e.$t("global.onStart")),1)]),default:o(()=>[n(m,null,{default:o(()=>[n(r,{bordered:""},{header:o(()=>[b(_(e.$t("tool.fontwrite")),1)]),default:o(()=>[n(a,{onClick:t[1]||(t[1]=d=>h(1))},{default:o(()=>[b(_(e.$t("tool.writefontwrite")),1)]),_:1})]),_:1}),n(r,{bordered:""},{header:o(()=>[b(_(e.$t("tool.pinyinwrite")),1)]),default:o(()=>[n(m,null,{default:o(()=>[n(a,{onClick:t[2]||(t[2]=d=>h(4))},{default:o(()=>[b(_(e.$t("tool.writepinyin")),1)]),_:1})]),_:1})]),_:1}),n(r,{bordered:""},{header:o(()=>[b(_(e.$t("tool.ssbpatch")),1)]),default:o(()=>[n(m,null,{default:o(()=>[n(a,{onClick:t[3]||(t[3]=d=>h(5))},{default:o(()=>[b(_(e.$t("tool.writessbpatch")),1)]),_:1})]),_:1})]),_:1})]),_:1}),n(g),k("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:u.status},null,8,L)]),_:1})]),_:1})]),_:1})])}}});const rt=E(O,[["__scopeId","data-v-38246451"]]);export{rt as default};
