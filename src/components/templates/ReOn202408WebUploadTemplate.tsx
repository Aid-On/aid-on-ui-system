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
  Progress,
  Tooltip,
} from "@chakra-ui/react";
import { ReOn202408SidebarLayout } from "../organisms/ReOn202408SidebarLayout";
import { ReOn202408WebUploadOverlay } from "../organisms/ReOn202408WebUploadingOverlay";
import { resolvePublicPath } from "../../resolvePublicPath";
import { ReOn202408WebUploadErrorOverlay } from "../organisms/ReOn202408WebUploadErrorOverlay";
import { ReOn202408WebUploadCompletedOverlay } from "../organisms/ReOn202408WebUploadCompletedOverlay";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

interface FileUploadProgressProps {
  fileName: string;
  fileSize: string;
  progress: number;
}

const FileUploadProgress: React.FC<FileUploadProgressProps> = ({
  fileName,
  fileSize,
  progress,
}) => {
  return (
    <Box width="100%" maxWidth="100%">
      <Text fontSize="sm" mb={1}>
        {fileName} ({fileSize})
      </Text>
      <Progress
        value={progress}
        size="sm"
        colorScheme="red"
        bg="gray.50"
        borderRadius="full"
      />
      <Text fontSize="xs" textAlign="right" mt={1}>
        uploading...{progress}%
      </Text>
    </Box>
  );
};

interface ReOn202408WebUploadTemplateProps {
  isDragging: boolean;
  file: File | null;
  isUploading: boolean;
  isError: boolean;
  isCompleted: boolean;
  uploadProgress: number;
  accountName: string;
  chatHistory: any[]; // 適切な型に変更してください
  currentChatId: string | null;
  isSidebarOpen: boolean;
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
  onSidebarToggle: () => void;
}

export const ReOn202408WebUploadTemplate: React.FC<
  ReOn202408WebUploadTemplateProps
> = ({
  isDragging,
  file,
  isUploading,
  isError,
  isCompleted,
  uploadProgress,
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

  const formatFileSize = (size: number) => {
    if (size < 1024) return size + " B";
    if (size < 1024 * 1024) return (size / 1024).toFixed(2) + " KB";
    return (size / (1024 * 1024)).toFixed(2) + " MB";
  };

  const helpText = `［プログラム用データ］
.c / .cs / .cpp / .java / .php / .py / .rb / .js / .sh / .ts
［構造化用データ］
.json
［マークアップ用データ］
.html / .css / .md
［ビジネス用データ］
.doc / .docx / .pptx / .pdf / .txt`;

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
          mt="40px"
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
            pdf、csv、ppt、docx、pptx、html などをサポートしています{" "}
            <Tooltip
              label={helpText}
              placement="bottom"
              hasArrow
              whiteSpace="pre-wrap"
              bg="#f5f5f5"
              color="#1e1e1e"
              p={"20px"}
              borderRadius="10px"
              boxShadow="md"
              sx={{
                "& .chakra-tooltip__arrow": {
                  bg: "#f5f5f5",
                },
              }}
            >
              <QuestionOutlineIcon />
            </Tooltip>
            <br />
            1つあたりの最大サイズは100MBです
          </Text>
        </Box>

        {/* FileUploadProgress */}
        {file && isUploading && (
          <Box mt={4} width="100%" maxWidth={isSmallScreen ? "100%" : "806px"}>
            <FileUploadProgress
              fileName={file.name}
              fileSize={formatFileSize(file.size)}
              progress={uploadProgress}
            />
          </Box>
        )}

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
          isDisabled={!file || isUploading}
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
