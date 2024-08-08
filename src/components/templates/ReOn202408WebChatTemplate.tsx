import React, { useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  VStack,
  Image,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { ReOn202408SidebarLayout } from "../organisms/ReOn202408SidebarLayout";
import { resolvePublicPath } from "../../resolvePublicPath";

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
}

interface ChatHistory {
  id: string;
  title: string;
}

interface CustomSendButtonProps {
  onQuestionSubmit: () => void;
  isDisabled?: boolean;
}

export const CustomSendButton: React.FC<CustomSendButtonProps> = ({
  onQuestionSubmit,
  isDisabled = false,
}) => {
  return (
    <Button
      as="div"
      onClick={onQuestionSubmit}
      disabled={isDisabled}
      bg="transparent"
      _hover={{ bg: "rgba(0, 0, 0, 0.05)" }}
      _active={{ bg: "rgba(0, 0, 0, 0.1)" }}
      borderRadius="full"
      p={0}
      minWidth="52px"
      minHeight="52px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor={isDisabled ? "not-allowed" : "pointer"}
      opacity={isDisabled ? 0.5 : 1}
      transition="all 0.2s"
    >
      <Image
        src={resolvePublicPath("images/reon-send-button.png")}
        alt="送信"
        boxSize="40px"
        objectFit="contain"
      />
    </Button>
  );
};

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
  onStartNewChat,
  onSelectChat,
  onAddData,
  onQuestionChange,
  onQuestionSubmit,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ReOn202408SidebarLayout
      chatHistory={chatHistory}
      currentChatId={currentChatId}
      onStartNewChat={onStartNewChat}
      onSelectChat={onSelectChat}
      onAddData={onAddData}
    >
      <Flex flexDirection="column" height="100vh" position="relative">
        {/* Account Name */}
        <Flex
          width="100%"
          height="40px"
          justifyContent="flex-end"
          alignItems="center"
          flexShrink={0}
          px={4}
        >
          <Text color="#0f0f0f" fontSize="16px" fontWeight="300">
            {accountName}
          </Text>
        </Flex>

        {/* Scrollable Chat Area */}
        <Box
          flexGrow={1}
          width="100%"
          overflowY="auto"
          px={4}
          pb="100px" // Add padding to prevent overlap with input area
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
                fontSize={isSmallScreen ? "18px" : "24px"}
                fontWeight="300"
                textAlign="center"
              >
                まだ何も質問されていません
              </Text>
            </Flex>
          ) : (
            <VStack spacing={4} align="stretch" pt={4} pb={4}>
              {messages.map((message) => (
                <Box
                  key={message.id}
                  bg={message.isUser ? "#e5e5e5" : "white"}
                  p={3}
                  borderRadius="md"
                  alignSelf={message.isUser ? "flex-end" : "flex-start"}
                  maxWidth={isSmallScreen ? "85%" : "70%"}
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
          position="absolute"
          bottom={5}
          left={0}
          right={0}
          justifyContent="center"
          pointerEvents="none"
        >
          <Flex
            bg="#ffe6e6"
            height="60px"
            borderRadius="30px"
            alignItems="center"
            width={isSmallScreen ? "calc(100% - 32px)" : "calc(100% - 266px)"}
            maxWidth="1000px"
            pointerEvents="auto"
          >
            <Input
              variant="unstyled"
              placeholder="ここに自由に質問できます"
              color="#757575"
              fontSize={isSmallScreen ? "16px" : "18px"}
              fontWeight="300"
              ml={isSmallScreen ? "20px" : "30px"}
              flexGrow={1}
              value={question}
              onChange={onQuestionChange}
            />
            <CustomSendButton onQuestionSubmit={onQuestionSubmit} />
            {/* <Box
              bg="brown"
              width="30px"
              height="30px"
              mr="10px"
              ml={isSmallScreen ? "10px" : "29px"}
              onClick={onQuestionSubmit}
              cursor="pointer"
            /> */}
          </Flex>
        </Flex>
      </Flex>
    </ReOn202408SidebarLayout>
  );
};
