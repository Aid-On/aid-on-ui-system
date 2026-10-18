import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import { SideLogo } from '../src/components/atoms/SideLogo';
import { Box } from '@chakra-ui/react';

export default {
  title: 'Atoms/SideLogo',
  component: SideLogo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    w: { control: 'text' },
    h: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box bg="gray.100" p={4}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: StoryFn<typeof SideLogo> = (args) => <SideLogo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  w: '200px',
  h: '64px',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  w: '100px',
  h: '32px',
};

/**
 * SideLogo コンポーネントは、サイドバーやヘッダーなどに表示するロゴを提供します。
 * デフォルトのサイズは 137px x 44px ですが、サイズをカスタマイズすることも可能です。
 */
export const Documentation: StoryFn<typeof SideLogo> = (args) => <SideLogo {...args} />;
Documentation.args = {};
Documentation.parameters = {
  docs: {
    description: {
      component: `
# SideLogo

サイドバーやヘッダーなどに表示するロゴを提供するコンポーネントです。
デフォルトのサイズは 137px x 44px ですが、必要に応じてサイズを調整できます。

## 使用例

\`\`\`jsx
import { SideLogo } from './SideLogo';

<SideLogo />
\`\`\`

## Props

- \`w\`: string | number (optional) - ロゴの幅 (デフォルト: "137px")
- \`h\`: string | number (optional) - ロゴの高さ (デフォルト: "44px")
- その他の \`ImageProps\` も使用可能です（ただし、\`src\` と \`alt\` を除く）。

注意: このコンポーネントは '/images/side-logo-aid-on.png' にロゴ画像ファイルが存在することを前提としています。
環境に応じて適切なパスが自動的に設定されます。
      `,
    },
  },
};