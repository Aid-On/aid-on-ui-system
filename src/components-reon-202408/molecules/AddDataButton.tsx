import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { resolvePublicPath } from "../../resolvePublicPath";

interface AddDataButtonProps {
  onAddData: () => void;
}

export const AddDataButton: React.FC<AddDataButtonProps> = ({ onAddData }) => {
  return (
    <Flex
      bg="#fc2a45"
      width="100%"
      height="80px"
      justifyContent="center"
      alignItems="center"
      onClick={onAddData}
      cursor="pointer"
      transition="background-color 0.2s"
      _hover={{ bg: "#e02540" }}
      _active={{ bg: "#c52039" }}
    >
      <Text color="white" fontSize="16px" fontWeight="600" mr="12px">
        データを追加する
      </Text>
      <Image
        src={resolvePublicPath("images/upload-icon.png")}
        width="32px"
        height="32px"
        alt="アップロード"
      />
    </Flex>
  );
};
