import{j as u}from"./iframe-Ce85W_Jj.js";import{S as i}from"./SectionHeading-DXi4_n8w.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-PULVB27S-osJXlWpb.js";import"./chunk-2OOHT3W5-BRUw8hf9.js";const l={title:"Atoms/SectionHeading",component:i,parameters:{layout:"centered"},argTypes:{fromColor:{control:"color"},toColor:{control:"color"},fontSize:{control:"text"},fontWeight:{control:"number"}}},n=a=>u.jsx(i,{...a}),e=n.bind({});e.args={children:"Mission"};const r=n.bind({});r.args={children:"Company"};const t=n.bind({});t.args={children:"Custom Gradient",fromColor:"#3182CE",toColor:"#805AD5"};const s=n.bind({});s.args={children:"Custom Font Size",fontSize:"32px"};const o=a=>u.jsx(i,{...a});o.args={children:"Documentation Example"};o.parameters={docs:{description:{component:`
# SectionHeading

セクションの見出しを表示するためのコンポーネントです。
グラデーションテキストを使用し、色や大きさを簡単にカスタマイズできます。

## 使用例

\`\`\`jsx
import { SectionHeading } from './SectionHeading';

<SectionHeading fromColor="#FF0000" toColor="#0000FF" fontSize="24px">
  カスタム見出し
</SectionHeading>
\`\`\`

## Props

- \`children\`: React.ReactNode - 見出しのテキスト内容
- \`fromColor\`: string (optional) - グラデーションの開始色 (デフォルト: "#FD2A44")
- \`toColor\`: string (optional) - グラデーションの終了色 (デフォルト: "#FE7340")
- \`fontSize\`: string | number (optional) - フォントサイズ (デフォルト: "22.681px")
- \`fontWeight\`: number | string (optional) - フォントの太さ (デフォルト: 500)

その他の \`TextProps\` も使用可能です。
      `}}};o.__docgenInfo={description:`SectionHeading コンポーネントは、セクションの見出しを表示するために使用されます。
グラデーションテキストを表示し、色や大きさをカスタマイズできます。`,methods:[],displayName:"Documentation"};const S=["Mission","Company","CustomGradient","CustomFontSize","Documentation"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <SectionHeading {...args} />",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <SectionHeading {...args} />",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <SectionHeading {...args} />",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <SectionHeading {...args} />",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <SectionHeading {...args} />",...o.parameters?.docs?.source},description:{story:`SectionHeading コンポーネントは、セクションの見出しを表示するために使用されます。
グラデーションテキストを表示し、色や大きさをカスタマイズできます。`,...o.parameters?.docs?.description}}};export{r as Company,s as CustomFontSize,t as CustomGradient,o as Documentation,e as Mission,S as __namedExportsOrder,l as default};
