import{t as Z,u as ee,N as h,ad as te,O as ae,_ as oe}from"./index.cb3e7091.js";/* empty css              *//* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{d as ne,r as E,o as se,bT as le,bI as ie,C as d,D as k,aI as a,aH as t,G as m,aM as l,aN as i,u as p,aK as x,aJ as L,aE as b,b7 as U,bh as re,bU as ue,bV as de,bK as ce,bO as pe,bm as me,bn as _e}from"./arco.9755215d.js";import{g as fe}from"./vue.e23f7fca.js";import{S as we,R as ge,L as he,a as ke,D as be,T as Fe,U as ve}from"./index.73f8af30.js";import{I as ye}from"./index.98ce9939.js";import{T as xe,P as Ae}from"./dep-71c4f289.42b742c7.js";import{L as Ce}from"./index.e2eb30eb.js";import{F as $e,a as Ie}from"./index.f376e7d4.js";import"./chart.e5f26fc3.js";import"./slot.c4dbb40e.js";import"./index.bfcac842.js";import"./index.00973063.js";import"./form-model.13b193b5.js";import"./index.0ef6927f.js";const Ee=F=>(me("data-v-253789c8"),F=F(),_e(),F),Le={class:"container"},Ue={style:{display:"flex",gap:"1rem","align-items":"flex-end"}},De={style:{"margin-right":"20px"}},Ve={style:{color:"#373737",margin:"10px"}},Be={style:{display:"flex","align-items":"center","justify-content":"space-between"}},Se={style:{display:"flex",width:"100%"}},Pe={style:{width:"90%"}},Re=Ee(()=>m("br",null,null,-1)),Te={style:{width:"40%",margin:"auto","text-align":"center"}},ze={name:"Backup"},Ne=ne({...ze,setup(F){Z();const c=ee(),D=fe(),s=E({binaryFile:void 0,loading:!1,showPanel:!1,showUpload:!1,refLoading:!1,myList:[],total:0,page:1,nowpage:[],title:""}),r=E({title:"",desc:"",firmware:[]});se(async()=>{A({current:1})});const A=async n=>{s.page=n.current;const o=await h.get("https://k5ws.vicicode.cn/api/firmware/index?server=1&limit=12&page="+n.current+"&title="+s.title+"&t="+Date.now());s.total=o.data.total,s.nowpage=o.data.list},w=async()=>{s.refLoading=!0,s.showPanel=!0;const n=await h.post("https://k5ws.vicicode.cn/api/firmware/my?server=1",{},{headers:{"ba-user-token":c.accountId}});s.myList=n.data,s.refLoading=!1},V=()=>{r.title="",r.desc="",r.firmware=[],s.showUpload=!0},B=async()=>{if(r.title==""||r.firmware.code==0){U.error({content:"\u672A\u586B\u5199\u540D\u79F0\u53CA\u4E0A\u4F20\u6587\u4EF6",duration:5*1e3});return}await h.post("https://k5ws.vicicode.cn/api/firmware/add?server=1",{title:r.title,desc:r.desc,data:r.firmware[0].response.data.file.url},{headers:{"ba-user-token":c.accountId}}),s.showUpload=!1,w()},S=async n=>{await h.post("https://k5ws.vicicode.cn/api/firmware/del?server=1",{id:n},{headers:{"ba-user-token":c.accountId}}),w()},P=async n=>{s.nowpage.filter(o=>{o.id==n&&(o.star+=1)}),await h.post("https://k5ws.vicicode.cn/api/firmware/star?server=1",{id:n}),U.success({content:"\u70B9\u8D5E\u6210\u529F",duration:5*1e3})},R=()=>{w()},T=n=>{D.push({path:"/tool/flash",query:{url:n}})},z=(n,o)=>{fetch(n).then(g=>g.blob()).then(g=>{const v=URL.createObjectURL(g),u=document.createElement("a");u.href=v,u.download=o,document.body.appendChild(u),u.click(),document.body.removeChild(u)})},$=()=>{A({current:1})};return(n,o)=>{const g=te,v=ye,u=re,_=xe,N=ue,M=de,j=le,O=Ae,K=ie,q=ce,G=pe,C=ae,H=Ce,J=he,Q=ke,I=be,y=$e,W=Fe,X=ve,Y=Ie;return d(),k("div",Le,[a(g,{items:[n.$t("menu.workshop"),n.$t("menu.firmware")]},null,8,["items"]),a(G,{gutter:20,align:"stretch"},{default:t(()=>[a(q,{span:24},{default:t(()=>[a(K,{class:"general-card"},{title:t(()=>[m("div",Ue,[l(i(n.$t("menu.firmware"))+" ",1),a(v,{size:"small",style:{width:"200px"},modelValue:s.title,"onUpdate:modelValue":o[0]||(o[0]=e=>s.title=e),onEnter:$},{suffixIcon:t(()=>[a(p(we),{style:{cursor:"pointer"},onClick:$})]),_:1},8,["modelValue"])])]),extra:t(()=>[m("div",De,[p(c).name?(d(),k(x,{key:0},[a(u,{onClick:w},{default:t(()=>[l("\xA0\xA0"+i(p(c).name)+"\xA0\xA0",1)]),_:1}),a(u,{onClick:w},{default:t(()=>[l("\xA0\xA0"+i(n.$t("global.upload"))+"\xA0\xA0",1)]),_:1}),a(u,{onClick:o[1]||(o[1]=e=>p(c).logout())},{default:t(()=>[l("\xA0\xA0"+i(n.$t("global.logout"))+"\xA0\xA0",1)]),_:1})],64)):(d(),k(x,{key:1},[a(u,{onClick:o[2]||(o[2]=e=>p(c).setInfo({showLogin:!0}))},{default:t(()=>[l("\xA0\xA0"+i(n.$t("global.login"))+"\xA0\xA0",1)]),_:1}),a(u,{onClick:o[3]||(o[3]=e=>p(c).setInfo({showRegister:!0}))},{default:t(()=>[l("\xA0\xA0"+i(n.$t("global.register"))+"\xA0\xA0",1)]),_:1}),m("span",Ve,i(n.$t("global.loginUpload")),1)],64))])]),default:t(()=>[a(j,null,{default:t(()=>[(d(!0),k(x,null,L(s.nowpage,e=>(d(),b(M,{style:{width:"100%"}},{actions:t(()=>[a(_,{style:{"margin-left":"1rem"}},{default:t(()=>[l(i(e.create_time_text),1)]),_:2},1024),a(u,{onClick:f=>P(e.id)},{default:t(()=>[l("\u{1F44D}\uFF08"+i(e.star)+"\uFF09",1)]),_:2},1032,["onClick"]),a(u,{onClick:f=>z("https://k5ws.vicicode.cn"+e.file,e.title)},{default:t(()=>[l(i(n.$t("global.download")),1)]),_:2},1032,["onClick"]),a(u,{onClick:f=>T("https://k5ws.vicicode.cn"+e.file+"?n=/"+e.title)},{default:t(()=>[l(i(n.$t("global.use")),1)]),_:2},1032,["onClick"])]),default:t(()=>[a(N,{description:e.desc},{title:t(()=>[a(_,{theme:"primary",variant:"outline"},{default:t(()=>{var f;return[l(i((f=e.user)==null?void 0:f.nickname),1)]}),_:2},1024),l(" "+i(e.title),1)]),_:2},1032,["description"])]),_:2},1024))),256))]),_:1}),a(O,{onChange:A,style:{margin:"10px"},total:s.total,current:s.page,pageSize:12,showPageNumber:"",showPageSize:!1},null,8,["total","current"])]),_:1})]),_:1})]),_:1}),a(I,{visible:s.showPanel,"onUpdate:visible":o[4]||(o[4]=e=>s.showPanel=e),size:"50%",header:"\u6211\u7684\u56FA\u4EF6",footer:!1},{default:t(()=>[m("div",Be,[a(C,{style:{margin:"10px"},onClick:V},{default:t(()=>[l("\u4E0A\u4F20\u65B0\u56FA\u4EF6")]),_:1}),a(C,{loading:s.refLoading,shape:"circle",theme:"outline",onClick:R},{icon:t(()=>[a(p(ge))]),_:1},8,["loading"])]),a(Q,{split:!0},{default:t(()=>[(d(!0),k(x,null,L(s.myList,e=>(d(),b(J,null,{default:t(()=>[m("div",Se,[m("div",Pe,[e.status==0?(d(),b(_,{key:0,theme:"primary",variant:"outline"},{default:t(()=>[l("\u5BA1\u6838\u4E2D"+i(e.remark&&`\uFF08${e.remark}\uFF09`),1)]),_:2},1024)):e.status==1?(d(),b(_,{key:1,theme:"primary",variant:"outline"},{default:t(()=>[l("\u5DF2\u5BA1\u6838"+i(e.remark&&`\uFF08${e.remark}\uFF09`),1)]),_:2},1024)):(d(),b(_,{key:2,theme:"primary",variant:"outline"},{default:t(()=>[l("\u5DF2\u9A73\u56DE"+i(e.remark&&`\uFF08${e.remark}\uFF09`),1)]),_:2},1024)),l(" "+i(e.title)+" ",1),Re,l(" "+i(e.desc),1)]),m("div",Te,[a(_,null,{default:t(()=>[l(i(e.create_time_text),1)]),_:2},1024),l("\xA0 "),a(H,{theme:"primary",hover:"color",onClick:f=>S(e.id)},{default:t(()=>[l("\u5220\u9664")]),_:2},1032,["onClick"])])])]),_:2},1024))),256))]),_:1})]),_:1},8,["visible"]),a(I,{visible:s.showUpload,"onUpdate:visible":o[8]||(o[8]=e=>s.showUpload=e),size:"25%",header:"\u4E0A\u4F20\u65B0\u56FA\u4EF6",footer:!1},{default:t(()=>[a(Y,{data:r,"reset-type":"initial",colon:"",onSubmit:B},{default:t(()=>[a(y,{label:"\u56FA\u4EF6\u540D\u79F0",name:"title","label-align":"top"},{default:t(()=>[a(v,{modelValue:r.title,"onUpdate:modelValue":o[5]||(o[5]=e=>r.title=e)},null,8,["modelValue"])]),_:1}),a(y,{label:"\u56FA\u4EF6\u63CF\u8FF0",name:"desc","label-align":"top"},{default:t(()=>[a(W,{maxlength:200,autosize:{minRows:5,maxRows:10},modelValue:r.desc,"onUpdate:modelValue":o[6]||(o[6]=e=>r.desc=e),clearable:""},null,8,["modelValue"])]),_:1}),a(y,{label:"\u56FA\u4EF6\u6587\u4EF6",name:"firmware","label-align":"top"},{default:t(()=>[a(X,{modelValue:r.firmware,"onUpdate:modelValue":o[7]||(o[7]=e=>r.firmware=e),action:"https://k5ws.vicicode.cn/api/ajax/upload?server=1","abridge-name":[8,6],headers:{"ba-user-token":p(c).accountId},theme:"file-input",placeholder:"\u672A\u9009\u62E9\u6587\u4EF6"},null,8,["modelValue","headers"])]),_:1}),a(y,{"label-align":"top"},{default:t(()=>[a(C,{theme:"primary",type:"submit",block:""},{default:t(()=>[l("\u63D0\u4EA4\u5BA1\u6838")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])])}}});const ut=oe(Ne,[["__scopeId","data-v-253789c8"]]);export{ut as default};
