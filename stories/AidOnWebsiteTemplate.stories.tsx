import type { Meta, StoryObj } from '@storybook/react';
import { AidOnWebsiteTemplate } from '../src/components/templates/AidOnWebsiteTemplate';

const meta = {
  title: 'Templates/AidOnWebsiteTemplate',
  component: AidOnWebsiteTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AidOnWebsiteTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PC: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    chromatic: {
      viewports: [1350],
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    chromatic: {
      viewports: [900],
    },
  },
};

export const Smartphone: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    chromatic: {
      viewports: [450],
    },
  },
};