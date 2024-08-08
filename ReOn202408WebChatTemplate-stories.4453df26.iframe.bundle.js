"use strict";(self.webpackChunkaid_on_ui_system=self.webpackChunkaid_on_ui_system||[]).push([[155],{"./stories/ReOn202408WebChatTemplate.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PC:()=>PC,Smartphone:()=>Smartphone,Tablet:()=>Tablet,WithActiveChat:()=>WithActiveChat,WithLongChatHistory:()=>WithLongChatHistory,WithLongMessages:()=>WithLongMessages,WithQuestion:()=>WithQuestion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReOn202408WebChatTemplate_stories});var react=__webpack_require__("./node_modules/react/index.js"),chunk_57I6FYPZ=__webpack_require__("./node_modules/@chakra-ui/media-query/dist/chunk-57I6FYPZ.mjs"),chunk_KRPLQIP4=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs"),chunk_2OOHT3W5=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),chunk_PULVB27S=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),chunk_NTCQBYKE=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs"),chunk_6CVSDS6C=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs"),ReOn202408SidebarLayout=__webpack_require__("./src/components/organisms/ReOn202408SidebarLayout.tsx");const ReOn202408WebChatTemplate=({accountName,chatHistory,currentChatId,messages,question,onStartNewChat,onSelectChat,onAddData,onQuestionChange,onQuestionSubmit})=>{const messagesEndRef=(0,react.useRef)(null),[isSmallScreen]=(0,chunk_57I6FYPZ.U)("(max-width: 768px)");return(0,react.useEffect)((()=>{messagesEndRef.current?.scrollIntoView({behavior:"smooth"})}),[messages]),react.createElement(ReOn202408SidebarLayout.L,{chatHistory,currentChatId,onStartNewChat,onSelectChat,onAddData},react.createElement(chunk_KRPLQIP4.s,{flexDirection:"column",height:"100vh",overflow:"hidden"},react.createElement(chunk_KRPLQIP4.s,{width:"100%",height:"40px",justifyContent:"flex-end",alignItems:"center",flexShrink:0,px:4},react.createElement(chunk_2OOHT3W5.E,{color:"#0f0f0f",fontSize:"16px",fontWeight:"300"},accountName)),react.createElement(chunk_PULVB27S.az,{flexGrow:1,width:"100%",overflowY:"auto",px:4,css:{"&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-track":{width:"6px"},"&::-webkit-scrollbar-thumb":{background:"#c5c5c5",borderRadius:"24px"}}},0===messages.length?react.createElement(chunk_KRPLQIP4.s,{height:"100%",alignItems:"center",justifyContent:"center"},react.createElement(chunk_2OOHT3W5.E,{color:"#757575",fontSize:isSmallScreen?"18px":"24px",fontWeight:"300",textAlign:"center"},"まだ何も質問されていません")):react.createElement(chunk_NTCQBYKE.T,{spacing:4,align:"stretch",pt:4,pb:4},messages.map((message=>react.createElement(chunk_PULVB27S.az,{key:message.id,bg:message.isUser?"#e5e5e5":"white",p:3,borderRadius:"md",alignSelf:message.isUser?"flex-end":"flex-start",maxWidth:isSmallScreen?"85%":"70%",ml:message.isUser?"auto":"0"},react.createElement(chunk_2OOHT3W5.E,null,message.content)))),react.createElement("div",{ref:messagesEndRef}))),react.createElement(chunk_KRPLQIP4.s,{bg:"#ffe6e6",height:"60px",borderRadius:"30px",mx:isSmallScreen?"16px":"133px",mb:"20px",alignItems:"center",width:isSmallScreen?"calc(100% - 32px)":"calc(100% - 266px)",flexShrink:0},react.createElement(chunk_6CVSDS6C.p,{variant:"unstyled",placeholder:"ここに自由に質問できます",color:"#757575",fontSize:isSmallScreen?"16px":"18px",fontWeight:"300",ml:isSmallScreen?"20px":"30px",flexGrow:1,value:question,onChange:onQuestionChange}),react.createElement(chunk_PULVB27S.az,{bg:"brown",width:"30px",height:"30px",mr:"10px",ml:isSmallScreen?"10px":"29px",onClick:onQuestionSubmit,cursor:"pointer"}))))};ReOn202408WebChatTemplate.__docgenInfo={description:"",methods:[],displayName:"ReOn202408WebChatTemplate",props:{accountName:{required:!0,tsType:{name:"string"},description:""},chatHistory:{required:!0,tsType:{name:"Array",elements:[{name:"ChatHistory"}],raw:"ChatHistory[]"},description:""},currentChatId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},messages:{required:!0,tsType:{name:"Array",elements:[{name:"ChatMessage"}],raw:"ChatMessage[]"},description:""},question:{required:!0,tsType:{name:"string"},description:""},onSidebarToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onStartNewChat:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSelectChat:{required:!0,tsType:{name:"signature",type:"function",raw:"(chatId: string) => void",signature:{arguments:[{type:{name:"string"},name:"chatId"}],return:{name:"void"}}},description:""},onAddData:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onQuestionChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onQuestionSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const ReOn202408WebChatTemplate_stories={title:"Templates/ReOn202408WebChatTemplate",component:ReOn202408WebChatTemplate,parameters:{layout:"fullscreen"},args:{accountName:"テストユーザー",chatHistory:[{id:"1",title:"過去のチャット1"},{id:"2",title:"過去のチャット2"}],currentChatId:null,messages:[],question:"",onSidebarToggle:(0,dist.XI)("onSidebarToggle"),onStartNewChat:(0,dist.XI)("onStartNewChat"),onSelectChat:(0,dist.XI)("onSelectChat"),onAddData:(0,dist.XI)("onAddData"),onQuestionChange:(0,dist.XI)("onQuestionChange"),onQuestionSubmit:(0,dist.XI)("onQuestionSubmit")}},PC={parameters:{viewport:{defaultViewport:"desktop"},chromatic:{viewports:[1350]}}},Tablet={parameters:{viewport:{defaultViewport:"tablet"},chromatic:{viewports:[900]}}},Smartphone={parameters:{viewport:{defaultViewport:"mobile1"},chromatic:{viewports:[450]}}},WithActiveChat={args:{currentChatId:"1",messages:[{id:"1",content:"こんにちは、AIアシスタントです。",isUser:!1},{id:"2",content:"今日はどのようなご質問がありますか？",isUser:!1},{id:"3",content:"AIについて教えてください。",isUser:!0},{id:"4",content:"AIとは...(説明が続く)",isUser:!1}]}},WithQuestion={args:{question:"これはテスト質問です"}},WithLongChatHistory={args:{chatHistory:Array.from({length:20},((_,i)=>({id:`${i+1}`,title:`過去のチャット${i+1}`})))}},WithLongMessages={args:{currentChatId:"1",messages:Array.from({length:50},((_,i)=>({id:`${i+1}`,content:`これはメッセージ${i+1}です。長いメッセージの例を示すために、このようなやや長めの文章を入れています。`,isUser:i%2==0})))}},__namedExportsOrder=["PC","Tablet","Smartphone","WithActiveChat","WithQuestion","WithLongChatHistory","WithLongMessages"];PC.parameters={...PC.parameters,docs:{...PC.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    viewport: {\n      defaultViewport: "desktop"\n    },\n    chromatic: {\n      viewports: [1350]\n    }\n  }\n}',...PC.parameters?.docs?.source}}},Tablet.parameters={...Tablet.parameters,docs:{...Tablet.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    viewport: {\n      defaultViewport: "tablet"\n    },\n    chromatic: {\n      viewports: [900]\n    }\n  }\n}',...Tablet.parameters?.docs?.source}}},Smartphone.parameters={...Smartphone.parameters,docs:{...Smartphone.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    viewport: {\n      defaultViewport: "mobile1"\n    },\n    chromatic: {\n      viewports: [450]\n    }\n  }\n}',...Smartphone.parameters?.docs?.source}}},WithActiveChat.parameters={...WithActiveChat.parameters,docs:{...WithActiveChat.parameters?.docs,source:{originalSource:'{\n  args: {\n    currentChatId: "1",\n    messages: [{\n      id: "1",\n      content: "こんにちは、AIアシスタントです。",\n      isUser: false\n    }, {\n      id: "2",\n      content: "今日はどのようなご質問がありますか？",\n      isUser: false\n    }, {\n      id: "3",\n      content: "AIについて教えてください。",\n      isUser: true\n    }, {\n      id: "4",\n      content: "AIとは...(説明が続く)",\n      isUser: false\n    }]\n  }\n}',...WithActiveChat.parameters?.docs?.source}}},WithQuestion.parameters={...WithQuestion.parameters,docs:{...WithQuestion.parameters?.docs,source:{originalSource:'{\n  args: {\n    question: "これはテスト質問です"\n  }\n}',...WithQuestion.parameters?.docs?.source}}},WithLongChatHistory.parameters={...WithLongChatHistory.parameters,docs:{...WithLongChatHistory.parameters?.docs,source:{originalSource:"{\n  args: {\n    chatHistory: Array.from({\n      length: 20\n    }, (_, i) => ({\n      id: `${i + 1}`,\n      title: `過去のチャット${i + 1}`\n    }))\n  }\n}",...WithLongChatHistory.parameters?.docs?.source}}},WithLongMessages.parameters={...WithLongMessages.parameters,docs:{...WithLongMessages.parameters?.docs,source:{originalSource:'{\n  args: {\n    currentChatId: "1",\n    messages: Array.from({\n      length: 50\n    }, (_, i) => ({\n      id: `${i + 1}`,\n      content: `これはメッセージ${i + 1}です。長いメッセージの例を示すために、このようなやや長めの文章を入れています。`,\n      isUser: i % 2 === 0\n    }))\n  }\n}',...WithLongMessages.parameters?.docs?.source}}}}}]);