import React, { useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  VStack,
  Image,
} from "@chakra-ui/react";

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
}

interface ChatHistory {
  id: string;
  title: string;
}

interface ReOn202408WebChatTemplateProps {
  accountName: string;
  chatHistory: ChatHistory[];
  currentChatId: string | null;
  messages: ChatMessage[];
  question: string;
  onSidebarToggle: () => void;
  onStartNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onAddData: () => void;
  onQuestionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onQuestionSubmit: () => void;
}

export const ReOn202408WebChatTemplate: React.FC<
  ReOn202408WebChatTemplateProps
> = ({
  accountName,
  chatHistory,
  currentChatId,
  messages,
  question,
  onSidebarToggle,
  onStartNewChat,
  onSelectChat,
  onAddData,
  onQuestionChange,
  onQuestionSubmit,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <Flex width="100%" height="100vh" margin="0" padding="0">
      {/* Sidebar */}
      <Box
        width="250px"
        height="100%"
        bg="#f8f8f8"
        display="flex"
        flexDirection="column"
      >
        {/* Sidebar Header */}
        <Flex
          width="100%"
          height="40px"
          alignItems="center"
          onClick={onSidebarToggle}
        >
          <Image
            src="./images/Sidebar-icon.png"
            width="28px"
            height="28px"
            ml="10px"
            mt="6px"
          />
          <Text
            color="#757575"
            ml="10px"
            mt="10px"
            mb="3px"
            fontSize="14px"
            fontWeight="300"
          >
            サイドバーを閉じる
          </Text>
        </Flex>

        {/* Start New Chat Button */}
        <Flex
          width="100%"
          mt="49px"
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
              新しいチャットを開始
            </Text>
          </Button>
        </Flex>

        {/* Chat History */}
        <VStack
          spacing={2}
          align="stretch"
          overflow="auto"
          flexGrow={1}
          mt={4}
          px={2}
        >
          {chatHistory.map((chat) => (
            <Button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              variant="ghost"
              justifyContent="flex-start"
              isActive={chat.id === currentChatId}
              _active={{ bg: "#e5e5e5" }}
            >
              {chat.title}
            </Button>
          ))}
        </VStack>

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
          <Image src="./images/upload-icon.png" width="32px" height="32px" />
        </Flex>
      </Box>

      {/* Main Content */}
      <VStack width="100%" height="100%" flexGrow={1}>
        {/* Account Name */}
        <Flex width="100%" height="24px" justifyContent="flex-end" mt="8px">
          <Text color="#0f0f0f" fontSize="16px" fontWeight="300" mr="20px">
            {accountName}
          </Text>
        </Flex>

        {/* Chat Messages */}
        <Box
          flexGrow={1}
          width="100%"
          px={4}
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#c5c5c5",
              borderRadius: "24px",
            },
          }}
        >
          {messages.length === 0 ? (
            <Flex height="100%" alignItems="center" justifyContent="center">
              <Text
                color="#757575"
                fontSize="24px"
                fontWeight="300"
                textAlign="center"
              >
                まだ何も質問されていません
              </Text>
            </Flex>
          ) : (
            <VStack spacing={4} align="stretch">
              {messages.map((message) => (
                <Box
                  key={message.id}
                  bg={message.isUser ? "#e5e5e5" : "white"}
                  p={3}
                  borderRadius="md"
                  alignSelf={message.isUser ? "flex-end" : "flex-start"}
                  maxWidth="70%"
                  ml={message.isUser ? "auto" : "0"}
                >
                  <Text>{message.content}</Text>
                </Box>
              ))}
              <div ref={messagesEndRef} />
            </VStack>
          )}
        </Box>

        {/* Input Area */}
        <Flex
          bg="#ffe6e6"
          height="60px"
          borderRadius="30px"
          mx="133px"
          mb="20px"
          alignItems="center"
          width="calc(100% - 266px)"
        >
          <Input
            variant="unstyled"
            placeholder="ここに自由に質問できます"
            color="#757575"
            fontSize="18px"
            fontWeight="300"
            ml="30px"
            flexGrow={1}
            value={question}
            onChange={onQuestionChange}
          />
          <Box
            bg="brown"
            width="30px"
            height="30px"
            mr="10px"
            ml="29px"
            onClick={onQuestionSubmit}
            cursor="pointer"
          />
        </Flex>
      </VStack>
    </Flex>
  );
};
