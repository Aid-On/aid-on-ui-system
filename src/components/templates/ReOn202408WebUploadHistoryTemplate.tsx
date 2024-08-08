import React from "react";
import { Box, Flex, Text, VStack, Image, Link, Button } from "@chakra-ui/react";

interface UploadHistoryItem {
  date: string;
  time: string;
  account: string;
  documentDate: string;
  documentTitle: string;
}

const UploadHistoryItem: React.FC<UploadHistoryItem> = ({
  date,
  time,
  account,
  documentDate,
  documentTitle,
}) => (
  <Box maxWidth="806px" height="41px" mb="30px">
    <Text color="#757575" fontSize="12px" fontWeight="300">
      投稿日時 {date} {time} by {account}
    </Text>
    <Text
      color="#1E1E1E"
      fontSize="15px"
      fontWeight="300"
      textDecoration="underline"
      pt="10px"
    >
      参照: {documentDate} {documentTitle}
    </Text>
  </Box>
);

export const ReOn202408WebUploadHistoryTemplate: React.FC = () => {
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
    <Flex width="100%" height="100vh" margin="0" padding="0">
      {/* Sidebar */}
      <Box
        bg="#f8f8f8"
        width="250px"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Flex width="100%" height="40px" alignItems="center">
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
          >
            <Text fontSize="16px" fontWeight="600">
              質問を開始する
            </Text>
          </Button>
        </Flex>

        <Flex
          color="#757575"
          width="210px"
          height="100%"
          fontSize="15px"
          fontWeight="300"
          ml="20px"
          flexGrow={1}
          alignItems="center"
        >
          まだ過去の質問がありません
        </Flex>

        <Flex
          bg="#fc2a45"
          width="100%"
          height="80px"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="16px" fontWeight="600" mr="12px">
            データを追加する
          </Text>
          <Image src="./images/upload-icon.png" width="32px" height="32px" />
        </Flex>
      </Box>

      {/* Main Content */}
      <VStack width="100%" height="100%" flexGrow={1} alignItems="stretch">
        <Flex
          width="100%"
          height="24px"
          justifyContent="space-between"
          mt="8px"
        >
          <Text color="#0f0f0f" fontSize="16px" fontWeight="300" ml="20px">
            ←
          </Text>
          <Text color="#0f0f0f" fontSize="16px" fontWeight="300" mr="20px">
            アカウント名
          </Text>
        </Flex>

        <Text
          color="#fd2a44"
          fontSize="16px"
          fontWeight="700"
          textAlign="center"
          mt="30px"
          mb="60px"
        >
          データアップロード履歴
        </Text>

        <VStack spacing={0} align="stretch" pl="112px">
          {historyItems.map((item, index) => (
            <UploadHistoryItem key={index} {...item} />
          ))}
        </VStack>
      </VStack>
    </Flex>
  );
};
