import type { Meta, StoryObj } from "@storybook/react";
import { ReOn202408WebChatTemplate } from "../src/components/templates/ReOn202408WebChatTemplate";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Templates/ReOn202408WebChatTemplate",
  component: ReOn202408WebChatTemplate,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    accountName: "テストユーザー",
    chatHistory: [
      { id: "1", title: "過去のチャット1" },
      { id: "2", title: "過去のチャット2" },
    ],
    currentChatId: null,
    messages: [],
    question: "",
    isLoadingMessage: false,
    isSidebarOpen: false,
    onSidebarToggle: action("onSidebarToggle"),
    onStartNewChat: action("onStartNewChat"),
    onSelectChat: action("onSelectChat"),
    onAddData: action("onAddData"),
    onQuestionChange: action("onQuestionChange"),
    onQuestionSubmit: action("onQuestionSubmit"),
  },
} satisfies Meta<typeof ReOn202408WebChatTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PC: Story = {
  args: {},
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
  args: {},
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
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    chromatic: {
      viewports: [450],
    },
  },
};

export const WithActiveChat: Story = {
  args: {
    currentChatId: "1",
    messages: [
      { id: "1", content: "こんにちは、AIアシスタントです。", isUser: false },
      {
        id: "2",
        content: "今日はどのようなご質問がありますか？",
        isUser: false,
      },
      { id: "3", content: "AIについて教えてください。", isUser: true },
      { id: "4", content: "AIとは...(説明が続く)", isUser: false },
    ],
  },
};

export const WithQuestion: Story = {
  args: {
    question: "これはテスト質問です",
  },
};

export const WithLongChatHistory: Story = {
  args: {
    chatHistory: Array.from({ length: 20 }, (_, i) => ({
      id: `${i + 1}`,
      title: `過去のチャット${i + 1}`,
    })),
  },
};

export const WithLongMessages: Story = {
  args: {
    currentChatId: "1",
    messages: Array.from({ length: 50 }, (_, i) => ({
      id: `${i + 1}`,
      content: `これはメッセージ${i + 1}です。長いメッセージの例を示すために、このようなやや長めの文章を入れています。`,
      isUser: i % 2 === 0,
    })),
  },
};
