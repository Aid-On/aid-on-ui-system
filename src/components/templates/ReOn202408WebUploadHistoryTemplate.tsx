import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { ReOn202408SidebarLayout } from "../organisms/ReOn202408SidebarLayout";

interface UploadHistoryItem {
  date: string;
  time: string;
  accountName: string;
  documentDate: string;
  documentTitle: string;
}

interface ChatHistory {
  id: string;
  title: string;
}

const UploadHistoryItemBox: React.FC<
  UploadHistoryItem & { isSmallScreen: boolean }
> = ({
  date,
  time,
  accountName,
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
      投稿日時 {date} {time} by {accountName}
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
  chatHistory: ChatHistory[];
  currentChatId: string | null;
  uploadHistory: UploadHistoryItem[];
  onStartNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onAddData: () => void;
  onBack: () => void;
  accountName: string;
}

export const ReOn202408WebUploadHistoryTemplate: React.FC<
  ReOn202408WebUploadHistoryTemplateProps
> = ({
  chatHistory,
  currentChatId,
  uploadHistory,
  accountName,
  onStartNewChat,
  onSelectChat,
  onAddData,
  onBack,
}) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = uploadHistory.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(uploadHistory.length / itemsPerPage);

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
            onClick={onBack}
            cursor="pointer"
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

        <VStack
          spacing={0}
          align="stretch"
          maxWidth={isSmallScreen ? "100%" : "806px"}
          marginLeft={
            currentItems.length > 0 ? (isSmallScreen ? 0 : "112px") : "0px"
          }
        >
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <UploadHistoryItemBox
                key={index}
                {...item}
                isSmallScreen={isSmallScreen}
              />
            ))
          ) : (
            <Text textAlign="center" color="#757575">
              アップロード履歴がありません
            </Text>
          )}
        </VStack>
        {totalPages > 1 && (
          <HStack justifyContent="center" mt="20px">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              isDisabled={currentPage === 1}
            >
              前へ
            </Button>
            <Text>{`${currentPage} / ${totalPages}`}</Text>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              isDisabled={currentPage === totalPages}
            >
              次へ
            </Button>
          </HStack>
        )}
      </Flex>
    </ReOn202408SidebarLayout>
  );
};
