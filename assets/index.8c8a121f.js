import{v as B,t as x,ad as E,O as H,_ as M}from"./index.b53e97e0.js";/* empty css              *//* empty css              *//* empty css               */import{d as N,r as b,c as O,bI as V,C as L,D as j,aI as s,aH as i,G as S,aN as u,aM as h,u as C,a6 as G,b8 as W,bi as q,bK as F,bO as J}from"./arco.13f9ef32.js";import{u as Q}from"./loading.7d726da5.js";import{e as v,a as X,u as Y,f as I,s as P,b as Z,g as ee}from"./serial.d615852e.js";import{I as z}from"./index.392f88fb.js";import{M as te}from"./move.e5cc5062.js";import{T as ae}from"./index.94633c6f.js";import"./chart.5acd6cf6.js";import"./vue.eb9ee7d7.js";import"./dep-71c4f289.3098b85e.js";import"./index.d0de68dc.js";import"./form-model.6138c39a.js";import"./slot.1141e17e.js";const ne={class:"container"},oe={name:"dtmfContact"},re=N({...oe,setup(ie){const{t:f}=B.exports.useI18n(),r=x(),{loading:A,setLoading:_}=Q(!1),n=b({renderData:Array.from({length:16}).map(e=>({})),pageSize:16,nowPage:1}),R=b({showHide:0}),$=e=>{n.renderData=e.newData},K=O(()=>[{colKey:"drag",title:f("cps.sort"),width:46},{title:"#",colKey:"index",align:"left",width:100},{title:f("cps.contact"),colKey:"name",width:250,align:"left",cell:(e,{row:t})=>t.name,edit:{component:z,props:{clearable:!0},onEdited:e=>{const t=[...n.renderData];t.splice((n.nowPage-1)*n.pageSize+e.rowIndex,1,e.newRowData),n.renderData=t}}},{title:f("cps.dtmfid"),colKey:"dtmfid",align:"left",width:200,cell:(e,{row:t})=>t.dtmfid,edit:{component:z,props:{clearable:!0},onEdited:e=>{e.newRowData.dtmfid=e.newRowData.dtmfid?e.newRowData.dtmfid.toUpperCase():void 0;const t=[...n.renderData];t.splice((n.nowPage-1)*n.pageSize+e.rowIndex,1,e.newRowData),n.renderData=t}}},{title:f("cps.operate"),colKey:"operate",align:"left",width:150}]),T=async()=>{var d,c,o;if(r.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}await v(r.connectPort),_(!0);let e=new Uint8Array(256);for(let a=7168;a<7424;a+=16){const l=await X(r.connectPort,a,16,(d=r.configuration)==null?void 0:d.uart);e.set(l,a-7168)}const t=[];for(let a=0;a<256;a+=16)Y(e.subarray(a,a+1))!="ff"?t.push({dtmfid:I(e.subarray(a+8,a+16),(c=r.configuration)==null?void 0:c.charset),name:I(e.subarray(a,a+8),(o=r.configuration)==null?void 0:o.charset)}):t.push({});n.renderData=t,_(!1)},k=async()=>{var t,d,c;if(r.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}await v(r.connectPort),_(!0);let e=[];for(let o=0;o<16;o++){let a=n.renderData[o].dtmfid,l=n.renderData[o].name;if(a&&l){a=a.trim(),l=l.trim();let m=new Uint8Array(16),g=new Uint8Array(8),w=new Uint8Array(8),y=P(a,(t=r.configuration)==null?void 0:t.charset).slice(0,8);g.set(y);let p=P(l,(d=r.configuration)==null?void 0:d.charset).slice(0,8);w.set(p),m.set(w),m.set(g,8),e.push(m)}}if(e.length<16)for(let o=e.length;o<16;o++){let a=new Uint8Array(16);a[0]=255,a[8]=255,e[o]=a}for(let o=0;o<e.length;o++)await Z(r.connectPort,o*16+7168,e[o],16,(c=r.configuration)==null?void 0:c.uart);await ee(r.connectPort),_(!1)},U=async e=>{const t=[...n.renderData];t.splice(e,1,{scanlist:[]}),n.renderData=t};return(e,t)=>{const d=E,c=G,o=W,a=q,l=F,m=J,g=H,w=ae,y=V;return L(),j("div",ne,[s(d,{items:[e.$t("menu.dashboard"),e.$t("menu.cps.dtmf")]},null,8,["items"]),s(y,{class:"general-card"},{title:i(()=>[S("span",{onClick:t[0]||(t[0]=()=>{R.showHide+=1})},u(e.$t("menu.cps.dtmf")+e.$t("global.onStart")),1)]),default:i(()=>[s(m,{style:{"margin-bottom":"16px"}},{default:i(()=>[s(l,{span:12},{default:i(()=>[s(a,null,{default:i(()=>[s(o,{type:"primary",onClick:T},{icon:i(()=>[s(c)]),default:i(()=>[h(" "+u(e.$t("cps.onDeviceRead")),1)]),_:1}),s(o,{onClick:k},{icon:i(()=>[s(c)]),default:i(()=>[h(" "+u(e.$t("cps.onDeviceWrite")),1)]),_:1})]),_:1})]),_:1})]),_:1}),s(w,{class:"ttable",loading:C(A),size:"medium",columns:K.value,data:n.renderData,pagination:{defaultPageSize:n.pageSize,total:n.renderData.length,defaultCurrent:1,pageSizeOptions:[15,30,50,100,200]},onChange:t[1]||(t[1]=p=>{n.pageSize=p.pagination.pageSize,n.nowPage=p.pagination.current}),bordered:"","lazy-load":"",headerAffixedTop:{offsetTop:60},hover:!0,"drag-sort":"row-handler",onDragSort:$},{drag:i(({row:p,rowIndex:D})=>[S("span",null,[s(C(te))])]),index:i(({row:p,rowIndex:D})=>[h(u((n.nowPage-1)*n.pageSize+D+1),1)]),operate:i(({row:p,rowIndex:D})=>[s(g,{theme:"default",variant:"dashed",onClick:se=>U((n.nowPage-1)*n.pageSize+D)},{default:i(()=>[h(u(e.$t("cps.clear")),1)]),_:2},1032,["onClick"])]),_:1},8,["loading","columns","data","pagination"])]),_:1})])}}});const ve=M(re,[["__scopeId","data-v-72c5810e"]]);export{ve as default};
