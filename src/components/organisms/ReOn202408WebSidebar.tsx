import React from "react";
import { Box, Flex, Text, Button, VStack, Image } from "@chakra-ui/react";
import { resolvePublicPath } from "../../resolvePublicPath";

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
      width={isSidebarOpen ? "250px" : "60px"}
      height="100%"
      bg={isSidebarOpen ? "#f8f8f8" : "transparent"}
      display="flex"
      flexDirection="column"
      transition="width 0.3s"
    >
      {/* Toggle Button */}
      <Flex justifyContent="flex-start" p={2}>
        {isSidebarOpen ? (
          <Image
            src={resolvePublicPath("images/Sidebar-icon.png")}
            width="28px"
            height="28px"
            cursor="pointer"
            onClick={onSidebarToggle}
          />
        ) : (
          <Image
            src={resolvePublicPath("images/Sidebar-icon.png")}
            width="28px"
            height="28px"
            cursor="pointer"
            onClick={onSidebarToggle}
          />
        )}
      </Flex>

      {isSidebarOpen && (
        <>
          {/* Start Question Button */}
          <Flex
            width="100%"
            mt="20px"
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
              <Text fontSize="16px" fontWeight="600">
                質問を開始する
              </Text>
            </Button>
          </Flex>

          {/* Chat History */}
          <Box
            color="#757575"
            width="210px"
            fontSize="15px"
            fontWeight="300"
            ml="20px"
            mt="20px"
            flexGrow={1}
            overflowY="auto"
          >
            {chatHistory.length === 0 ? (
              <Flex height="100%" alignItems="center">
                まだ過去の質問がありません
              </Flex>
            ) : (
              <VStack
                align="stretch"
                width="100%"
                spacing={2}
                alignItems="flex-start"
              >
                {chatHistory.map((chat) => (
                  <Text
                    key={chat.id}
                    cursor="pointer"
                    onClick={() => onSelectChat(chat.id)}
                    fontWeight={chat.id === currentChatId ? "bold" : "normal"}
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
            onClick={onAddData}
          >
            <Text color="white" fontSize="16px" fontWeight="600" mr="12px">
              データを追加する
            </Text>
            <Image
              src={resolvePublicPath("images/upload-icon.png")}
              width="32px"
              height="32px"
            />
          </Flex>
        </>
      )}
    </Box>
  );
};
