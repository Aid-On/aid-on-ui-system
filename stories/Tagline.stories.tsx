import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import { Tagline, TaglineProps } from '../src/components/atoms/Tagline';

export default {
  title: 'Atoms/Tagline',
  component: Tagline,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<typeof Tagline>;

const Template: StoryFn<typeof Tagline> = (args) => <Tagline {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Empower Lives with AI",
};

export const CustomText = Template.bind({});
CustomText.args = {
  children: 'Custom Tagline Text',
};

/**
 * Tagline コンポーネントは、会社やプロダクトのスローガンを表示するために使用されます。
 * デフォルトでは "Empower Lives with AI" を表示し、グラデーション背景を持ちます。
 */
export const Documentation: StoryFn<typeof Tagline> = (args) => <Tagline {...args} />;
Documentation.args = {
  children: "Empower Lives with AI",
};
Documentation.parameters = {
  docs: {
    description: {
      component: `
# Tagline

会社やプロダクトのスローガンを表示するためのコンポーネントです。
デフォルトでは "Empower Lives with AI" を表示し、グラデーション背景を持ちます。

## 使用例

\`\`\`jsx
import { Tagline } from './Tagline';

<Tagline>Empower Lives with AI</Tagline>
\`\`\`

## Props

- \`children\`: React.ReactNode (optional) - 表示するテキスト (デフォルト: "Empower Lives with AI")
- その他の \`BoxProps\` も使用可能です。
      `,
    },
  },
};