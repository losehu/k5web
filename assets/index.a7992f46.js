import{d as x,c as q,b5 as R,C as c,D as u,G as s,aI as e,aH as n,aK as D,aJ as E,aE as j,aN as r,b6 as z,f as A,r as G,b7 as H,b8 as J,b9 as K,ba as Q,bb as T,u as C,aM as f,a_ as W,bc as O,bd as X,a$ as Y,be as Z,bf as ee}from"./arco.7f845a67.js";import{F as oe}from"./index.ebb8ae5a.js";import{v as V,_ as k,u as se,I as ae,a as ne}from"./index.c5405c09.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{g as te,h as re}from"./vue.0bef8fc5.js";import{u as le}from"./loading.1a4e75f4.js";import"./index.f4ca8c3f.js";import"./useConfig.b5d89e07.js";import"./useDisabled.5ccd65e2.js";import"./index.08cc7013.js";import"./helper.4ea41844.js";import"./slot.0936fab4.js";import"./chart.3e6cb2f1.js";const S=""+new URL("login-banner.426fb77f.png",import.meta.url).href,ie={class:"banner"},ce={class:"banner-inner"},de={class:"carousel-title"},_e={class:"carousel-sub-title"},me=["src"],ue=x({__name:"banner",setup(i){const{t}=V.exports.useI18n(),g=q(()=>[{slogan:t("login.banner.slogan1"),subSlogan:t("login.banner.subSlogan1"),image:S},{slogan:t("login.banner.slogan2"),subSlogan:t("login.banner.subSlogan2"),image:S},{slogan:t("login.banner.slogan3"),subSlogan:t("login.banner.subSlogan3"),image:S}]);return(b,v)=>{const p=z,h=R;return c(),u("div",ie,[s("div",ce,[e(h,{class:"carousel","animation-name":"fade"},{default:n(()=>[(c(!0),u(D,null,E(g.value,a=>(c(),j(p,{key:a.slogan},{default:n(()=>[(c(),u("div",{key:a.slogan,class:"carousel-item"},[s("div",de,r(a.slogan),1),s("div",_e,r(a.subSlogan),1),s("img",{class:"carousel-image",src:a.image},null,8,me)]))]),_:2},1024))),128))]),_:1})])])}}});const ge=k(ue,[["__scopeId","data-v-741ef175"]]),pe={class:"login-form-wrapper"},fe={class:"login-form-title"},be={class:"login-form-sub-title"},ve={class:"login-form-error-msg"},he={class:"login-form-password-actions"},we=x({__name:"login-form",setup(i){const t=te(),{t:g}=V.exports.useI18n(),b=A(""),{loading:v,setLoading:p}=le(),h=se(),a=re("login-config",{rememberPassword:!0,username:"admin",password:"admin"}),d=G({username:a.value.username,password:a.value.password}),F=async({errors:o,values:l})=>{if(!v.value&&!o){p(!0);try{await h.login(l);const{redirect:_,...w}=t.currentRoute.value.query;t.push({name:_||"Workplace",query:{...w}}),W.success(g("login.form.login.success"));const{rememberPassword:m}=a.value,{username:$,password:y}=l;a.value.username=m?$:"",a.value.password=m?y:""}catch(_){b.value=_.message}finally{p(!1)}}},L=o=>{a.value.rememberPassword=o};return(o,l)=>{const _=ae,w=H,m=O,$=ne,y=X,B=J,N=K,P=Y,M=Q,U=T;return c(),u("div",pe,[s("div",fe,r(o.$t("login.form.title")),1),s("div",be,r(o.$t("login.form.title")),1),s("div",ve,r(b.value),1),e(U,{ref:"loginForm",model:d,class:"login-form",layout:"vertical",onSubmit:F},{default:n(()=>[e(m,{field:"username",rules:[{required:!0,message:o.$t("login.form.userName.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e(w,{modelValue:d.username,"onUpdate:modelValue":l[0]||(l[0]=I=>d.username=I),placeholder:o.$t("login.form.userName.placeholder")},{prefix:n(()=>[e(_)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(m,{field:"password",rules:[{required:!0,message:o.$t("login.form.password.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e(y,{modelValue:d.password,"onUpdate:modelValue":l[1]||(l[1]=I=>d.password=I),placeholder:o.$t("login.form.password.placeholder"),"allow-clear":""},{prefix:n(()=>[e($)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(M,{size:16,direction:"vertical"},{default:n(()=>[s("div",he,[e(B,{checked:"rememberPassword","model-value":C(a).rememberPassword,onChange:L},{default:n(()=>[f(r(o.$t("login.form.rememberPassword")),1)]),_:1},8,["model-value","onChange"]),e(N,null,{default:n(()=>[f(r(o.$t("login.form.forgetPassword")),1)]),_:1})]),e(P,{type:"primary","html-type":"submit",long:"",loading:C(v)},{default:n(()=>[f(r(o.$t("login.form.login")),1)]),_:1},8,["loading"]),e(P,{type:"text",long:"",class:"login-form-register-btn"},{default:n(()=>[f(r(o.$t("login.form.register")),1)]),_:1})]),_:1})]),_:1},8,["model"])])}}});const $e=k(we,[["__scopeId","data-v-12db3177"]]),ye=i=>(Z("data-v-24cebde1"),i=i(),ee(),i),Ie={class:"container"},Se=ye(()=>s("div",{class:"logo"},[s("img",{alt:"logo",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"}),s("div",{class:"logo-text"},"Arco Design Pro")],-1)),xe={class:"content"},ke={class:"content-inner"},Pe={class:"footer"},Ce=x({__name:"index",setup(i){return(t,g)=>(c(),u("div",Ie,[Se,e(ge),s("div",xe,[s("div",ke,[e($e)]),s("div",Pe,[e(oe)])])]))}});const Ke=k(Ce,[["__scopeId","data-v-24cebde1"]]);export{Ke as default};
