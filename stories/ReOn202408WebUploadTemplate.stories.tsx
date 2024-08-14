import type { Meta, StoryObj } from "@storybook/react";
import { ReOn202408WebUploadTemplate } from "../src/components/templates/ReOn202408WebUploadTemplate";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Templates/ReOn202408WebUploadTemplate",
  component: ReOn202408WebUploadTemplate,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isDragging: false,
    file: null,
    isUploading: false,
    isError: false,
    isCompleted: false,
    uploadProgress: 0,
    accountName: "テストユーザー",
    chatHistory: [],
    currentChatId: null,
    isSidebarOpen: false,
    onDragOver: action("onDragOver"),
    onDragLeave: action("onDragLeave"),
    onDrop: action("onDrop"),
    onFileSelect: action("onFileSelect"),
    onUpload: action("onUpload"),
    onErrorClose: action("onErrorClose"),
    onCompletedClose: action("onCompletedClose"),
    onStartNewChat: action("onStartNewChat"),
    onSelectChat: action("onSelectChat"),
    onAddData: action("onAddData"),
    onViewUploadHistory: action("onViewUploadHistory"),
    onSidebarToggle: action("onSidebarToggle"),
  },
} satisfies Meta<typeof ReOn202408WebUploadTemplate>;

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

export const WithFile: Story = {
  args: {
    file: new File(["test content"], "test.txt", { type: "text/plain" }),
  },
};

export const Dragging: Story = {
  args: {
    isDragging: true,
  },
};

export const Uploading: Story = {
  args: {
    isUploading: true,
    uploadProgress: 50,
  },
};

export const Error: Story = {
  args: {
    isError: true,
  },
};

export const Completed: Story = {
  args: {
    isCompleted: true,
  },
};
