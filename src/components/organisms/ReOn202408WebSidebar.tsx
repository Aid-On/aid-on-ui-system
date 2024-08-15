// ReOn202408WebSidebar.tsx
import React from "react";
import { Box, Flex, Text, Button, VStack, Image } from "@chakra-ui/react";
import { resolvePublicPath } from "../../resolvePublicPath";
import { AddDataButton } from "../molecules/AddDataButton";

interface ChatHistory {
  id: string;
  title: string;
}

interface ReOn202408WebSidebarProps {
  chatHistory: ChatHistory[];
  currentChatId: string | null;
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
  onStartNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onAddData: () => void;
}

export const ReOn202408WebSidebar: React.FC<ReOn202408WebSidebarProps> = ({
  chatHistory,
  currentChatId,
  isSidebarOpen,
  onSidebarToggle,
  onStartNewChat,
  onSelectChat,
  onAddData,
}) => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      height="100%"
      width={isSidebarOpen ? "250px" : "60px"}
      bg="transparent"
      backdropFilter={isSidebarOpen ? "blur(10px)" : "none"}
      boxShadow={isSidebarOpen ? "0 0 10px rgba(0,0,0,0.1)" : "none"}
      transition="all 0.3s"
      zIndex={1000}
      overflow="hidden"
    >
      <Flex
        flexDirection="column"
        height="100%"
        bg={isSidebarOpen ? "rgba(248, 248, 248, 0.7)" : "transparent"}
      >
        {/* Toggle Button */}
        <Flex justifyContent="flex-start" p={2}>
          <Image
            src={resolvePublicPath("images/Sidebar-icon.png")}
            width="28px"
            height="28px"
            cursor="pointer"
            onClick={onSidebarToggle}
          />
        </Flex>

        {isSidebarOpen && (
          <>
            {/* Start Question Button */}
            <Flex
              width="100%"
              mt="20px"
              mb="30px"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                width="200px"
                height="50px"
                borderRadius="42.222px"
                bg="#e5e5e5"
                _hover={{ bg: "#d5d5d5" }}
                onClick={onStartNewChat}
              >
                <Text fontSize="16px" fontWeight="600" color={"#1E1E1E"}>
                  質問を開始する
                </Text>
              </Button>
            </Flex>

            {/* Chat History */}
            <Box
              color="#757575"
              width="100%"
              fontSize="14px"
              fontWeight="300"
              px="20px"
              flexGrow={1}
              overflowY="auto"
            >
              <Text fontSize="12px" fontWeight="700" mb="10px">
                過去のチャット
              </Text>
              {chatHistory.length === 0 ? (
                <Flex height="100%" alignItems="center">
                  まだ過去の質問がありません
                </Flex>
              ) : (
                <VStack
                  align="stretch"
                  width="100%"
                  spacing={3}
                  alignItems="flex-start"
                >
                  {chatHistory.map((chat) => (
                    <Text
                      key={chat.id}
                      cursor="pointer"
                      onClick={() => onSelectChat(chat.id)}
                      fontWeight={chat.id === currentChatId ? "bold" : "normal"}
                      fontSize="14px"
                      lineHeight="1.4"
                      _hover={{ color: "#0f0f0f" }}
                    >
                      {chat.title}
                    </Text>
                  ))}
                </VStack>
              )}
            </Box>

            {/* Add Data Button */}
            <Flex
              bg="#fc2a45"
              width="100%"
              height="80px"
              justifyContent="center"
              alignItems="center"
              // onClick={onAddData}
              cursor="pointer"
            >
              <AddDataButton onAddData={onAddData} />
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};
