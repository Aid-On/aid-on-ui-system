import{j as p}from"./iframe-Ce85W_Jj.js";import{B as m}from"./chunk-UVUR7MCU-Bw0Y4e0j.js";import"./preload-helper-PPVm8Dsz.js";const n=({children:s,color:u="white",bgColor:c="#FD2A44",hoverBgColor:l="#FD2A44DE",activeBgColor:i="#FD2A44AB",...d})=>p.jsx(m,{color:u,bgColor:c,_hover:{bgColor:l},_active:{bgColor:i},...d,children:s});n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"white"',computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FD2A44"',computed:!1}},hoverBgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FD2A44DE"',computed:!1}},activeBgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FD2A44AB"',computed:!1}}},composes:["ChakraButtonProps"]};const{fn:g}=__STORYBOOK_MODULE_TEST__,C={title:"Atoms/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text"},bgColor:{control:"color"},hoverBgColor:{control:"color"},activeBgColor:{control:"color"},fontSize:{control:"text"},fontWeight:{control:"text"},w:{control:"text"},minH:{control:"text"},borderRadius:{control:"text"},my:{control:"text"}},args:{onClick:g()}},e={args:{children:"使ってみる"}},o={args:{children:"カスタムカラー",bgColor:"#4A90E2",hoverBgColor:"#357ABD",activeBgColor:"#2A609A"}},r={args:{children:"小さいボタン",fontSize:"16px",w:"200px",minH:"40px"}},t={args:{children:"大きいボタン",fontSize:"28px",w:"400px",minH:"70px"}},a={args:{children:"丸いボタン",borderRadius:"50px"}},h=["Default","CustomColors","SmallButton","LargeButton","RoundedButton"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: '使ってみる'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'カスタムカラー',
    bgColor: '#4A90E2',
    hoverBgColor: '#357ABD',
    activeBgColor: '#2A609A'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: '小さいボタン',
    fontSize: '16px',
    w: '200px',
    minH: '40px'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: '大きいボタン',
    fontSize: '28px',
    w: '400px',
    minH: '70px'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: '丸いボタン',
    borderRadius: '50px'
  }
}`,...a.parameters?.docs?.source}}};export{o as CustomColors,e as Default,t as LargeButton,a as RoundedButton,r as SmallButton,h as __namedExportsOrder,C as default};
