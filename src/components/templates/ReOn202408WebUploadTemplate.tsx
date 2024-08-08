import React, { useCallback, useState } from "react";
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
import { ReOn202408WebUploadOverlay } from "../organisms/UploadingOverlay";
import { resolvePublicPath } from "../../resolvePublicPath";

export const ReOn202408WebUploadTemplate: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile);
    }
  }, []);

  const onFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile && validateFile(selectedFile)) {
        setFile(selectedFile);
      }
    },
    []
  );

  const validateFile = (file: File): boolean => {
    const validTypes = [
      ".txt",
      "text/csv",
      "application/json",
      "application/pdf",
    ];
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (!validTypes.includes(file.type) && !file.name.endsWith(".txt")) {
      alert("サポートされていないファイル形式です。");
      return false;
    }
    if (file.size > maxSize) {
      alert("ファイルサイズが100MBを超えています。");
      return false;
    }
    return true;
  };
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
            アカウント名
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
          onClick={() => {
            if (file) {
              console.log("ファイルをアップロード:", file);
              // ここに実際のアップロード処理を追加
            } else {
              alert("ファイルを選択してください。");
            }
          }}
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
        >
          データアップロード履歴
        </Link>
      </VStack>
      <ReOn202408WebUploadOverlay isOpen={true} />
    </Flex>
  );
};

export default ReOn202408WebUploadTemplate;
