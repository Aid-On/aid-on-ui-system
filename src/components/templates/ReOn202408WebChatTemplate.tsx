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
  CircularProgress,
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

export const CustomProgress = () => {
  return (
    <CircularProgress
      isIndeterminate
      size="36px"
      thickness="4px"
      color="red.400"
      trackColor="gray.100"
    />
  );
};

interface ReOn202408WebChatTemplateProps {
  accountName: string;
  chatHistory: ChatHistory[];
  currentChatId: string | null;
  messages: ChatMessage[];
  question: string;
  isLoadingMessage: boolean;
  isSidebarOpen: boolean;
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
  isLoadingMessage,
  isSidebarOpen,
  onSidebarToggle,
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.ctrlKey && !isLoadingMessage) {
      event.preventDefault();
      onQuestionSubmit();
    }
  };
  /**
   * - 初回起動はアップロードを促進するテキストが最初にほしい
   *   - 入力フォームの送信ボタンがなんか変。レイアウトも少しずれてる
   *   - 質問と回答の左右マージンを入力フォームに揃える
   * - 文字もうちょい小さくバランスとってもいいかも
   * - 初回利用時はアップロードしてない中で使えない
   *   - テキストとかで表現する（アップロードしてください、など）
   *   - 行動できてはいけない
   *   - まだ何も質問されていませんとかにアップロードが必要です、とか制御が必要
   *   - 入力フィールドは非活性にしておく
   *      - TODO: UIが出てくる
   * - 入力フォームの送信ボタンが変
   *   - 中央に入っててほしいけどへんに潜り込んでる
   *     - 先に中央に設置は行う
   *     - 上下マージン見直し
   * - 複数行はFigmaに合わせること
   *  - Figmaの表示行数をMAX(6行)とし、以降スクロール可能とする
   * - メッセージ吹き出しの左右マージンをテキストフィールドの左右マージンを絶対値として合わせる
   * - 文字自体が全体的に大きすぎる、小さい方向で調整するかもしれない
   */
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
          pb="100px"
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
                  <Text whiteSpace="pre-wrap">{message.content}</Text>
                </Box>
              ))}
              {isLoadingMessage && (
                <Flex justifyContent="center" mt={4}>
                  <CustomProgress />
                </Flex>
              )}
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
              onKeyDown={handleKeyPress}
              isDisabled={isLoadingMessage}
            />
            <CustomSendButton
              onQuestionSubmit={onQuestionSubmit}
              isDisabled={isLoadingMessage}
            />
          </Flex>
        </Flex>
      </Flex>
    </ReOn202408SidebarLayout>
  );
};
