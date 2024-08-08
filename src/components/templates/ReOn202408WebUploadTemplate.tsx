import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Image,
  Link,
  Input,
} from "@chakra-ui/react";
import { ReOn202408WebUploadOverlay } from "../organisms/ReOn202408WebUploadingOverlay";
import { resolvePublicPath } from "../../resolvePublicPath";
import { ReOn202408WebUploadErrorOverlay } from "../organisms/ReOn202408WebUploadErrorOverlay";
import { ReOn202408WebUploadCompletedOverlay } from "../organisms/ReOn202408WebUploadCompletedOverlay";

interface ReOn202408WebUploadTemplateProps {
  isDragging: boolean;
  file: File | null;
  isUploading: boolean;
  isError: boolean;
  isCompleted: boolean;
  accountName: string;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
  onErrorClose: () => void;
  onCompletedClose: () => void;
  onSidebarToggle: () => void;
  onStartQuestion: () => void;
  onViewUploadHistory: () => void;
}

export const ReOn202408WebUploadTemplate: React.FC<
  ReOn202408WebUploadTemplateProps
> = ({
  isDragging,
  file,
  isUploading,
  isError,
  isCompleted,
  accountName,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect,
  onUpload,
  onErrorClose,
  onCompletedClose,
  onSidebarToggle,
  onStartQuestion,
  onViewUploadHistory,
}) => {
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
        <Flex
          width="100%"
          height="40px"
          alignItems="center"
          onClick={onSidebarToggle}
        >
          <Image
            src={resolvePublicPath("./images/Sidebar-icon.png")}
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
            onClick={onStartQuestion}
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
          <Image
            src={resolvePublicPath("images/upload-icon.png")}
            width="32px"
            height="32px"
          />
        </Flex>
      </Box>

      {/* Main Content */}
      <VStack
        width="100%"
        height="100%"
        flexGrow={1}
        alignItems="center"
        spacing={0}
      >
        {/* Account Name */}
        <Flex
          width="100%"
          height="24px"
          justifyContent="flex-end"
          mt="8px"
          mb="50px"
        >
          <Text color="#0f0f0f" fontSize="16px" fontWeight="300" mr="20px">
            {accountName}
          </Text>
        </Flex>

        {/* Upload Area */}
        <Box
          bg="#ffe6e6"
          width="100%"
          maxWidth="806px"
          height="192px"
          borderRadius="20px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px="20px"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          border={isDragging ? "2px dashed #fd2a44" : "none"}
        >
          <Image
            src={resolvePublicPath("images/upload-icon.png")}
            width="80px"
            height="80px"
            mb="20px"
          />
          <Text fontSize="20px" fontWeight="700" textAlign="center" mb="10px">
            {file ? (
              `選択されたファイル: ${file.name}`
            ) : (
              <>
                ファイルをドラッグ&ドロップ{" "}
                <Text
                  as="span"
                  color="#757575"
                  fontSize="12px"
                  fontWeight="300"
                >
                  または
                </Text>{" "}
                <label
                  htmlFor="file-upload"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  ファイルを選択
                </label>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".txt,.csv,application/json,application/pdf"
                  onChange={onFileSelect}
                  display="none"
                />
              </>
            )}
          </Text>
          <Text fontSize="14px" fontWeight="400" textAlign="center">
            （.txt）、CSV、JSON、PDF をサポートしています。
            <br />
            1つあたりの最大サイズは100MBです
          </Text>
        </Box>

        {/* Add Button */}
        <Button
          bg="#fd2a44"
          width="200px"
          height="50px"
          borderRadius="42.222px"
          color="white"
          fontSize="16px"
          fontWeight="600"
          mt="200px"
          onClick={onUpload}
          isDisabled={!file}
        >
          追加する
        </Button>

        {/* Spacer */}
        <Box flexGrow={1} />

        {/* Upload History Link */}
        <Link
          color="#fd2a44"
          fontSize="16px"
          fontWeight="400"
          textDecoration="underline"
          mb="30px"
          onClick={onViewUploadHistory}
        >
          データアップロード履歴
        </Link>
      </VStack>
      <ReOn202408WebUploadOverlay isOpen={isUploading} />
      <ReOn202408WebUploadCompletedOverlay
        isOpen={isCompleted}
        onClose={onCompletedClose}
      />
      <ReOn202408WebUploadErrorOverlay
        isOpen={isError}
        onClose={onErrorClose}
      />
    </Flex>
  );
};

export default ReOn202408WebUploadTemplate;
