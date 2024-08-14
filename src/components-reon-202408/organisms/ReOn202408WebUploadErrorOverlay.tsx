import React from "react";
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
} from "@chakra-ui/react";

export const ReOn202408WebUploadErrorOverlay: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay backgroundColor="rgba(255, 255, 255, 0.9)" />
      <ModalContent
        bg="transparent"
        boxShadow="none"
        width="100%"
        maxWidth="800px"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          width="100%"
        >
          <Text
            color="#ec2120"
            fontSize="20px"
            fontWeight="300"
            textAlign="center"
            mb="136px"
            width="100%"
            px="20px"
          >
            何らかのエラーによりアップロードが失敗しました。
            <br />
            再度お試しいただくか、時間を置いてからお試しください。
          </Text>
          <Button
            bg="#fd2a44"
            width="200px"
            height="50px"
            borderRadius="42.222px"
            color="white"
            fontSize="16px"
            fontWeight="600"
            onClick={onClose}
          >
            OK
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
