"use strict";(self.webpackChunkaid_on_ui_system=self.webpackChunkaid_on_ui_system||[]).push([[354],{"./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Text=(0,chunk_ZJJGQIVY.R)((function Text2(props,ref){const styles=(0,chunk_DMO4EI7P.Vl)("Text",props),{className,align,decoration,casing,...rest}=(0,dist.MN)(props),aliasedProps=function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.p,{ref,className:(0,shared_utils_dist.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{az:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.B)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})})).displayName="Circle"},"./stories/atoms/Tagline.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomText:()=>CustomText,Default:()=>Default,Documentation:()=>Documentation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tagline_stories});var react=__webpack_require__("./node_modules/react/index.js"),chunk_PULVB27S=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),chunk_2OOHT3W5=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs");const Tagline=({children="Empower Lives with AI",...props})=>react.createElement(chunk_PULVB27S.az,{color:"#fff",borderRadius:"8px",padding:"8px 0 12px",background:"linear-gradient(90deg, #ff5166 0%, #9e0798 100%)",width:"372px",textAlign:"center",...props},react.createElement(chunk_2OOHT3W5.E,{fontSize:"28px",fontWeight:700,lineHeight:"40px",fontFamily:"Helvetica Neue"},children));Tagline.__docgenInfo={description:"",methods:[],displayName:"Tagline",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Empower Lives with AI"',computed:!1}}},composes:["BoxProps"]};const Tagline_stories={title:"Atoms/Tagline",component:Tagline,argTypes:{children:{control:"text"}}},Template=args=>react.createElement(Tagline,args),Default=Template.bind({});Default.args={children:"Empower Lives with AI"};const CustomText=Template.bind({});CustomText.args={children:"Custom Tagline Text"};const Documentation=args=>react.createElement(Tagline,args);Documentation.args={children:"Empower Lives with AI"},Documentation.parameters={docs:{description:{component:'\n# Tagline\n\n会社やプロダクトのスローガンを表示するためのコンポーネントです。\nデフォルトでは "Empower Lives with AI" を表示し、グラデーション背景を持ちます。\n\n## 使用例\n\n```jsx\nimport { Tagline } from \'./Tagline\';\n\n<Tagline>Empower Lives with AI</Tagline>\n```\n\n## Props\n\n- `children`: React.ReactNode (optional) - 表示するテキスト (デフォルト: "Empower Lives with AI")\n- その他の `BoxProps` も使用可能です。\n      '}}};const __namedExportsOrder=["Default","CustomText","Documentation"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Tagline {...args} />",...Default.parameters?.docs?.source}}},CustomText.parameters={...CustomText.parameters,docs:{...CustomText.parameters?.docs,source:{originalSource:"args => <Tagline {...args} />",...CustomText.parameters?.docs?.source}}},Documentation.parameters={...Documentation.parameters,docs:{...Documentation.parameters?.docs,source:{originalSource:"args => <Tagline {...args} />",...Documentation.parameters?.docs?.source},description:{story:'Tagline コンポーネントは、会社やプロダクトのスローガンを表示するために使用されます。\nデフォルトでは "Empower Lives with AI" を表示し、グラデーション背景を持ちます。',...Documentation.parameters?.docs?.description}}}}}]);