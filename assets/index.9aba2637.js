import{t as J,ad as G,O as W,_ as q}from"./index.9d6da31d.js";/* empty css              *//* empty css              *//* empty css               */import{d as Q,r as X,o as Y,bI as Z,C as h,D as E,aI as u,aH as l,G as d,aM as c,aN as b,aK as x,aJ as B,F as S,aE as ee,u as te,a6 as oe,b8 as ae,bi as ne,bK as re,bO as se,bm as le,bn as ie,n as ue}from"./arco.9755215d.js";import{u as ce}from"./loading.3855ec1d.js";import{i as de,e as pe,s as N,h as D,g as me,l as _e,b as ge}from"./serial.c6b76da8.js";import{L as fe}from"./index.f8bf749b.js";import{I as he}from"./index.3871c524.js";import{C as be}from"./index.a9438a3d.js";import{S as Fe}from"./index.18ec2950.js";import"./chart.e5f26fc3.js";import"./vue.e23f7fca.js";import"./slot.66e31ab7.js";const M=F=>(le("data-v-b346bd1e"),F=F(),ie(),F),we={class:"container"},ye={style:{color:"red","font-weight":"bold"}},Ae={style:{"font-size":"0.9rem"}},Ee={style:{display:"flex","justify-content":"space-between","margin-left":"10px","margin-right":"10px","align-items":"flex-end","margin-bottom":"3px"}},ve=M(()=>d("div",null,"EEPROM\uFF1A",-1)),Ce={style:{width:"100%",overflow:"scroll","user-select":"none"}},ke={style:{height:"328px",display:"flex","flex-direction":"column",margin:"0",padding:"0","flex-wrap":"wrap"}},xe=["onClick","ondragover","ondrop","title"],Be=M(()=>d("br",null,null,-1)),Se=["innerHTML"],Ne={name:"BL"},De=Q({...Ne,setup(F){const m=J(),{loading:U,setLoading:w}=ce(!0),t=X({calendar:[],rom:[],bl:void 0,blName:"",nowDrag:-1,showAdd:"",status:""}),g=async(e=0,o,n="")=>{var i;for(let r=e;r<o.length+e;r+=192)await ge(m.connectPort,r,o.slice(r-e,r-e+192),o.slice(r-e,r-e+192).length,(i=m.configuration)==null?void 0:i.uart),t.status=t.status+n+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((r-e)/o.length*100).toFixed(1)+"%<br/>",ue(()=>{const a=document==null?void 0:document.getElementById("statusArea");a&&(a.scrollTop=a==null?void 0:a.scrollHeight)})},$=async e=>{t.showAdd=(e*64+262144).toString(16).toUpperCase(),setTimeout(()=>{t.showAdd=""},5e3)};Y(()=>{I();const e=[];for(let o=0;o<262144/64;o++)o<278528/64/16-16?e.push(-2):e.push(-1);t.calendar=e});const I=async()=>{const e=JSON.parse(await(await fetch("https://k5.vicicode.cn/diyapi/bl.json")).text()).latest;t.blName=e;const o=await fetch("https://k5.vicicode.cn/diyapi/"+e);if(o.body){const n=o.body.getReader(),i=[];for(;;){const{done:a,value:_}=await n.read();if(a)break;i.push(..._)}let r=new Uint8Array(12288);r.set(i,0),t.bl=r,w(!1)}},P=async()=>{var r;if(m.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}const e=await de(m.connectPort,(r=m.configuration)==null?void 0:r.uart);if(w(!0),e<524288){alert("\u53EA\u652F\u6301 4Mbit \u4EE5\u4E0A EEPROM \u5199\u5165"),w(!1);return}await pe(m.connectPort),await g(266240,t.bl,"\u5F15\u5BFC\u7A0B\u5E8F");const o=[];for(let a=256;a<4096;a++)t.calendar[a]>=0&&(console.log(a),o.push({...t.rom[t.calendar[a]],start:262144+a*64,end:262144+(a+Math.ceil(t.rom[t.calendar[a]].binaryFile.length/64))*64-1}),a+=Math.ceil(t.rom[t.calendar[a]].binaryFile.length/64)-1);await g(262144,new Uint8Array([o.length]),"\u56FA\u4EF6\u6570\u91CF");const n=new Uint8Array(8);n.set(N(t.blName.split(".")[0])),await g(262152,n,"\u5F15\u5BFC\u7A0B\u5E8F\u7248\u672C");const i=[];o.map(a=>{const _=new Uint8Array(16),y=new Uint8Array(4),A=new Uint8Array(4);_.set(N(a.binaryName.replace(/[^\x00-\xff]/g,""))),y.set(D(a.start.toString(16))),A.set(D(a.end.toString(16))),i.push(..._,...y,...A,...new Uint8Array(8))}),await g(262176,i,"\u56FA\u4EF6\u5143\u6570\u636E");for(let a=0;a<o.length;a++)await g(o[a].start,o[a].binaryFile,o[a].binaryName+" \u56FA\u4EF6\u6587\u4EF6");await me(m.connectPort),t.status=t.status+"\u5199\u5165\u5B8C\u6210<br/>",w(!1)},L=()=>{const e=document.createElement("input");e.type="file",e.multiple=!0,e.onchange=async()=>{if(e.files)for(let o=0;o<e.files.length;o++){const n=new Blob([e.files[o]],{type:"application/octet-stream"}),i=new Uint8Array(await n.arrayBuffer()),r={binaryFile:_e(i),binaryName:e.files[o].name.replace(/[^\x00-\xff]/g,""),color:R()};t.rom.push(r)}},e.click()},O=(e,o)=>{if(!(o<256)&&!(o+Math.ceil(t.rom[t.nowDrag].binaryFile.length/64)>4096)&&e!=2){for(let n=o;n<o+Math.ceil(t.rom[t.nowDrag].binaryFile.length/64);n+=1)v(n);for(let n=o;n<o+Math.ceil(t.rom[t.nowDrag].binaryFile.length/64);n+=1)t.calendar[n]=t.nowDrag;console.log((o*64+262144).toString(16)),console.log((Math.ceil(t.rom[t.nowDrag].binaryFile.length/64)*64+(o*64+262144)-1).toString(16))}},R=()=>{for(var e="0123456789ABCDEF",o="#",n=0;n<6;n++)o+=e[Math.floor(Math.random()*16)];return o},v=e=>{if(e>4095||e<256)return;let o=0;t.calendar[e]!=-1&&(o=1,t.calendar[e]=-1),o&&(t.calendar[e-1]!=-1&&v(e-1),t.calendar[e+1]!=-1&&v(e+1))},C=e=>{if(e>4095||e<256)return;let o=-99;t.calendar[e]!=-1&&(o=t.calendar[e],t.calendar[e]=-1),t.calendar[e-1]===o&&C(e-1),t.calendar[e+1]===o&&C(e+1)},k=e=>{e>4095||e<256||(t.calendar[e]=-1,k(e+1))},T=e=>{t.rom[e].binaryName=t.rom[e].binaryName.replace(/[^\x00-\xff]/g,"")};return(e,o)=>{const n=G,i=fe,r=oe,a=ae,_=ne,y=re,A=se,V=W,z=he,H=be,K=Fe,j=Z;return h(),E("div",we,[u(n,{items:[e.$t("menu.list"),e.$t("bl")]},null,8,["items"]),u(j,{class:"general-card",loading:te(U)},{title:l(()=>[d("div",ye,[c(" \u26A0\uFF1A\u5B9E\u9A8C\u6027\u529F\u80FD \u4F7F\u7528\u53EF\u80FD\u4F1A\u635F\u574F\u624B\u53F0 "),d("span",Ae,[c("\u3010\u4F7F\u7528\u8BF4\u660E\uFF1A"),u(i,{theme:"primary",href:"https://github.com/losehu/uv-k5-bootloader-custom/releases",target:"_blank"},{default:l(()=>[c("https://github.com/losehu/uv-k5-bootloader-custom/releases")]),_:1}),c("\u3011")])]),c(" "+b(e.$t("bl"))+" "+b(e.$t("global.onStart")),1)]),default:l(()=>[u(A,{style:{"margin-bottom":"16px"}},{default:l(()=>[u(y,{span:12},{default:l(()=>[u(_,{style:{width:"130%"}},{default:l(()=>[u(a,{onClick:P},{icon:l(()=>[u(r)]),default:l(()=>[c(" "+b(e.$t("cps.onDeviceWrite")),1)]),_:1}),c(" \uFF08\u56FA\u4EF6\u540D\u79F0\u4EC5\u652F\u6301\u82F1\u6587\uFF09 ")]),_:1})]),_:1})]),_:1}),d("div",Ee,[ve,d("div",null,[c(b(t.showAdd)+" ",1),u(V,{size:"small",variant:"outline",onClick:o[0]||(o[0]=s=>k(256))},{default:l(()=>[c("\u6E05\u7A7A")]),_:1})])]),d("div",Ce,[d("div",ke,[(h(!0),E(x,null,B(t.calendar,(s,p)=>(h(),E("div",{onClick:f=>C(p),ondragover:f=>{$(p),f.preventDefault()},ondrop:()=>{O(s,p)},title:s==-2?"\u5F15\u5BFC\u7A0B\u5E8F\u5360\u7528\u533A":s!=-1?t.rom[s].binaryName:(p*64+262144).toString(16).toUpperCase()+" - "+(p*64+262144+63).toString(16).toUpperCase(),style:S(s==-1?"background-color: white; border: 1px solid #ddd; height: 10px;":s==-2?"background-color: #373737; border: 1px solid #ddd; height: 10px;":"background-color: "+t.rom[s].color+"; border: 1px solid #ddd; height: 10px;"),key:p}," \xA0 ",12,xe))),128))])]),u(a,{style:{"margin-bottom":"10px"},onClick:L},{default:l(()=>[c(b(t.binaryFile?t.binaryName:e.$t("tool.selectFirmware")),1)]),_:1}),c("\uFF08\u9009\u62E9\u56FA\u4EF6\u540E\u5C06\u56FA\u4EF6\u5361\u7247\u62D6\u62FD\u5230\u4E0A\u65B9 EEPROM\uFF09 "),Be,u(K,{"break-line":""},{default:l(()=>[(h(!0),E(x,null,B(t.rom,(s,p)=>(h(),ee(H,{draggable:"true",ondragstart:()=>{t.nowDrag=p},title:s.binaryName,bordered:!0,"hover-shadow":"",style:{width:"400px"}},{actions:l(()=>[d("div",{style:S("width: 10px; height: 10px; background-color: "+s.color+";")},null,4)]),default:l(()=>[u(z,{modelValue:s.binaryName,"onUpdate:modelValue":f=>s.binaryName=f,onChange:f=>T(p),"show-limit-number":"",maxlength:13},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["ondragstart","title"]))),256))]),_:1})]),_:1},8,["loading"]),d("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px","margin-top":"10px"},innerHTML:t.status},null,8,Se)])}}});const Je=q(De,[["__scopeId","data-v-b346bd1e"]]);export{Je as default};
