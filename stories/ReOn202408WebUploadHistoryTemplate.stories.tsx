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

const mockUploadHistory = [
  {
    date: "2024-08-14",
    time: "15:30",
    accountName: "John Doe",
    documentDate: "2024-08-10",
    documentTitle: "Sample Document 1",
  },
  {
    date: "2024-08-13",
    time: "10:15",
    accountName: "Jane Smith",
    documentDate: "2024-08-09",
    documentTitle: "Sample Document 2",
  },
  // Add more mock data as needed
];

const mockChatHistory = [
  { id: "1", title: "Chat 1" },
  { id: "2", title: "Chat 2" },
];

const commonArgs = {
  chatHistory: mockChatHistory,
  currentChatId: "1",
  uploadHistory: mockUploadHistory,
  onStartNewChat: () => console.log("Start new chat"),
  onSelectChat: (chatId: string) => console.log(`Select chat: ${chatId}`),
  onAddData: () => console.log("Add data"),
  onBack: () => console.log("Back"),
  accountName: "Test Account",
};

export const PC: Story = {
  args: commonArgs,
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
  args: commonArgs,
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
  args: commonArgs,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    chromatic: {
      viewports: [450],
    },
  },
};
