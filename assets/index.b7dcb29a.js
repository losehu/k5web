import{e as lt,q as ut,_ as it}from"./index.8830e9b3.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{d as ct,r as pt,o as dt,bp as _t,bU as mt,aU as ft,bB as gt,bN as bt,bC as yt,C as f,D as h,aI as r,aH as u,u as wt,aM as _,aN as S,aK as D,aJ as A,aE as C,G as Ft,n as W,ba as ht,bX as St,aZ as xt,b8 as Dt,bD as At,bM as Ct}from"./arco.f883ed21.js";import{e as $,s as Bt,f as p,h as i,g as Et}from"./serial.b70f48dc.js";import{u as vt}from"./loading.50b9fdaf.js";import"./chart.977fd17b.js";import"./vue.170d1f1d.js";const Tt={class:"container"},Vt=["innerHTML"],Pt={name:"Sat"},It=ct({...Pt,setup(Ut){const{loading:tt,setLoading:g}=vt(!0),a=lt(),t=pt({status:"\u70B9\u51FB\u5199\u5165\u6309\u94AE\u5199\u5165\u536B\u661F\u6570\u636E\u5230\u8BBE\u5907<br/><br/>",sat:"",satData:[],lng:0,lat:0,alt:0,tx:0,rx:0,txTone:0,rxTone:0,CTCSSOption:[67,69.3,71.9,74.4,77,79.7,82.5,85.4,88.5,91.5,94.8,97.4,100,103.5,107.2,110.9,114.8,118.8,123,127.3,131.8,136.5,141.3,146.2,151.4,156.7,159.8,162.2,165.5,167.9,171.3,173.8,177.3,179.9,183.5,186.2,189.9,192.8,196.6,199.5,203.5,206.5,210.7,218.1,225.7,229.1,233.6,241.8,250.3,254.1],pass:void 0,passOption:[],dt:"",timer:void 0});dt(()=>{t.timer=setInterval(()=>{t.dt=new Date().toLocaleString("zh-CN",{timeZone:"Asia/Shanghai"})},1e3)}),_t(()=>{try{clearInterval(t.timer)}catch{}});const at=async()=>{var e;const l=new Date,n=[...i(parseInt(l.getFullYear().toString().substring(2,4)).toString(16)),...i((l.getMonth()+1).toString(16)),...i(l.getDate().toString(16)),...i(l.getHours().toString(16)),...i(l.getMinutes().toString(16)),...i(l.getSeconds().toString(16))];await p(a.connectPort,11200,new Uint8Array(n),6,(e=a.configuration)==null?void 0:e.uart)},et=async l=>{const n=t.satData.find(e=>e.name==l);n&&n.path&&(t.status+="<br/>\u536B\u661F\u53C2\u6570\uFF1A<br/>",n.path.map(e=>{t.status+=e+"<br/>"})),W(()=>{const e=document==null?void 0:document.getElementById("statusArea");e&&(e.scrollTop=e==null?void 0:e.scrollHeight)})};(async()=>{g(!0);const n=(await(await fetch("https://celestrak.org/NORAD/elements/amateur.txt")).text()).split(/\r?\n/),e=[];let s={};for(let c=0;c<n.length;c++)Number.isNaN(parseInt(n[c].substring(0,1)))?(s.name&&s.name!=""&&(e.push(s),s={}),s.name=n[c]):(s.path||(s.path=[]),s.path.push(n[c]));t.satData=e,g(!1)})();const P=async()=>{g(!0),navigator.geolocation.getCurrentPosition(l=>{l.coords&&(t.lat=l.coords.latitude,t.lng=l.coords.longitude,l.coords.altitude&&(t.alt=l.coords.altitude))}),g(!1)};P();const nt=async(l=0,n)=>{var e;await $(a.connectPort);for(let s=l;s<n.length+l;s+=128)await p(a.connectPort,s,n.slice(s-l,s-l+128),128,(e=a.configuration)==null?void 0:e.uart),t.status=t.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((s-l)/n.length*100).toFixed(1)+"%<br/>",W(()=>{const c=document==null?void 0:document.getElementById("statusArea");c&&(c.scrollTop=c==null?void 0:c.scrollHeight)});t.status=t.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A100.0%<br/>"},ot=async()=>{if(!t.sat){alert("\u8BF7\u9009\u62E9\u536B\u661F\uFF01");return}g(!0);const l=await(await fetch("https://k5.vicicode.com/api/pass",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({sat:t.sat,sat_line_1:t.satData.find(e=>e.name==t.sat).path[0],sat_line_2:t.satData.find(e=>e.name==t.sat).path[1],lat:t.lat,lng:t.lng,alt:t.alt})})).json(),n=[];for(let e=0;e<l.pass_times.length;e++)try{let s;Date.parse(l.departure_times[e])-Date.parse(l.pass_times[e])>0?s=[l.pass_times[e],l.departure_times[e]]:s=[l.pass_times[e],l.departure_times[e+1]],n.push(s)}catch{}n.length>0?t.pass=n[0][0]+"|"+n[0][1]:t.pass=void 0,t.passOption=n,g(!1)},st=async()=>{var U,k,O,N,L,M,H,j,R,J,z,Z,q,G,K,X,Y;if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}if(!t.pass){alert("\u8BF7\u9009\u62E9\u8FC7\u5883\u65F6\u95F4\uFF01");return}g(!0);const l=await(await fetch("https://k5.vicicode.com/api/doppler",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({sat:t.sat,sat_line_1:t.satData.find(y=>y.name==t.sat).path[0],sat_line_2:t.satData.find(y=>y.name==t.sat).path[1],lat:t.lat,lng:t.lng,alt:t.alt,tx:t.tx,rx:t.rx,pass_time:t.pass.split("|")[0],departure_time:t.pass.split("|")[1]})})).json(),n=t.sat,e=t.pass.split("|")[0],s=e.split("-")[0].substring(2,4),c=e.split("-")[1],w=e.split("-")[2].split(" ")[0],b=e.split(" ")[1].split(":")[0],F=e.split(" ")[1].split(":")[1],B=e.split(" ")[1].split(":")[2],m=t.pass.split("|")[1],E=m.split("-")[0].substring(2,4),v=m.split("-")[1],T=m.split("-")[2].split(" ")[0],V=m.split(" ")[1].split(":")[0],o=m.split(" ")[1].split(":")[1],rt=m.split(" ")[1].split(":")[2];await $(a.connectPort);let d=new Uint8Array(10);d.set(Bt(n.trim()).subarray(0,9)),await p(a.connectPort,11168,d,10,(U=a.configuration)==null?void 0:U.uart),await p(a.connectPort,11178,i(parseInt(s).toString(16)).subarray(0,1),1,(k=a.configuration)==null?void 0:k.uart),await p(a.connectPort,11179,i(parseInt(c).toString(16)).subarray(0,1),1,(O=a.configuration)==null?void 0:O.uart),await p(a.connectPort,11180,i(parseInt(w).toString(16)).subarray(0,1),1,(N=a.configuration)==null?void 0:N.uart),await p(a.connectPort,11181,i(parseInt(b).toString(16)).subarray(0,1),1,(L=a.configuration)==null?void 0:L.uart),await p(a.connectPort,11182,i(parseInt(F).toString(16)).subarray(0,1),1,(M=a.configuration)==null?void 0:M.uart),await p(a.connectPort,11183,i(parseInt(B).toString(16)).subarray(0,1),1,(H=a.configuration)==null?void 0:H.uart),await p(a.connectPort,11184,i(parseInt(E).toString(16)).subarray(0,1),1,(j=a.configuration)==null?void 0:j.uart),await p(a.connectPort,11185,i(parseInt(v).toString(16)).subarray(0,1),1,(R=a.configuration)==null?void 0:R.uart),await p(a.connectPort,11186,i(parseInt(T).toString(16)).subarray(0,1),1,(J=a.configuration)==null?void 0:J.uart),await p(a.connectPort,11187,i(parseInt(V).toString(16)).subarray(0,1),1,(z=a.configuration)==null?void 0:z.uart),await p(a.connectPort,11188,i(parseInt(o).toString(16)).subarray(0,1),1,(Z=a.configuration)==null?void 0:Z.uart),await p(a.connectPort,11189,i(parseInt(rt).toString(16)).subarray(0,1),1,(q=a.configuration)==null?void 0:q.uart),d=new Uint8Array(2),d.set(i(((Date.parse(m)-Date.parse(e))/1e3).toString(16)).subarray(0,2)),await p(a.connectPort,11190,d,2,(G=a.configuration)==null?void 0:G.uart),d=new Uint8Array(2),t.txTone&&t.txTone>0&&d.set(i(t.txTone.toString(16)).subarray(0,2)),await p(a.connectPort,11192,d,2,(K=a.configuration)==null?void 0:K.uart),d=new Uint8Array(2),t.rxTone&&t.rxTone>0&&d.set(i(t.rxTone.toString(16)).subarray(0,2)),await p(a.connectPort,11194,d,2,(X=a.configuration)==null?void 0:X.uart),d=new Uint8Array(4),d.set(i(((Date.parse(e)-Date.parse("2000-01-01 00:00:00"))/1e3).toString(16)).subarray(0,4)),await p(a.connectPort,11196,d,4,(Y=a.configuration)==null?void 0:Y.uart);const I=[];l.shift_array.filter((y,x)=>x%2===0).map(y=>{const x=new Uint8Array(4),Q=new Uint8Array(4);x.set(i(parseInt(((t.tx*1e6+y[0])/10).toFixed(0)).toString(16))),Q.set(i(parseInt(((t.rx*1e6+y[1])/10).toFixed(0)).toString(16))),I.push(...x,...Q)}),d=new Uint8Array(7680),d.set(new Uint8Array(I).subarray(0,7680)),await nt(123392,d),await at(),await Et(a.connectPort),g(!1)};return(l,n)=>{const e=ut,s=ht,c=St,w=mt,b=ft,F=xt,B=Dt,m=gt,E=bt,v=yt,T=At,V=Ct;return f(),h("div",Tt,[r(e,{items:["\u5C0F\u5DE5\u5177","\u536B\u661F\u5199\u5165"]}),r(V,{gutter:20,align:"stretch"},{default:u(()=>[r(T,{span:24},{default:u(()=>[r(v,{class:"general-card",title:"\u536B\u661F\u5199\u5165"},{default:u(()=>[r(E,{loading:wt(tt),style:{width:"100%"},tip:"\u6B63\u5728\u5904\u7406 ..."},{default:u(()=>[r(s,{"label-col-style":{width:"25%"},field:"dt",label:"\u6D4F\u89C8\u5668\u65F6\u95F4"},{default:u(()=>[_(S(t.dt),1)]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"sat",label:"\u9009\u62E9\u536B\u661F"},{default:u(()=>[r(w,{modelValue:t.sat,"onUpdate:modelValue":n[0]||(n[0]=o=>t.sat=o),onChange:et,placeholder:"\u9009\u62E9\u536B\u661F ...","allow-search":"","allow-clear":""},{default:u(()=>[(f(!0),h(D,null,A(t.satData,o=>(f(),C(c,{key:o.name,value:o.name},{default:u(()=>[_(S(o.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"lng",label:"\u53F0\u7AD9\u7ECF\u5EA6"},{default:u(()=>[r(b,{precision:6,modelValue:t.lng,"onUpdate:modelValue":n[1]||(n[1]=o=>t.lng=o)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"lat",label:"\u53F0\u7AD9\u7EAC\u5EA6"},{default:u(()=>[r(b,{precision:6,modelValue:t.lat,"onUpdate:modelValue":n[2]||(n[2]=o=>t.lat=o)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"alt",label:"\u53F0\u7AD9\u6D77\u62D4"},{default:u(()=>[r(b,{precision:0,modelValue:t.alt,"onUpdate:modelValue":n[3]||(n[3]=o=>t.alt=o)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},label:""},{default:u(()=>[r(B,null,{default:u(()=>[r(F,{onClick:P},{default:u(()=>[_("\u6D4F\u89C8\u5668\u83B7\u53D6\u7ECF\u7EAC\u5EA6")]),_:1}),r(F,{onClick:ot},{default:u(()=>[_("\u83B7\u53D6\u536B\u661F\u8FC7\u5883\u65F6\u95F4")]),_:1})]),_:1})]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"pass",label:"\u9009\u62E9\u8FC7\u5883\u65F6\u95F4"},{default:u(()=>[r(w,{modelValue:t.pass,"onUpdate:modelValue":n[4]||(n[4]=o=>t.pass=o),"allow-search":"","allow-clear":""},{default:u(()=>[(f(!0),h(D,null,A(t.passOption,o=>(f(),C(c,{key:o[0]+"|"+o[1],value:o[0]+"|"+o[1]},{default:u(()=>[_(S(o[0]+" - "+o[1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"tx",label:"\u4E0A\u884C\u9891\u7387"},{default:u(()=>[r(b,{precision:5,modelValue:t.tx,"onUpdate:modelValue":n[5]||(n[5]=o=>t.tx=o)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"txTone",label:"\u4E0A\u884C\u4E9A\u97F3"},{default:u(()=>[r(w,{modelValue:t.txTone,"onUpdate:modelValue":n[6]||(n[6]=o=>t.txTone=o),"allow-search":"","allow-clear":""},{default:u(()=>[r(c,{value:0},{default:u(()=>[_("\u5173\u95ED")]),_:1}),(f(!0),h(D,null,A(t.CTCSSOption,o=>(f(),C(c,{key:o,value:o},{default:u(()=>[_(S(o.toFixed(1)),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"rx",label:"\u4E0B\u884C\u9891\u7387"},{default:u(()=>[r(b,{precision:5,modelValue:t.rx,"onUpdate:modelValue":n[7]||(n[7]=o=>t.rx=o)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"rxTone",label:"\u4E0B\u884C\u4E9A\u97F3"},{default:u(()=>[r(w,{modelValue:t.rxTone,"onUpdate:modelValue":n[8]||(n[8]=o=>t.rxTone=o),"allow-search":"","allow-clear":""},{default:u(()=>[r(c,{value:0},{default:u(()=>[_("\u5173\u95ED")]),_:1}),(f(!0),h(D,null,A(t.CTCSSOption,o=>(f(),C(c,{key:o,value:o},{default:u(()=>[_(S(o.toFixed(1)),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},label:""},{default:u(()=>[r(F,{onClick:st},{default:u(()=>[_("\u5199\u5165\u6570\u636E")]),_:1})]),_:1}),r(m),Ft("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:t.status},null,8,Vt)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])}}});const Qt=it(It,[["__scopeId","data-v-b0beb075"]]);export{Qt as default};
