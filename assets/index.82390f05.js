import{e as B,_ as E}from"./index.8c439602.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as g,r as w,bi as A,C as v,D as k,aE as s,b0 as c,aV as p,b3 as C,G as x,n as m,bd as N,bs as P,bO as D,bP as S,bN as T,bQ as V}from"./arco.b143604e.js";import{d as b,c as H,r as _,i as I,j as F,l as j,n as L}from"./serial.3518333f.js";import"./chart.9aa904c5.js";import"./vue.12fb94d8.js";const M={class:"container"},O=["innerHTML"],R={name:"Flash"},U=g({...R,setup(z){const u=B(),t=w({status:"\u70B9\u51FB\u66F4\u65B0\u6309\u94AE\u66F4\u65B0\u56FA\u4EF6\u5230\u8BBE\u5907<br/><br/>",binaryFile:void 0,binaryName:""}),f=()=>{const a=document.createElement("input");a.type="file",a.onchange=async()=>{const r=new Blob([a.files[0]],{type:"application/octet-stream"}),i=new Uint8Array(await r.arrayBuffer());t.binaryFile=i,t.binaryName=a.files[0].name},a.click()},y=async()=>{if(!t.binaryFile){alert("\u8BF7\u9009\u62E9\u6587\u4EF6");return}u.connectPort&&await b(u.connectPort);let a=await H();await _(a,24,1e3);const r=I(t.binaryFile),i=new Uint8Array([48,5,r.length,0,...r]);await F(a,i),await _(a,24);const o=j(t.binaryFile);if(o.length>61439)throw new Error("Last resort boundary check failed. Whoever touched the code is an idiot.");for(let e=0;e<o.length;e+=256){const l=o.slice(e,e+256),d=L(l,e,o.length);try{await F(a,d),await _(a,26)}catch(n){return console.log("Flash command rejected. Aborting."),Promise.reject(n)}t.status=t.status+`\u66F4\u65B0\u8FDB\u5EA6 ${(e/o.length*100).toFixed(1)}%<br/>`,m(()=>{const n=document==null?void 0:document.getElementById("statusArea");n&&(n.scrollTop=n==null?void 0:n.scrollHeight)})}t.status=t.status+"\u66F4\u65B0\u8FDB\u5EA6 100.0%<br/>",t.status=t.status+"\u56FA\u4EF6\u66F4\u65B0\u6210\u529F",m(()=>{const e=document==null?void 0:document.getElementById("statusArea");e&&(e.scrollTop=e==null?void 0:e.scrollHeight)}),b(a),u.updateSettings({connectState:!1})};return(a,r)=>{const i=A("Breadcrumb"),o=N,e=P,l=D,d=S,n=T,h=V;return v(),k("div",M,[s(i,{items:["\u5C0F\u5DE5\u5177","\u56FA\u4EF6\u5347\u7EA7"]}),s(h,{gutter:20,align:"stretch"},{default:c(()=>[s(n,{span:24},{default:c(()=>[s(d,{class:"general-card",title:"\u56FA\u4EF6\u5347\u7EA7"},{default:c(()=>[s(e,null,{default:c(()=>[s(o,{onClick:f},{default:c(()=>[p(C(t.binaryFile?t.binaryName:"\u9009\u62E9\u56FA\u4EF6"),1)]),_:1}),s(o,{type:"primary",disabled:!t.binaryFile,onClick:y},{default:c(()=>[p("\u66F4\u65B0")]),_:1},8,["disabled"])]),_:1}),s(l),x("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:t.status},null,8,O)]),_:1})]),_:1})]),_:1})])}}});const Z=E(U,[["__scopeId","data-v-dacccb62"]]);export{Z as default};
