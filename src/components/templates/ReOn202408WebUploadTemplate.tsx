import React from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  Image,
  Link,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { ReOn202408SidebarLayout } from "../organisms/ReOn202408SidebarLayout";
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
  chatHistory: any[]; // 適切な型に変更してください
  currentChatId: string | null;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
  onErrorClose: () => void;
  onCompletedClose: () => void;
  onStartNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onAddData: () => void;
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
  chatHistory,
  currentChatId,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect,
  onUpload,
  onErrorClose,
  onCompletedClose,
  onStartNewChat,
  onSelectChat,
  onAddData,
  onViewUploadHistory,
}) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

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
        alignItems="center"
        spacing={0}
        px={isSmallScreen ? "16px" : "0"}
      >
        {/* Upload Area */}
        <Box
          bg="#ffe6e6"
          width="100%"
          maxWidth={isSmallScreen ? "100%" : "806px"}
          height={isSmallScreen ? "auto" : "192px"}
          borderRadius="20px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={isSmallScreen ? "16px" : "20px"}
          py={isSmallScreen ? "24px" : "0"}
          onDragOver={!isSmallScreen ? onDragOver : undefined}
          onDragLeave={!isSmallScreen ? onDragLeave : undefined}
          onDrop={!isSmallScreen ? onDrop : undefined}
          border={!isSmallScreen && isDragging ? "2px dashed #fd2a44" : "none"}
        >
          <Image
            src={resolvePublicPath("images/upload-cloud-icon.png")}
            width={isSmallScreen ? "60px" : "80px"}
            height={isSmallScreen ? "60px" : "80px"}
            mb="20px"
          />
          <Text
            fontSize={isSmallScreen ? "16px" : "20px"}
            fontWeight="700"
            textAlign="center"
            mb="10px"
          >
            {file ? (
              `選択されたファイル: ${file.name}`
            ) : (
              <>
                {!isSmallScreen && "ファイルをドラッグ&ドロップ "}
                <Text
                  as="span"
                  color="#757575"
                  fontSize={isSmallScreen ? "12px" : "14px"}
                  fontWeight="300"
                >
                  {!isSmallScreen && "または"}
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
          <Text
            fontSize={isSmallScreen ? "12px" : "14px"}
            fontWeight="400"
            textAlign="center"
          >
            （.txt）、CSV、JSON、PDF をサポートしています。
            <br />
            1つあたりの最大サイズは100MBです
          </Text>
        </Box>

        {/* Add Button */}
        <Button
          bg="#fd2a44"
          width={isSmallScreen ? "100%" : "200px"}
          height="50px"
          borderRadius="42.222px"
          color="white"
          fontSize="16px"
          fontWeight="600"
          mt={isSmallScreen ? "40px" : "200px"}
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
    </ReOn202408SidebarLayout>
  );
};

export default ReOn202408WebUploadTemplate;
