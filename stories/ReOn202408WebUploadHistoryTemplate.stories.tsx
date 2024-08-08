import type { Meta, StoryObj } from "@storybook/react";
import { ReOn202408WebUploadHistoryTemplate } from "../src/components/templates/ReOn202408WebUploadHistoryTemplate";

const meta = {
  title: "Templates/ReOn202408WebUploadHistoryTemplate",
  component: ReOn202408WebUploadHistoryTemplate,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ReOn202408WebUploadHistoryTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PC: Story = {
  args: {
    chatHistory: [],
    currentChatId: null,
    onStartNewChat: () => {},
    onSelectChat: (chatId: string) => {},
    onAddData: () => {},
    accountName: "",
  },
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
  args: {
    chatHistory: [],
    currentChatId: null,
    onStartNewChat: () => {},
    onSelectChat: (chatId: string) => {},
    onAddData: () => {},
    accountName: "",
  },
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
  args: {
    chatHistory: [],
    currentChatId: null,
    onStartNewChat: () => {},
    onSelectChat: (chatId: string) => {},
    onAddData: () => {},
    accountName: "",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    chromatic: {
      viewports: [450],
    },
  },
};
