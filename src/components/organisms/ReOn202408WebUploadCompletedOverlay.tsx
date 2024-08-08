import React from "react";
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
} from "@chakra-ui/react";

export const ReOn202408WebUploadCompletedOverlay: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay backgroundColor="rgba(255, 255, 255, 0.7)" />
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
            color="#fd2a44"
            fontSize="60px"
            fontWeight="700"
            textAlign="center"
            width="100%"
          >
            Completed !!
          </Text>
          <Text
            color="#1e1e1e"
            fontSize="20px"
            fontWeight="700"
            textAlign="center"
            mt="43px"
            width="100%"
          >
            データ追加完了しました
          </Text>
          <Button
            bg="#fd2a44"
            width="200px"
            height="50px"
            borderRadius="42.222px"
            color="white"
            fontSize="16px"
            fontWeight="600"
            mt="48px"
            onClick={onClose}
          >
            OK
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
