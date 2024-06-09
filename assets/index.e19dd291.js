import{v as E,k as H,ak as M,_ as N}from"./index.ab5e1824.js";/* empty css              *//* empty css              *//* empty css               */import{d as F,r as S,c as O,bH as U,C as V,D as L,aI as i,aH as s,G as h,aN as u,aM as _,u as x,a6 as j,a$ as G,ba as W,bI as q,bK as J}from"./arco.949c921a.js";import{u as Q}from"./loading.68e8c78e.js";import{e as b,a as y,u as v,b as g,h as w,g as X}from"./serial.c741fbda.js";import{I as Y}from"./form-model.480c6188.js";import{M as Z,T as ee}from"./index.de96f4cb.js";import{B as te}from"./index.a9d4e900.js";import"./chart.b6f2f6d9.js";import"./vue.d12e9c08.js";import"./useConfig.aff24c27.js";import"./dialog.8e077a55.js";import"./index.df0a6ce7.js";import"./helper.196ee190.js";import"./useDisabled.d1f2a1bc.js";import"./dep-6deb4e3a.8b0d70b3.js";import"./slot.411a67eb.js";const ae={class:"container"},oe={name:"Radio"},ne=F({...oe,setup(re){const{t:D}=E.exports.useI18n(),o=H(),{loading:P,setLoading:m}=Q(!1),a=S({renderData:Array.from({length:20}).map(t=>({})),pageSize:50,nowPage:1}),I=S({showHide:0}),C=t=>{a.renderData=t.newData},R=O(()=>[{colKey:"drag",title:D("cps.sort"),width:46},{title:"#",colKey:"index",align:"left",width:100},{title:D("cps.rx"),colKey:"rx",align:"left",width:200,cell:(t,{row:n})=>parseFloat(n.rx)?parseFloat(n.rx).toFixed(2):void 0,edit:{component:Y,props:{clearable:!0},onEdited:t=>{t.newRowData.rx=t.newRowData.rx?t.newRowData.rx:void 0;const n=[...a.renderData];n.splice((a.nowPage-1)*a.pageSize+t.rowIndex,1,t.newRowData),a.renderData=n}}},{title:D("cps.operate"),colKey:"operate",align:"left",width:150}]),z=async()=>{var t,n,l;if(o.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}if(await b(o.connectPort),m(!0),(t=o.configuration)!=null&&t.fm30){let c=new Uint8Array(60);for(let e=131008;e<131057;e+=8){const p=await y(o.connectPort,e,8,(n=o.configuration)==null?void 0:n.uart);c.set(p,e-131008)}const r=[];for(let e=0;e<60;e+=2){const p=v(c.subarray(e,e+2));p!="ffff"?r.push({rx:parseInt(p,16)/10}):r.push({})}a.renderData=r}else{let c=new Uint8Array(40);for(let e=3648;e<3681;e+=8){const p=await y(o.connectPort,e,8,(l=o.configuration)==null?void 0:l.uart);c.set(p,e-3648)}const r=[];for(let e=0;e<40;e+=2){const p=v(c.subarray(e,e+2));p!="ffff"?r.push({rx:parseInt(p,16)/10}):r.push({})}a.renderData=r}m(!1)},$=async()=>{var t,n,l,c,r;if(o.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}if(await b(o.connectPort),m(!0),(t=o.configuration)!=null&&t.fm30)for(let e=0;e<60;e+=2)a.renderData[e/2].rx?await g(o.connectPort,e+131008,w(parseInt(a.renderData[e/2].rx*10).toString(16).padStart(4,"0")),2,(n=o.configuration)==null?void 0:n.uart):await g(o.connectPort,e+131008,w("0000"),2,(l=o.configuration)==null?void 0:l.uart);else for(let e=0;e<40;e+=2)a.renderData[e/2].rx?await g(o.connectPort,e+3648,w(parseInt(a.renderData[e/2].rx*10).toString(16).padStart(4,"0")),2,(c=o.configuration)==null?void 0:c.uart):await g(o.connectPort,e+3648,w("0000"),2,(r=o.configuration)==null?void 0:r.uart);await X(o.connectPort),m(!1)},k=async t=>{const n=[...a.renderData];n.splice(t,1,{scanlist:[]}),a.renderData=n};return(t,n)=>{const l=M,c=j,r=G,e=W,p=q,A=J,B=te,K=ee,T=U;return V(),L("div",ae,[i(l,{items:[t.$t("menu.dashboard"),t.$t("menu.cps.radio")]},null,8,["items"]),i(T,{class:"general-card"},{title:s(()=>[h("span",{onClick:n[0]||(n[0]=()=>{I.showHide+=1})},u(t.$t("menu.cps.radio")+t.$t("global.onStart")),1)]),default:s(()=>[i(A,{style:{"margin-bottom":"16px"}},{default:s(()=>[i(p,{span:12},{default:s(()=>[i(e,null,{default:s(()=>[i(r,{type:"primary",onClick:z},{icon:s(()=>[i(c)]),default:s(()=>[_(" "+u(t.$t("cps.onDeviceRead")),1)]),_:1}),i(r,{onClick:$},{icon:s(()=>[i(c)]),default:s(()=>[_(" "+u(t.$t("cps.onDeviceWrite")),1)]),_:1})]),_:1})]),_:1})]),_:1}),i(K,{class:"ttable",loading:x(P),size:"medium",columns:R.value,data:a.renderData,pagination:{defaultPageSize:a.pageSize,total:a.renderData.length,defaultCurrent:1,pageSizeOptions:[15,30,50,100,200]},onChange:n[1]||(n[1]=d=>{a.pageSize=d.pagination.pageSize,a.nowPage=d.pagination.current}),bordered:"","lazy-load":"",headerAffixedTop:{offsetTop:60},hover:!0,"drag-sort":"row-handler",onDragSort:C},{drag:s(({row:d,rowIndex:f})=>[h("span",null,[i(x(Z))])]),index:s(({row:d,rowIndex:f})=>[_(u((a.nowPage-1)*a.pageSize+f+1),1)]),operate:s(({row:d,rowIndex:f})=>[i(B,{theme:"default",variant:"dashed",onClick:se=>k((a.nowPage-1)*a.pageSize+f)},{default:s(()=>[_(u(t.$t("cps.clear")),1)]),_:2},1032,["onClick"])]),_:1},8,["loading","columns","data","pagination"])]),_:1})])}}});const Ie=N(ne,[["__scopeId","data-v-be263a43"]]);export{Ie as default};
