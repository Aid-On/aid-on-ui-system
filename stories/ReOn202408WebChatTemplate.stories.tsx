import type { Meta, StoryObj } from "@storybook/react";
import { ReOn202408WebChatTemplate } from "../src/components/templates/ReOn202408WebChatTemplate";

const meta = {
  title: "Templates/ReOn202408WebChatTemplate",
  component: ReOn202408WebChatTemplate,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ReOn202408WebChatTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PC: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    chromatic: {
      viewports: [1350],
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    chromatic: {
      viewports: [900],
    },
  },
};

export const Smartphone: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    chromatic: {
      viewports: [450],
    },
  },
};
