import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import { SectionHeading } from '../src/components/atoms/SectionHeading';  // パスは実際の場所に合わせて調整してください

export default {
  title: 'Atoms/SectionHeading',
  component: SectionHeading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fromColor: { control: 'color' },
    toColor: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'number' },
  },
} as Meta<typeof SectionHeading>;

const Template: StoryFn<typeof SectionHeading> = (args) => <SectionHeading {...args} />;

export const Mission = Template.bind({});
Mission.args = {
  children: 'Mission',
};

export const Company = Template.bind({});
Company.args = {
  children: 'Company',
};

export const CustomGradient = Template.bind({});
CustomGradient.args = {
  children: 'Custom Gradient',
  fromColor: '#3182CE',
  toColor: '#805AD5',
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
  children: 'Custom Font Size',
  fontSize: '32px',
};

/**
 * SectionHeading コンポーネントは、セクションの見出しを表示するために使用されます。
 * グラデーションテキストを表示し、色や大きさをカスタマイズできます。
 */
export const Documentation: StoryFn<typeof SectionHeading> = (args) => <SectionHeading {...args} />;
Documentation.args = {
  children: 'Documentation Example',
};
Documentation.parameters = {
  docs: {
    description: {
      component: `
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
      `,
    },
  },
};