import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  useMediaQuery,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Image,
} from "@chakra-ui/react";
import { ReOn202408WebSidebar } from "./ReOn202408WebSidebar";
import { resolvePublicPath } from "../../resolvePublicPath";

interface ChatHistory {
  id: string;
  title: string;
}

interface SidebarLayoutProps {
  children: React.ReactNode;
  chatHistory: ChatHistory[];
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
  const [isSmallScreen] = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    setIsSidebarOpen(!isSmallScreen);
  }, [isSmallScreen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarContent = (
    <ReOn202408WebSidebar
      chatHistory={chatHistory}
      currentChatId={currentChatId}
      isSidebarOpen={isSidebarOpen}
      onSidebarToggle={toggleSidebar}
      onStartNewChat={onStartNewChat}
      onSelectChat={onSelectChat}
      onAddData={onAddData}
    />
  );

  return (
    <Flex width="100%" height="100vh" overflow="hidden">
      {isSmallScreen ? (
        <>
          <Flex position="absolute" top={2} left={2} zIndex={1001}>
            <Image
              src={resolvePublicPath("images/Sidebar-icon.png")}
              width="28px"
              height="28px"
              cursor="pointer"
              onClick={toggleSidebar}
            />
          </Flex>
          <Drawer
            isOpen={isSidebarOpen}
            placement="left"
            onClose={() => setIsSidebarOpen(false)}
            returnFocusOnClose={false}
          >
            <DrawerOverlay backgroundColor="rgba(0, 0, 0, 0.2)" />
            <DrawerContent>{sidebarContent}</DrawerContent>
          </Drawer>
        </>
      ) : (
        <Box
          width={isSidebarOpen ? "250px" : "60px"}
          flexShrink={0}
          transition="width 0.3s"
          position="fixed"
          left={0}
          top={0}
          bottom={0}
          zIndex={1000}
        >
          {sidebarContent}
        </Box>
      )}
      <Box
        flexGrow={1}
        width="100%"
        transition="margin-left 0.3s"
        marginLeft={isSmallScreen ? 0 : isSidebarOpen ? "250px" : "60px"}
      >
        {children}
      </Box>
    </Flex>
  );
};
