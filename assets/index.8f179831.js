import{e as K,_ as G}from"./index.6fba5e05.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css              *//* empty css               */import{d as Q,r as X,b0 as q,C as s,D as b,aI as r,aH as o,aM as m,u as A,aN as C,aK as I,aJ as V,aE as g,a6 as W,aX as Y,bb as Z,bC as ee,bF as te,b6 as ae,bG as oe,bH as ne,aU as ue,aV as re,b9 as le,bI as de,bJ as se,bE as ie}from"./arco.a5a5eeda.js";import{u as pe}from"./loading.32afe0d0.js";import{e as P,a as v,u as R,b as me,h as N,s as fe,f as k,g as ce}from"./serial.3518333f.js";import"./chart.afd45e2e.js";import"./vue.bbd9d311.js";const xe={class:"container"},we={name:"SearchTable"},Se=Q({...we,setup(_e){const c=K(),{loading:z,setLoading:F}=pe(!0),l={bandwidthOption:{0:"25KHz",1:"12.5KHz"},modeOption:{0:"FM",1:"AM",2:"USB"},powerOption:{0:"\u4F4E",1:"\u4E2D",2:"\u9AD8"},toneOption:{1:"\u4E9A\u97F3\u9891",2:"\u6570\u5B57\u4E9A\u97F3",3:"\u53CD\u5411\u6570\u5B57\u4E9A\u97F3"},CTCSSOption:[67,69.3,71.9,74.4,77,79.7,82.5,85.4,88.5,91.5,94.8,97.4,100,103.5,107.2,110.9,114.8,118.8,123,127.3,131.8,136.5,141.3,146.2,151.4,156.7,159.8,162.2,165.5,167.9,171.3,173.8,177.3,179.9,183.5,186.2,189.9,192.8,196.6,199.5,203.5,206.5,210.7,218.1,225.7,229.1,233.6,241.8,250.3,254.1],DCSOption:[23,25,26,31,32,36,43,47,51,53,54,65,71,72,73,74,114,115,116,122,125,131,132,134,143,145,152,155,156,162,165,172,174,205,212,223,225,226,243,244,245,246,251,252,255,261,263,265,266,271,274,306,311,315,325,331,332,343,346,351,356,364,365,371,411,412,413,423,431,432,445,446,452,454,455,462,464,465,466,503,506,516,523,526,532,546,565,606,612,624,627,631,632,654,662,664,703,712,723,731,732,734,743,754],stepOption:[2.5,5,6.25,10,12.5,25,8.33,.01,.05,.1,.25,.5,1,1.25,9,15,20,30,50,100,125,200,250,500],scrambOption:["1","2","3","4","5","6","7","8","9","10"],pttidOption:["\u4E0A\u7EBF\u7801","\u4E0B\u7EBF\u7801","\u4E0A\u7EBF+\u4E0B\u7EBF\u7801","Quindar\u7801"]},w=X({renderData:[],pageSize:15,nowPage:1});setTimeout(()=>{w.renderData=Array.from({length:200}).map(x=>({})),F(!1)},1);const M=[{title:"#",dataIndex:"index",slotName:"index",width:70},{title:"\u4FE1\u9053\u540D\u79F0",dataIndex:"name",slotName:"name",width:200},{title:"\u5E26\u5BBD",dataIndex:"bandwidth",slotName:"bandwidth",width:150},{title:"\u63A5\u6536\u9891\u7387",dataIndex:"rx",slotName:"rx",width:150},{title:"\u53D1\u9001\u9891\u7387",dataIndex:"tx",slotName:"tx",width:150},{title:"\u53D1\u9001\u529F\u7387",dataIndex:"power",slotName:"power",width:150},{title:"\u63A5\u6536\u4E9A\u97F3\u7C7B\u578B",dataIndex:"rxTone",slotName:"rxTone",width:150},{title:"\u63A5\u6536\u4E9A\u97F3\u9891\uFF08Hz\uFF09",dataIndex:"rxCTCSS",slotName:"rxCTCSS",width:150},{title:"\u63A5\u6536\u4E9A\u97F3\u6570\u7801",dataIndex:"rxDCS",slotName:"rxDCS",width:150},{title:"\u53D1\u9001\u4E9A\u97F3\u7C7B\u578B",dataIndex:"txTone",slotName:"txTone",width:150},{title:"\u53D1\u9001\u4E9A\u97F3\u9891\uFF08Hz\uFF09",dataIndex:"txCTCSS",slotName:"txCTCSS",width:150},{title:"\u53D1\u9001\u4E9A\u97F3\u6570\u7801",dataIndex:"txDCS",slotName:"txDCS",width:150},{title:"\u9891\u7387\u6B65\u8FDB",dataIndex:"step",slotName:"step",width:150},{title:"\u5012\u9891",dataIndex:"reverse",slotName:"reverse",width:150},{title:"\u52A0\u5BC6",dataIndex:"scramb",slotName:"scramb",width:150},{title:"\u7E41\u5FD9\u7981\u53D1",dataIndex:"busy",slotName:"busy",width:150},{title:"\u4FE1\u4EE4\u7801",dataIndex:"pttid",slotName:"pttid",width:150},{title:"\u4FE1\u9053\u6A21\u5F0F",dataIndex:"mode",slotName:"mode",width:150},{title:"DTMF\u89E3\u7801",dataIndex:"dtmf",slotName:"dtmf",width:150},{title:"\u626B\u63CF\u5217\u8868",dataIndex:"scanlist",slotName:"scanlist",width:150},{title:"\u64CD\u4F5C",dataIndex:"operate",slotName:"operate",width:150}],j=async()=>{var O,y,n,D;if(c.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await P(c.connectPort),F(!0);let x=new Uint8Array(3200);for(let d=0;d<3200;d+=128){const u=await v(c.connectPort,d,128,(O=c.configuration)==null?void 0:O.uart);x.set(u,d)}let S=new Uint8Array(192);for(let d=3424;d<3616;d+=64){const u=await v(c.connectPort,d,64,(y=c.configuration)==null?void 0:y.uart);S.set(u,d-3424)}let _=new Uint8Array(3200);for(let d=3920;d<7120;d+=128){const u=await v(c.connectPort,d,128,(n=c.configuration)==null?void 0:n.uart);_.set(u,d-3920)}const f=[];for(let d=0;d<3200;d+=16){const u=R(x.subarray(d,d+16)),p=R(S.subarray(d/16,d/16+1)),t={};t.rx=u.substr(24,8)!="ffffffff"?parseInt(u.substr(24,8),16)/1e5:void 0,t.rx&&p!="ff"?(console.info(u),console.info(p),t.offset=u.substr(16,8)!="00000000"?parseInt(u.substr(16,8),16)/1e5:void 0,t.txcodeflag=u.substr(9,1),t.txcodeflag=="1"&&(t.tx=t.rx+t.offset),t.txcodeflag=="2"&&(t.tx=t.rx-t.offset),t.txTone=parseInt(u.substr(10,1),16)>0?parseInt(u.substr(10,1),16).toString():void 0,t.rxTone=parseInt(u.substr(11,1),16)>0?parseInt(u.substr(11,1),16).toString():void 0,t.txTone=="1"&&(t.txCTCSS=l.CTCSSOption[parseInt(u.substr(12,2),16)]),(t.txTone=="2"||t.txTone=="3")&&(t.txDCS=l.DCSOption[parseInt(u.substr(12,2),16)]),t.rxTone=="1"&&(t.rxCTCSS=l.CTCSSOption[parseInt(u.substr(14,2),16)]),(t.rxTone=="2"||t.rxTone=="3")&&(t.rxDCS=l.DCSOption[parseInt(u.substr(14,2),16)]),t.step=l.stepOption[parseInt(u.substr(2,2),16)],t.scramb=parseInt(u.substr(0,2),16)>0?parseInt(u.substr(0,2),16).toString():void 0,t.power_reverse_busy_width=parseInt(u.substr(6,2),16),t.reverse=!!(t.power_reverse_busy_width>>0&1),t.bandwidth=(t.power_reverse_busy_width>>1&1).toString(),t.power=(t.power_reverse_busy_width>>2&3).toString(),t.busy=!!(t.power_reverse_busy_width>>4&1),t.pttid_dtmf=parseInt(u.substr(4,2),16),t.pttid=l.pttidOption[(t.pttid_dtmf>>1)-1],t.dtmf=!!(t.pttid_dtmf>>0&1),t.mode=parseInt(u.substr(8,1),16).toString(),t.name=me(_.subarray(d,d+16),(D=c.configuration)==null?void 0:D.charset),t.scanlist=[],parseInt(p.substr(0,1),16)&8&&t.scanlist.push("I"),parseInt(p.substr(0,1),16)&4&&t.scanlist.push("II")):t.rx=void 0,f.push(t)}w.renderData=f,F(!1)},H=async()=>{var O,y;if(c.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await P(c.connectPort),F(!0);let x=new Uint8Array(3200),S=new Uint8Array(200),_=new Uint8Array(3200),f=0;w.renderData.map(n=>{var D,d,u,p;if(n.rx){let t="";t+=parseInt(n.scramb)>0?parseInt(n.scramb).toString(16).padStart(2,"0"):"00",t+=l.stepOption.indexOf(n.step)>=0?l.stepOption.indexOf(n.step).toString(16).padStart(2,"0"):"00";let E=l.pttidOption.indexOf(n.pttid)+1<<1;E+=n.dtmf?1:0,t+=E.toString(16).padStart(2,"0");let T=n.busy?1<<4:0;switch(T+=n.power<<2,T+=n.bandwidth<<1,T+=n.reverse?1:0,t+=T.toString(16).padStart(2,"0"),t+=n.mode?n.mode.toString(16):"0",n.tx>0&&n.tx>n.rx?t+="1":n.tx>0&&n.tx<n.rx?t+="2":t+="0",t+=parseInt(n.txTone)>0?n.txTone.toString(16):"0",t+=parseInt(n.rxTone)>0?n.rxTone.toString(16):"0",n.txTone){case"1":t+=l.CTCSSOption.indexOf(n.txCTCSS).toString(16).padStart(2,"0");break;case"2":case"3":t+=l.DCSOption.indexOf(n.txDCS).toString(16).padStart(2,"0");break;default:t+="00"}switch(n.rxTone){case"1":t+=l.CTCSSOption.indexOf(n.rxCTCSS).toString(16).padStart(2,"0");break;case"2":case"3":t+=l.DCSOption.indexOf(n.rxDCS).toString(16).padStart(2,"0");break;default:t+="00"}const B=n.tx&&n.rx?Math.abs(parseInt((n.tx*1e5).toFixed(0))-parseInt((n.rx*1e5).toFixed(0))):NaN;t+=Number.isNaN(B)?"00000000":B.toString(16).padStart(8,"0"),t+=parseInt((n.rx*1e5).toFixed(0)).toString(16).padStart(8,"0"),console.log(t),x.set(N(t),f);let U=0;((D=n.scanlist)==null?void 0:D.indexOf("I"))>=0&&(U+=8),((d=n.scanlist)==null?void 0:d.indexOf("II"))>=0&&(U+=4),console.log((U<<4)+0),S.set([(U<<4)+0],f>>4);const h=new Uint8Array(16);h.set(fe((u=n.name)!=null?u:"",(p=c.configuration)==null?void 0:p.charset).subarray(0,16),0),_.set(h,f)}else x.set(N("ffffffffffffffffffffffffffffffff"),f),S.set([255],f>>4),_.set(N("ffffffffffffffffffffffffffffffff"),f);f+=16});for(let n=0;n<3200;n+=128)await k(c.connectPort,n,x.slice(n,n+128),128,(O=c.configuration)==null?void 0:O.uart);await k(c.connectPort,3424,S,200);for(let n=3920;n<7120;n+=128)await k(c.connectPort,n,_.slice(n-3920,n-3920+128),128,(y=c.configuration)==null?void 0:y.uart);await ce(c.connectPort),F(!1)},L=async x=>{w.renderData[x]={}},J=()=>{const x=JSON.stringify(w.renderData),S=new Blob([x],{type:"application/octet-stream"}),_=URL.createObjectURL(S),f=document.createElement("a");f.download="channel.json",f.href=_,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(_)},$=()=>{const x=document.createElement("input");x.type="file",x.onchange=async()=>{const _=await new Blob([x.files[0]],{type:"application/octet-stream"}).text();w.renderData=JSON.parse(_)},x.click()};return(x,S)=>{const _=q("Breadcrumb"),f=W,O=Y,y=Z,n=ee,D=te,d=ae,u=oe,p=ne,t=ue,E=re,T=le,B=de,U=se,h=ie;return s(),b("div",xe,[r(_,{items:["\u5199\u9891","\u4FE1\u9053\u7BA1\u7406"]}),r(h,{class:"general-card",title:"\u4FE1\u9053\u7BA1\u7406"},{default:o(()=>[r(D,{style:{"margin-bottom":"16px"}},{default:o(()=>[r(n,{span:12},{default:o(()=>[r(y,null,{default:o(()=>[r(O,{type:"primary",onClick:j},{icon:o(()=>[r(f)]),default:o(()=>[m(" \u4ECE\u8BBE\u5907\u8BFB\u53D6 ")]),_:1}),r(O,{onClick:H},{icon:o(()=>[r(f)]),default:o(()=>[m(" \u5199\u5165\u8BBE\u5907 ")]),_:1})]),_:1})]),_:1}),r(n,{span:12,style:{"text-align":"right"}},{default:o(()=>[r(y,null,{default:o(()=>[r(O,{type:"primary",onClick:J},{default:o(()=>[m(" \u4FDD\u5B58 ")]),_:1}),r(O,{onClick:$},{default:o(()=>[m(" \u52A0\u8F7D ")]),_:1})]),_:1})]),_:1})]),_:1}),r(U,{loading:A(z),columns:M,data:w.renderData,style:{"margin-top":"20px"},pagination:{pageSize:w.pageSize,current:w.nowPage,showPageSize:!0,pageSizeOptions:[15,30,50]},onPageChange:S[0]||(S[0]=a=>{A(F)(!0),w.nowPage=a,A(F)(!1)}),onPageSizeChange:S[1]||(S[1]=a=>{A(F)(!0),w.pageSize=a,A(F)(!1)})},{index:o(({record:a,rowIndex:i})=>[m(C((w.nowPage-1)*w.pageSize+i+1),1)]),name:o(({record:a,rowIndex:i})=>[r(d,{modelValue:a.name,"onUpdate:modelValue":e=>a.name=e},null,8,["modelValue","onUpdate:modelValue"])]),bandwidth:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.bandwidth,"onUpdate:modelValue":e=>a.bandwidth=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(Object.keys(l.bandwidthOption),e=>(s(),g(u,{value:e},{default:o(()=>[m(C(l.bandwidthOption[e]),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),tx:o(({record:a,rowIndex:i})=>[r(t,{modelValue:a.tx,"onUpdate:modelValue":e=>a.tx=e,precision:5},null,8,["modelValue","onUpdate:modelValue"])]),rx:o(({record:a,rowIndex:i})=>[r(t,{modelValue:a.rx,"onUpdate:modelValue":e=>a.rx=e,precision:5},null,8,["modelValue","onUpdate:modelValue"])]),power:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.power,"onUpdate:modelValue":e=>a.power=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(Object.keys(l.powerOption),e=>(s(),g(u,{value:e},{default:o(()=>[m(C(l.powerOption[e]),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),rxTone:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.rxTone,"onUpdate:modelValue":e=>a.rxTone=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(Object.keys(l.toneOption),e=>(s(),g(u,{value:e},{default:o(()=>[m(C(l.toneOption[e]),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),rxCTCSS:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.rxCTCSS,"onUpdate:modelValue":e=>a.rxCTCSS=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(l.CTCSSOption,e=>(s(),g(u,{value:e},{default:o(()=>[m(C(e.toFixed(1)),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),rxDCS:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.rxDCS,"onUpdate:modelValue":e=>a.rxDCS=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(l.DCSOption,e=>(s(),g(u,{value:e},{default:o(()=>[m(C("0"+e),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),txTone:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.txTone,"onUpdate:modelValue":e=>a.txTone=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(Object.keys(l.toneOption),e=>(s(),g(u,{value:e},{default:o(()=>[m(C(l.toneOption[e]),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),txCTCSS:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.txCTCSS,"onUpdate:modelValue":e=>a.txCTCSS=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(l.CTCSSOption,e=>(s(),g(u,{value:e},{default:o(()=>[m(C(e.toFixed(1)),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),txDCS:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.txDCS,"onUpdate:modelValue":e=>a.txDCS=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(l.DCSOption,e=>(s(),g(u,{value:e},{default:o(()=>[m(C("0"+e),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),step:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.step,"onUpdate:modelValue":e=>a.step=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(l.stepOption,e=>(s(),g(u,{value:e},{default:o(()=>[m(C(e.toFixed(1)),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),reverse:o(({record:a,rowIndex:i})=>[r(E,{modelValue:a.reverse,"onUpdate:modelValue":e=>a.reverse=e},null,8,["modelValue","onUpdate:modelValue"])]),scramb:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.scramb,"onUpdate:modelValue":e=>a.scramb=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(l.scrambOption,e=>(s(),g(u,null,{default:o(()=>[m(C(e),1)]),_:2},1024))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),busy:o(({record:a,rowIndex:i})=>[r(E,{modelValue:a.busy,"onUpdate:modelValue":e=>a.busy=e},null,8,["modelValue","onUpdate:modelValue"])]),pttid:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.pttid,"onUpdate:modelValue":e=>a.pttid=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(l.pttidOption,e=>(s(),g(u,null,{default:o(()=>[m(C(e),1)]),_:2},1024))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),mode:o(({record:a,rowIndex:i})=>[r(p,{modelValue:a.mode,"onUpdate:modelValue":e=>a.mode=e,"allow-clear":""},{default:o(()=>[(s(!0),b(I,null,V(Object.keys(l.modeOption),e=>(s(),g(u,{value:e},{default:o(()=>[m(C(l.modeOption[e]),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),dtmf:o(({record:a,rowIndex:i})=>[r(E,{modelValue:a.dtmf,"onUpdate:modelValue":e=>a.dtmf=e},null,8,["modelValue","onUpdate:modelValue"])]),scanlist:o(({record:a,rowIndex:i})=>[r(B,{modelValue:a.scanlist,"onUpdate:modelValue":e=>a.scanlist=e},{default:o(()=>[r(T,{value:"I"},{default:o(()=>[m("I")]),_:1}),r(T,{value:"II"},{default:o(()=>[m("II")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),operate:o(({record:a,rowIndex:i})=>[r(O,{onClick:e=>L((w.nowPage-1)*w.pageSize+i)},{default:o(()=>[m("\u6E05\u7A7A")]),_:2},1032,["onClick"])]),_:1},8,["loading","data","pagination"])]),_:1})])}}});const ve=G(Se,[["__scopeId","data-v-feb1f4b8"]]);export{ve as default};
