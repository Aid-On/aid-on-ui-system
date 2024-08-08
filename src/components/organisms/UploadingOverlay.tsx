import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Image,
  Link,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

// オーバーレイコンポーネント
export const ReOn202408WebUploadOverlay: React.FC<{ isOpen: boolean }> = ({
  isOpen,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}}
      isCentered
      closeOnOverlayClick={false}
    >
      <ModalOverlay backgroundColor="rgba(255, 255, 255, 0.7)" />
      <ModalContent bg="transparent" boxShadow="none">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Image src="./images/yazirusi.png" width="140px" height="140px" />
          <Text mt="46px" fontSize="20px" fontWeight="700" textAlign="center">
            データ追加中...
          </Text>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
