import{v as j,w as k,x as h,j as t}from"./iframe-Ce85W_Jj.js";import{I as O,r as g}from"./resolvePublicPath-zrzVEvAu.js";import{b as S,a as I,V as u}from"./chunk-NTCQBYKE-BjJRTLMS.js";import{u as _}from"./chunk-57I6FYPZ-Bk3QeIhg.js";import{B as W}from"./chunk-PULVB27S-osJXlWpb.js";import{T as x}from"./chunk-2OOHT3W5-BRUw8hf9.js";import{B as V}from"./chunk-UVUR7MCU-Bw0Y4e0j.js";import{I as T}from"./chunk-6CVSDS6C-B6Ry7_Nm.js";import"./preload-helper-PPVm8Dsz.js";function R(e,o,s=S){let r=Object.keys(e).indexOf(o);if(r!==-1)return e[o];let n=s.indexOf(o);for(;n>=0;){const a=s[n];if(e.hasOwnProperty(a)){r=n;break}n-=1}if(r!==-1){const a=s[r];return e[a]}}function z(e){var o,s;const r=k(e)?e:{fallback:e??"base"},a=j().__breakpoints.details.map(({minMaxQuery:c,breakpoint:y})=>({breakpoint:y,query:c.replace("@media screen and ","")})),p=a.map(c=>c.breakpoint===r.fallback),l=_(a.map(c=>c.query),{fallback:p,ssr:r.ssr}).findIndex(c=>c==!0);return(s=(o=a[l])==null?void 0:o.breakpoint)!=null?s:r.fallback}function i(e,o){var s;const r=k(o)?o:{fallback:"base"},n=z(r),a=j();if(!n)return;const p=Array.from(((s=a.__breakpoints)==null?void 0:s.keys)||[]),m=Array.isArray(e)?Object.fromEntries(Object.entries(I(e,p)).map(([l,c])=>[l,c])):e;return R(m,n,p)}const v=()=>{const e=h("#ff516618","#ff516630"),o=h("#0f0f0f","#f0f0f0"),s="#fd2a44",r=i({base:"16px",md:"18px"}),n=i({base:"150px",md:"208px"}),a=i({base:"67px",md:"93px"}),p=i({base:"90%",md:"435px"}),m=i({base:"90%",md:"324px"}),l=i({base:"60px",md:"82px"});return t.jsx(W,{minHeight:"100vh",bg:e,style:{backgroundImage:`url('${g("images/back.png")}')`,backgroundSize:"cover",backgroundPosition:"center"},children:t.jsxs(u,{spacing:8,align:"center",py:16,px:4,children:[t.jsxs(x,{color:o,fontSize:r,fontWeight:"800",fontFamily:"Hiragino Kaku Gothic StdN",textAlign:"center",children:["AI アシスタントによる",t.jsx("br",{}),"チャットボットサービス"]}),t.jsxs(u,{children:[t.jsx(O,{src:g("images/ReOn.png"),alt:"ReOn",w:n,h:a,objectFit:"contain"}),t.jsx(x,{color:s,fontSize:"22px",fontWeight:"500",mt:"-10px",children:"リオン"})]}),t.jsxs(u,{spacing:4,w:p,children:[t.jsx(w,{label:"ID",placeholder:"IDを入力してください"}),t.jsx(w,{label:"Password",placeholder:"パスワードを入力してください",type:"password"})]}),t.jsx(x,{color:"#ff5166",fontSize:"20px",fontWeight:"300",children:"IDが存在しません"}),t.jsx(V,{bg:"#fe8e9b",color:"white",fontSize:i({base:"24px",md:"28px"}),fontWeight:"600",borderRadius:"60px",w:m,h:l,_hover:{bg:"#ff7a8a"},children:"ログイン"})]})})},w=({label:e,...o})=>t.jsxs(u,{align:"start",w:"100%",children:[t.jsx(x,{color:"#393636",fontSize:i({base:"20px",md:"24px"}),fontWeight:"600",children:e}),t.jsx(T,{bg:"#f8f8f8",border:"1px solid #393636",borderRadius:"10px",h:i({base:"50px",md:"66px"}),fontSize:i({base:"16px",md:"20px"}),_placeholder:{color:"#393636",fontWeight:"300"},...o})]});v.__docgenInfo={description:"",methods:[],displayName:"ReOn202408WebLoginTemplate"};const N={title:"Templates/ReOn202408WebLoginTemplate",component:v,parameters:{layout:"fullscreen"}},d={parameters:{viewport:{defaultViewport:"desktop"},chromatic:{viewports:[1350]}}},f={parameters:{viewport:{defaultViewport:"tablet"},chromatic:{viewports:[900]}}},b={parameters:{viewport:{defaultViewport:"mobile1"},chromatic:{viewports:[450]}}},q=["PC","Tablet","Smartphone"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    },
    chromatic: {
      viewports: [1350]
    }
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tablet"
    },
    chromatic: {
      viewports: [900]
    }
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    chromatic: {
      viewports: [450]
    }
  }
}`,...b.parameters?.docs?.source}}};export{d as PC,b as Smartphone,f as Tablet,q as __namedExportsOrder,N as default};
