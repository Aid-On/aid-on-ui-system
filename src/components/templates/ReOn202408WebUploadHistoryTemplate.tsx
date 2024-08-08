import React from "react";
import { Box, Flex, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { ReOn202408SidebarLayout } from "../organisms/ReOn202408SidebarLayout";

interface UploadHistoryItem {
  date: string;
  time: string;
  account: string;
  documentDate: string;
  documentTitle: string;
}

const UploadHistoryItem: React.FC<
  UploadHistoryItem & { isSmallScreen: boolean }
> = ({ date, time, account, documentDate, documentTitle, isSmallScreen }) => (
  <Box
    maxWidth={isSmallScreen ? "100%" : "806px"}
    height="auto"
    mb={isSmallScreen ? "20px" : "30px"}
    px={isSmallScreen ? "16px" : "0"}
  >
    <Text
      color="#757575"
      fontSize={isSmallScreen ? "10px" : "12px"}
      fontWeight="300"
    >
      投稿日時 {date} {time} by {account}
    </Text>
    <Text
      color="#1E1E1E"
      fontSize={isSmallScreen ? "13px" : "15px"}
      fontWeight="300"
      textDecoration="underline"
      pt={isSmallScreen ? "5px" : "10px"}
    >
      参照: {documentDate} {documentTitle}
    </Text>
  </Box>
);

interface ReOn202408WebUploadHistoryTemplateProps {
  chatHistory: any[]; // 適切な型に変更してください
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
      account: "account name",
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
      <VStack
        width="100%"
        height="100%"
        flexGrow={1}
        alignItems="stretch"
        px={isSmallScreen ? "16px" : "0"}
      >
        <Text
          color="#fd2a44"
          fontSize={isSmallScreen ? "14px" : "16px"}
          fontWeight="700"
          textAlign="center"
          mt={isSmallScreen ? "20px" : "30px"}
          mb={isSmallScreen ? "40px" : "60px"}
        >
          データアップロード履歴
        </Text>

        <VStack spacing={0} align="stretch" pl={isSmallScreen ? "0" : "112px"}>
          {historyItems.map((item, index) => (
            <UploadHistoryItem
              key={index}
              {...item}
              isSmallScreen={isSmallScreen}
            />
          ))}
        </VStack>
      </VStack>
    </ReOn202408SidebarLayout>
  );
};
