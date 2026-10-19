import{r as k,j as e}from"./iframe-Ce85W_Jj.js";import{R as A,F as D}from"./ReOn202408SidebarLayout-W1OfmKJz.js";import{u as I}from"./chunk-57I6FYPZ-Bk3QeIhg.js";import{T as r}from"./chunk-2OOHT3W5-BRUw8hf9.js";import{V as W}from"./chunk-NTCQBYKE-BjJRTLMS.js";import{H as S}from"./chunk-3ASUQ6PA-Bx0KJKtB.js";import{B as F}from"./chunk-PULVB27S-osJXlWpb.js";import{B as j}from"./chunk-UVUR7MCU-Bw0Y4e0j.js";import"./preload-helper-PPVm8Dsz.js";import"./resolvePublicPath-zrzVEvAu.js";const q=({date:o,time:l,accountName:a,documentDate:u,documentTitle:h,isSmallScreen:s})=>e.jsxs(F,{maxWidth:s?"100%":"806px",height:"auto",mb:"30px",px:s?"16px":"0",children:[e.jsxs(r,{color:"#757575",fontSize:"12px",fontWeight:"300",lineHeight:"18px",children:["投稿日時 ",o," ",l," by ",a]}),e.jsxs(r,{color:"#1E1E1E",fontSize:"15px",fontWeight:"300",lineHeight:"23px",textDecoration:"underline",pt:"10px",children:["参照: ",u," ",h]})]}),v=({chatHistory:o,currentChatId:l,uploadHistory:a,accountName:u,onStartNewChat:h,onSelectChat:s,onAddData:C,onBack:T})=>{const[t]=I("(max-width: 768px)"),[i,y]=k.useState(1),x=10,w=i*x,b=w-x,g=a.slice(b,w),c=Math.ceil(a.length/x);return e.jsx(A,{chatHistory:o,currentChatId:l,onStartNewChat:h,onSelectChat:s,onAddData:C,children:e.jsxs(D,{width:"100%",height:"100%",flexDirection:"column",px:t?"16px":"0",children:[e.jsxs(S,{width:"100%",justifyContent:"space-between",mt:"8px",mb:t?"20px":"30px",children:[e.jsx(r,{color:"#0F0F0F",fontSize:"16px",fontWeight:"300",ml:t?"40px":"20px",onClick:T,cursor:"pointer",children:"←"}),e.jsx(r,{color:"#0F0F0F",fontSize:"16px",fontWeight:"300",mr:t?"0":"20px",children:u})]}),e.jsx(r,{color:"#fd2a44",fontSize:"16px",fontWeight:"700",textAlign:"center",mb:"60px",children:"データアップロード履歴"}),e.jsx(W,{spacing:0,align:"stretch",maxWidth:t?"100%":"806px",marginLeft:g.length>0?t?0:"112px":"0px",children:g.length>0?g.map((n,H)=>e.jsx(q,{...n,isSmallScreen:t},H)):e.jsx(r,{textAlign:"center",color:"#757575",children:"アップロード履歴がありません"})}),c>1&&e.jsxs(S,{justifyContent:"center",mt:"20px",children:[e.jsx(j,{onClick:()=>y(n=>Math.max(n-1,1)),isDisabled:i===1,children:"前へ"}),e.jsx(r,{children:`${i} / ${c}`}),e.jsx(j,{onClick:()=>y(n=>Math.min(n+1,c)),isDisabled:i===c,children:"次へ"})]})]})})};v.__docgenInfo={description:"",methods:[],displayName:"ReOn202408WebUploadHistoryTemplate",props:{chatHistory:{required:!0,tsType:{name:"Array",elements:[{name:"ChatHistory"}],raw:"ChatHistory[]"},description:""},currentChatId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},uploadHistory:{required:!0,tsType:{name:"Array",elements:[{name:"UploadHistoryItem"}],raw:"UploadHistoryItem[]"},description:""},onStartNewChat:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSelectChat:{required:!0,tsType:{name:"signature",type:"function",raw:"(chatId: string) => void",signature:{arguments:[{type:{name:"string"},name:"chatId"}],return:{name:"void"}}},description:""},onAddData:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBack:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},accountName:{required:!0,tsType:{name:"string"},description:""}}};const $={title:"Templates/ReOn202408WebUploadHistoryTemplate",component:v,parameters:{layout:"fullscreen"}},B=[{date:"2024-08-14",time:"15:30",accountName:"John Doe",documentDate:"2024-08-10",documentTitle:"Sample Document 1"},{date:"2024-08-13",time:"10:15",accountName:"Jane Smith",documentDate:"2024-08-09",documentTitle:"Sample Document 2"}],V=[{id:"1",title:"Chat 1"},{id:"2",title:"Chat 2"}],f={chatHistory:V,currentChatId:"1",uploadHistory:B,onStartNewChat:()=>console.log("Start new chat"),onSelectChat:o=>console.log(`Select chat: ${o}`),onAddData:()=>console.log("Add data"),onBack:()=>console.log("Back"),accountName:"Test Account"},m={args:f,parameters:{viewport:{defaultViewport:"desktop"},chromatic:{viewports:[1350]}}},p={args:f,parameters:{viewport:{defaultViewport:"tablet"},chromatic:{viewports:[900]}}},d={args:f,parameters:{viewport:{defaultViewport:"mobile1"},chromatic:{viewports:[450]}}},J=["PC","Tablet","Smartphone"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    },
    chromatic: {
      viewports: [1350]
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    viewport: {
      defaultViewport: "tablet"
    },
    chromatic: {
      viewports: [900]
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    chromatic: {
      viewports: [450]
    }
  }
}`,...d.parameters?.docs?.source}}};export{m as PC,d as Smartphone,p as Tablet,J as __namedExportsOrder,$ as default};
