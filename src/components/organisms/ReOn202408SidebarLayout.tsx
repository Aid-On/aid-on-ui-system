import React, { useState } from "react";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { ReOn202408WebSidebar } from "./ReOn202408WebSidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
  chatHistory: any[];
  currentChatId: string | null;
  onStartNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onAddData: () => void;
}

export const ReOn202408SidebarLayout: React.FC<SidebarLayoutProps> = ({
  children,
  chatHistory,
  currentChatId,
  onStartNewChat,
  onSelectChat,
  onAddData,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarWidth = isSidebarOpen ? "250px" : "60px";

  return (
    <Flex width="100%" height="100vh" overflow="hidden">
      <ReOn202408WebSidebar
        chatHistory={chatHistory}
        currentChatId={currentChatId}
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={toggleSidebar}
        onStartNewChat={onStartNewChat}
        onSelectChat={onSelectChat}
        onAddData={onAddData}
      />
      <Box
        flexGrow={1}
        overflowY="auto"
        transition="margin-left 0.3s"
        marginLeft={isLargerThan768 ? sidebarWidth : "0"}
      >
        {children}
      </Box>
    </Flex>
  );
};
