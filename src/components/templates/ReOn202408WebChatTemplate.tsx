import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  VStack,
  Image,
} from "@chakra-ui/react";

export const ReOn202408WebChatTemplate: React.FC = () => {
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

        {/* Start Question Button */}
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

        {/* No Past Questions Text */}
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

        {/* Add Data Button */}
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
      <VStack width="100%" height="100%" flexGrow={1}>
        {/* Account Name */}
        <Flex width="100%" height="24px" justifyContent="flex-end" mt="8px">
          <Text color="#0f0f0f" fontSize="16px" fontWeight="300" mr="20px">
            アカウント名
          </Text>
        </Flex>

        {/* No Questions Text */}
        <Text
          color="#757575"
          fontSize="24px"
          fontWeight="300"
          flexGrow={1}
          display="flex"
          alignItems="center"
        >
          まだ何も質問されていません
        </Text>

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
          />
          <Box bg="brown" width="30px" height="30px" mr="10px" ml="29px" />
        </Flex>
      </VStack>
    </Flex>
  );
};
