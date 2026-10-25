import{j as e,c as E,f as H,r as B}from"./iframe-Cxa7d-ux.js";import{R as $,F as u}from"./ReOn202408SidebarLayout-CULUoRRz.js";import{I as V,r as L}from"./resolvePublicPath-DM7uZ8iZ.js";import{u as Q}from"./chunk-57I6FYPZ-CHziBJDM.js";import{T as I}from"./chunk-2OOHT3W5-BosRL7Wz.js";import{V as z}from"./chunk-NTCQBYKE-DxAUKWUE.js";import{B as F}from"./chunk-PULVB27S-DzLImin0.js";import{I as M}from"./chunk-6CVSDS6C-j0JNXvB-.js";import{r as K,g as G,s as Y}from"./chunk-TXZFUZNG-JMfE9ld2.js";import{B as J}from"./chunk-UVUR7MCU-D8LRLZNy.js";import"./preload-helper-PPVm8Dsz.js";var A=n=>e.jsx(E.circle,{cx:50,cy:50,r:42,fill:"transparent",...n});A.displayName="Circle";var q=n=>{const{size:t,isIndeterminate:i,...a}=n;return e.jsx(E.svg,{viewBox:"0 0 100 100",__css:{width:t,height:t,animation:i?`${K} 2s linear infinite`:void 0},...a})};q.displayName="Shape";var W=H((n,t)=>{var i;const{size:a="48px",max:v=100,min:o=0,valueText:k,getValueText:_,value:b,capIsRound:w,children:S,thickness:d="10px",color:p="#0078d4",trackColor:l="#edebe9",isIndeterminate:s,...T}=n,r=G({min:o,max:v,value:b,valueText:k,getValueText:_,isIndeterminate:s}),j=s?void 0:((i=r.percent)!=null?i:0)*2.64,O=j==null?void 0:`${j} ${264-j}`,P=s?{css:{animation:`${Y} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:O,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},D={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:a};return e.jsxs(E.div,{ref:t,className:"chakra-progress",...r.bind,...T,__css:D,children:[e.jsxs(q,{size:a,isIndeterminate:s,children:[e.jsx(A,{stroke:l,strokeWidth:d,className:"chakra-progress__track"}),e.jsx(A,{stroke:p,strokeWidth:d,className:"chakra-progress__indicator",strokeLinecap:w?"round":void 0,opacity:r.value===0&&!s?0:void 0,...P})]}),S]})});W.displayName="CircularProgress";const R=({onQuestionSubmit:n,isDisabled:t=!1})=>e.jsx(J,{as:"div",onClick:n,disabled:t,bg:"transparent",_hover:{bg:"rgba(0, 0, 0, 0.05)"},_active:{bg:"rgba(0, 0, 0, 0.1)"},borderRadius:"full",p:0,minWidth:"52px",minHeight:"52px",display:"flex",alignItems:"center",justifyContent:"center",cursor:t?"not-allowed":"pointer",opacity:t?.5:1,transition:"all 0.2s",children:e.jsx(V,{src:L("images/reon-send-button.png"),alt:"送信",boxSize:"40px",objectFit:"contain"})}),N=()=>e.jsx(W,{isIndeterminate:!0,size:"36px",thickness:"4px",color:"red.400",trackColor:"gray.100"}),U=({accountName:n,chatHistory:t,currentChatId:i,messages:a,question:v,isLoadingMessage:o,isSidebarOpen:k,onSidebarToggle:_,onStartNewChat:b,onSelectChat:w,onAddData:S,onQuestionChange:d,onQuestionSubmit:p})=>{const l=B.useRef(null),[s]=Q("(max-width: 768px)");B.useEffect(()=>{l.current?.scrollIntoView({behavior:"smooth"})},[a]);const T=r=>{r.key==="Enter"&&r.ctrlKey&&!o&&(r.preventDefault(),p())};return e.jsx($,{chatHistory:t,currentChatId:i,onStartNewChat:b,onSelectChat:w,onAddData:S,children:e.jsxs(u,{flexDirection:"column",height:"100vh",position:"relative",children:[e.jsx(u,{width:"100%",height:"40px",justifyContent:"flex-end",alignItems:"center",flexShrink:0,px:4,children:e.jsx(I,{color:"#0f0f0f",fontSize:"16px",fontWeight:"300",children:n})}),e.jsx(F,{flexGrow:1,width:"100%",overflowY:"auto",px:4,pb:"100px",css:{"&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-track":{width:"6px"},"&::-webkit-scrollbar-thumb":{background:"#c5c5c5",borderRadius:"24px"}},children:a.length===0?e.jsx(u,{height:"100%",alignItems:"center",justifyContent:"center",children:e.jsx(I,{color:"#757575",fontSize:s?"18px":"24px",fontWeight:"300",textAlign:"center",children:"まだ何も質問されていません"})}):e.jsxs(z,{spacing:4,align:"stretch",pt:4,pb:4,children:[a.map(r=>e.jsx(F,{bg:r.isUser?"#e5e5e5":"white",p:3,borderRadius:"md",alignSelf:r.isUser?"flex-end":"flex-start",maxWidth:s?"85%":"70%",ml:r.isUser?"auto":"0",children:e.jsx(I,{whiteSpace:"pre-wrap",children:r.content})},r.id)),o&&e.jsx(u,{justifyContent:"center",mt:4,children:e.jsx(N,{})}),e.jsx("div",{ref:l})]})}),e.jsx(u,{position:"absolute",bottom:5,left:0,right:0,justifyContent:"center",pointerEvents:"none",children:e.jsxs(u,{bg:"#ffe6e6",height:"60px",borderRadius:"30px",alignItems:"center",width:s?"calc(100% - 32px)":"calc(100% - 266px)",maxWidth:"1000px",pointerEvents:"auto",children:[e.jsx(M,{variant:"unstyled",placeholder:"ここに自由に質問できます",color:"#757575",fontSize:s?"16px":"18px",fontWeight:"300",ml:s?"20px":"30px",flexGrow:1,value:v,onChange:d,onKeyDown:T,isDisabled:o}),e.jsx(R,{onQuestionSubmit:p,isDisabled:o})]})})]})})};R.__docgenInfo={description:"",methods:[],displayName:"CustomSendButton",props:{onQuestionSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};N.__docgenInfo={description:"",methods:[],displayName:"CustomProgress"};U.__docgenInfo={description:"",methods:[],displayName:"ReOn202408WebChatTemplate",props:{accountName:{required:!0,tsType:{name:"string"},description:""},chatHistory:{required:!0,tsType:{name:"Array",elements:[{name:"ChatHistory"}],raw:"ChatHistory[]"},description:""},currentChatId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},messages:{required:!0,tsType:{name:"Array",elements:[{name:"ChatMessage"}],raw:"ChatMessage[]"},description:""},question:{required:!0,tsType:{name:"string"},description:""},isLoadingMessage:{required:!0,tsType:{name:"boolean"},description:""},isSidebarOpen:{required:!0,tsType:{name:"boolean"},description:""},onSidebarToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onStartNewChat:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSelectChat:{required:!0,tsType:{name:"signature",type:"function",raw:"(chatId: string) => void",signature:{arguments:[{type:{name:"string"},name:"chatId"}],return:{name:"void"}}},description:""},onAddData:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onQuestionChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onQuestionSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:c}=__STORYBOOK_MODULE_ACTIONS__,ce={title:"Templates/ReOn202408WebChatTemplate",component:U,parameters:{layout:"fullscreen"},args:{accountName:"テストユーザー",chatHistory:[{id:"1",title:"過去のチャット1"},{id:"2",title:"過去のチャット2"}],currentChatId:null,messages:[],question:"",isLoadingMessage:!1,isSidebarOpen:!1,onSidebarToggle:c("onSidebarToggle"),onStartNewChat:c("onStartNewChat"),onSelectChat:c("onSelectChat"),onAddData:c("onAddData"),onQuestionChange:c("onQuestionChange"),onQuestionSubmit:c("onQuestionSubmit")}},m={args:{},parameters:{viewport:{defaultViewport:"desktop"},chromatic:{viewports:[1350]}}},h={args:{},parameters:{viewport:{defaultViewport:"tablet"},chromatic:{viewports:[900]}}},g={args:{},parameters:{viewport:{defaultViewport:"mobile1"},chromatic:{viewports:[450]}}},f={args:{currentChatId:"1",messages:[{id:"1",content:"こんにちは、AIアシスタントです。",isUser:!1},{id:"2",content:"今日はどのようなご質問がありますか？",isUser:!1},{id:"3",content:"AIについて教えてください。",isUser:!0},{id:"4",content:"AIとは...(説明が続く)",isUser:!1}]}},x={args:{question:"これはテスト質問です"}},C={args:{chatHistory:Array.from({length:20},(n,t)=>({id:`${t+1}`,title:`過去のチャット${t+1}`}))}},y={args:{currentChatId:"1",messages:Array.from({length:50},(n,t)=>({id:`${t+1}`,content:`これはメッセージ${t+1}です。長いメッセージの例を示すために、このようなやや長めの文章を入れています。`,isUser:t%2===0}))}},de=["PC","Tablet","Smartphone","WithActiveChat","WithQuestion","WithLongChatHistory","WithLongMessages"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    },
    chromatic: {
      viewports: [1350]
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "tablet"
    },
    chromatic: {
      viewports: [900]
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    chromatic: {
      viewports: [450]
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    currentChatId: "1",
    messages: [{
      id: "1",
      content: "こんにちは、AIアシスタントです。",
      isUser: false
    }, {
      id: "2",
      content: "今日はどのようなご質問がありますか？",
      isUser: false
    }, {
      id: "3",
      content: "AIについて教えてください。",
      isUser: true
    }, {
      id: "4",
      content: "AIとは...(説明が続く)",
      isUser: false
    }]
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    question: "これはテスト質問です"
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    chatHistory: Array.from({
      length: 20
    }, (_, i) => ({
      id: \`\${i + 1}\`,
      title: \`過去のチャット\${i + 1}\`
    }))
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    currentChatId: "1",
    messages: Array.from({
      length: 50
    }, (_, i) => ({
      id: \`\${i + 1}\`,
      content: \`これはメッセージ\${i + 1}です。長いメッセージの例を示すために、このようなやや長めの文章を入れています。\`,
      isUser: i % 2 === 0
    }))
  }
}`,...y.parameters?.docs?.source}}};export{m as PC,g as Smartphone,h as Tablet,f as WithActiveChat,C as WithLongChatHistory,y as WithLongMessages,x as WithQuestion,de as __namedExportsOrder,ce as default};
