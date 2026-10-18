import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '../src/components/atoms/Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    bgColor: { control: 'color' },
    hoverBgColor: { control: 'color' },
    activeBgColor: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    w: { control: 'text' },
    minH: { control: 'text' },
    borderRadius: { control: 'text' },
    my: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '使ってみる',
  },
};

export const CustomColors: Story = {
  args: {
    children: 'カスタムカラー',
    bgColor: '#4A90E2',
    hoverBgColor: '#357ABD',
    activeBgColor: '#2A609A',
  },
};

export const SmallButton: Story = {
  args: {
    children: '小さいボタン',
    fontSize: '16px',
    w: '200px',
    minH: '40px',
  },
};

export const LargeButton: Story = {
  args: {
    children: '大きいボタン',
    fontSize: '28px',
    w: '400px',
    minH: '70px',
  },
};

export const RoundedButton: Story = {
  args: {
    children: '丸いボタン',
    borderRadius: '50px',
  },
};