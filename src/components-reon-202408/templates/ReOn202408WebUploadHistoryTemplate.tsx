import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { ReOn202408SidebarLayout } from "../organisms/ReOn202408SidebarLayout";

interface UploadHistoryItem {
  date: string;
  time: string;
  accountName: string;
  documentDate: string;
  documentTitle: string;
}

const UploadHistoryItemBox: React.FC<
  UploadHistoryItem & { isSmallScreen: boolean }
> = ({
  date,
  time,
  accountName: account,
  documentDate,
  documentTitle,
  isSmallScreen,
}) => (
  <Box
    maxWidth={isSmallScreen ? "100%" : "806px"}
    height="auto"
    mb="30px"
    px={isSmallScreen ? "16px" : "0"}
  >
    <Text color="#757575" fontSize="12px" fontWeight="300" lineHeight="18px">
      投稿日時 {date} {time} by {account}
    </Text>
    <Text
      color="#1E1E1E"
      fontSize="15px"
      fontWeight="300"
      lineHeight="23px"
      textDecoration="underline"
      pt="10px"
    >
      参照: {documentDate} {documentTitle}
    </Text>
  </Box>
);

interface ReOn202408WebUploadHistoryTemplateProps {
  chatHistory: any[];
  currentChatId: string | null;
  onStartNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onAddData: () => void;
  accountName: string;
}

export const ReOn202408WebUploadHistoryTemplate: React.FC<
  ReOn202408WebUploadHistoryTemplateProps
> = ({
  chatHistory,
  currentChatId,
  onStartNewChat,
  onSelectChat,
  onAddData,
  accountName,
}) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  const historyItems: UploadHistoryItem[] = [
    {
      date: "2024/12/23",
      time: "13:56",
      accountName: "account name",
      documentDate: "2024/07/30",
      documentTitle:
        "すごいドキュメント2 最新版（部長チェック済み）_2_2（改訂）",
    },
    // Add more items as needed
  ];

  return (
    <ReOn202408SidebarLayout
      chatHistory={chatHistory}
      currentChatId={currentChatId}
      onStartNewChat={onStartNewChat}
      onSelectChat={onSelectChat}
      onAddData={onAddData}
    >
      <Flex
        width="100%"
        height="100%"
        flexDirection="column"
        px={isSmallScreen ? "16px" : "0"}
      >
        <HStack
          width="100%"
          justifyContent="space-between"
          mt="8px"
          mb={isSmallScreen ? "20px" : "30px"}
        >
          <Text
            color="#0F0F0F"
            fontSize="16px"
            fontWeight="300"
            ml={isSmallScreen ? "40px" : "20px"}
          >
            ←
          </Text>
          <Text
            color="#0F0F0F"
            fontSize="16px"
            fontWeight="300"
            mr={isSmallScreen ? "0" : "20px"}
          >
            {accountName}
          </Text>
        </HStack>

        <Text
          color="#fd2a44"
          fontSize="16px"
          fontWeight="700"
          textAlign="center"
          mb="60px"
        >
          データアップロード履歴
        </Text>

        <VStack spacing={0} align="stretch" pl={isSmallScreen ? "0" : "112px"}>
          {historyItems.map((item, index) => (
            <UploadHistoryItemBox
              key={index}
              {...item}
              isSmallScreen={isSmallScreen}
            />
          ))}
        </VStack>
      </Flex>
    </ReOn202408SidebarLayout>
  );
};
