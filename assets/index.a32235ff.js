import{d as G,r as j,bI as q,C as L,aE as Z,aH as n,aI as a,aM as o,aN as l,u as d,bg as X,bh as Y,G as r,bq as tt,bJ as ot,bG as at,a$ as nt,ba as et,bK as ut,be as rt,bf as ct,D as it}from"./arco.7f845a67.js";import{v as st,m as lt,_ as K}from"./index.c5405c09.js";/* empty css               *//* empty css              *//* empty css               *//* empty css              *//* empty css               *//* empty css              */import{e as _t,a as i,b as s}from"./serial.c741fbda.js";import{L as pt}from"./index.f4ca8c3f.js";import"./chart.3e6cb2f1.js";import"./vue.0bef8fc5.js";import"./useConfig.b5d89e07.js";import"./useDisabled.5ccd65e2.js";const dt=""+new URL("../gy.png",import.meta.url).href,m=f=>(rt("data-v-6821f1f8"),f=f(),ct(),f),mt=m(()=>r("br",null,null,-1)),ft=m(()=>r("br",null,null,-1)),ht=m(()=>r("br",null,null,-1)),gt=m(()=>r("br",null,null,-1)),wt=m(()=>r("br",null,null,-1)),Ft=m(()=>r("br",null,null,-1)),bt=m(()=>r("img",{class:"tencent",style:{"margin-bottom":"10px"},width:"200px",src:dt},null,-1)),kt=G({__name:"banner",setup(f){const{t:c}=st.exports.useI18n(),t=lt(),y=j({eepromSize:c("workplace.clickCheck")}),O=async()=>{var h,F,b,k,B,p,_,g,w,C,P,A,M,D,x,$,I,z,V,T,N;let e=c("workplace.unk");const E=[Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256)];await _t(t.connectPort);const u=new Uint8Array(E);if(((h=t.configuration)==null?void 0:h.uart)=="official"){const S=await i(t.connectPort,0,8,(F=t.configuration)==null?void 0:F.uart);await s(t.connectPort,0,u,8,(b=t.configuration)==null?void 0:b.uart);const v=await i(t.connectPort,0,8,(k=t.configuration)==null?void 0:k.uart);u.toString()==v.toString()&&(e=c("global.8kb")),await s(t.connectPort,0,S,8,(B=t.configuration)==null?void 0:B.uart)}else{const S=await i(t.connectPort,0,8,(p=t.configuration)==null?void 0:p.uart);await s(t.connectPort,0,u,8,(_=t.configuration)==null?void 0:_.uart);const v=await i(t.connectPort,0,8,(g=t.configuration)==null?void 0:g.uart);u.toString()==v.toString()&&(e=c("global.8kb")),await s(t.connectPort,0,S,8,(w=t.configuration)==null?void 0:w.uart);const Q=await i(t.connectPort,131064,8,(C=t.configuration)==null?void 0:C.uart);await s(t.connectPort,131064,u,8,(P=t.configuration)==null?void 0:P.uart);const U=await i(t.connectPort,131064,8,(A=t.configuration)==null?void 0:A.uart);u.toString()==U.toString()&&(e=c("global.128kb")),await s(t.connectPort,131064,Q,8,(M=t.configuration)==null?void 0:M.uart);const H=await i(t.connectPort,262136,8,(D=t.configuration)==null?void 0:D.uart);await s(t.connectPort,262136,u,8,(x=t.configuration)==null?void 0:x.uart);const J=await i(t.connectPort,262136,8,($=t.configuration)==null?void 0:$.uart);u.toString()==J.toString()&&(e=c("global.256kb")),await s(t.connectPort,262136,H,8,(I=t.configuration)==null?void 0:I.uart);const R=await i(t.connectPort,524280,8,(z=t.configuration)==null?void 0:z.uart);await s(t.connectPort,524280,u,8,(V=t.configuration)==null?void 0:V.uart);const W=await i(t.connectPort,524280,8,(T=t.configuration)==null?void 0:T.uart);u.toString()==W.toString()&&(e=c("global.512kb")),await s(t.connectPort,524280,R,8,(N=t.configuration)==null?void 0:N.uart)}y.eepromSize=e};return(e,E)=>{const u=tt,h=ot,F=at,b=nt,k=q,B=et,p=pt,_=ut;return L(),Z(h,{class:"banner"},{default:n(()=>[a(h,null,{default:n(()=>[a(u,{heading:5,style:{"margin-top":"0"}},{default:n(()=>[o(l(d(t).connectState?e.$t("workplace.welcomeSuc"):e.$t("workplace.welcome")),1)]),_:1})]),_:1}),a(F,{class:"panel-border"}),a(B,null,{default:n(()=>[X(a(k,{style:{marginTop:"2em",marginBottom:"2em"},title:e.$t("workplace.info")},{default:n(()=>{var g,w;return[o(l(e.$t("workplace.current"))+l(d(t).firmwareVersion)+" ",1),mt,o(" "+l(e.$t("workplace.writeconfig"))+l((g=d(t).configuration)==null?void 0:g.name)+" ",1),ft,o(" "+l(e.$t("workplace.eepromSize"))+l(y.eepromSize)+" "+l(y.eepromSize!=d(c)("workplace.clickCheck")&&((w=d(t).configuration)==null?void 0:w.uart)=="official"?d(c)("workplace.clickNotice"):"")+" ",1),a(b,{size:"mini",type:"primary",onClick:O},{default:n(()=>[o(l(e.$t("workplace.checkIt")),1)]),_:1})]}),_:1},8,["title"]),[[Y,d(t).connectState]])]),_:1}),r("div",null,[a(u,{heading:5},{default:n(()=>[o("\u8BF4\u660E\uFF1A")]),_:1}),a(_,null,{default:n(()=>[o("\u25C6 \u4F7F\u7528\u5E94\u7B2C\u4E00\u65F6\u95F4"),a(p,{theme:"primary",href:"/#/tool/backup"},{default:n(()=>[o("\u5907\u4EFD")]),_:1}),o("\u914D\u7F6E\u53CA\u6821\u51C6\u6570\u636E\u3002")]),_:1}),ht,a(_,null,{default:n(()=>[o("\u25C6 \u9664\u201C\u56FA\u4EF6\u5347\u7EA7\u201D\u529F\u80FD\u624B\u53F0\u5E94\u5904\u4E8E\u5237\u673A\u6A21\u5F0F\u70B9\u51FB\u66F4\u65B0\u6309\u94AE\u9009\u62E9\u8BBE\u5907\u66F4\u65B0\uFF0C\u5176\u4F59\u529F\u80FD\u624B\u53F0\u5747\u9700\u8981\u5728\u6B63\u5E38\u6A21\u5F0F\u8FDE\u63A5\u3002")]),_:1}),gt,a(_,null,{default:n(()=>[o("\u25C6 \u841D\u535C\uFF08LOSEHU\uFF09\u56FA\u4EF6\u76F8\u5173\u95EE\u9898\u8BF7\u79FB\u6B65\uFF1A"),a(p,{theme:"primary",href:"https://github.com/losehu/uv-k5-firmware-custom",target:"_blank"},{default:n(()=>[o("https://github.com/losehu/uv-k5-firmware-custom")]),_:1}),o(" \u3002")]),_:1}),wt,a(_,null,{default:n(()=>[o("\u25C6 K5Web \u4F7F\u7528\u89C6\u9891\u6559\u7A0B\uFF08BG7QJV\uFF09\uFF1A"),a(p,{theme:"primary",href:"https://www.douyin.com/video/7378314511419313458",target:"_blank"},{default:n(()=>[o("https://www.douyin.com/video/7378314511419313458")]),_:1}),o(" \u3002")]),_:1}),Ft,a(_,null,{default:n(()=>[o("\u25C6 K5Web \u4F7F\u7528\u89C6\u9891\u6559\u7A0B\uFF08BG3ODZ\uFF09\uFF1A"),a(p,{theme:"primary",href:"https://www.bilibili.com/video/BV1Q4421D75x",target:"_blank"},{default:n(()=>[o("https://www.bilibili.com/video/BV1Q4421D75x")]),_:1}),o(" \u3002")]),_:1})]),r("div",null,[a(u,{heading:5},{default:n(()=>[o("\u5E0C\u671B\u5DE5\u7A0B1+1\u52A9\u5B66\u884C\u52A8\uFF1A")]),_:1}),bt])]),_:1})}}});const Bt=K(kt,[["__scopeId","data-v-6821f1f8"]]),yt={class:"container"},St={class:"left-side"},vt={class:"panel"},Et={name:"Dashboard"},Ct=G({...Et,setup(f){return(c,t)=>(L(),it("div",yt,[r("div",St,[r("div",vt,[a(Bt)])])]))}});const Ot=K(Ct,[["__scopeId","data-v-8f743d99"]]);export{Ot as default};
