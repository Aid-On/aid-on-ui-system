import React from "react";
import {
  Box,
  VStack,
  Image,
  Text,
  Input,
  Button,
  useColorModeValue,
  InputProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { resolvePublicPath } from "../../resolvePublicPath";

const ReOn202408WebLoginTemplate = () => {
  const bgColor = useColorModeValue("#ff516618", "#ff516630");
  const textColor = useColorModeValue("#0f0f0f", "#f0f0f0");
  const accentColor = "#fd2a44";

  const fontSize = useBreakpointValue({ base: "16px", md: "18px" });
  const logoWidth = useBreakpointValue({ base: "150px", md: "208px" });
  const logoHeight = useBreakpointValue({ base: "67px", md: "93px" });
  const formWidth = useBreakpointValue({ base: "90%", md: "435px" });
  const buttonWidth = useBreakpointValue({ base: "90%", md: "324px" });
  const buttonHeight = useBreakpointValue({ base: "60px", md: "82px" });

  /**
   * - トップページ
   *  - フォントサイズが大きすぎる、中のページとバランスが悪い
   *   - IDが存在しません、ID / Passwordが全体的にでかすぎる
   *     - 中のページと合わせて、フォントサイズを調整する
   */
  return (
    <Box
      minHeight="100vh"
      bg={bgColor}
      style={{
        backgroundImage: `url('${resolvePublicPath("images/back.png")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <VStack spacing={8} align="center" py={16} px={4}>
        <Text
          color={textColor}
          fontSize={fontSize}
          fontWeight="800"
          fontFamily="Hiragino Kaku Gothic StdN"
          textAlign="center"
        >
          AI アシスタントによる
          <br />
          チャットボットサービス
        </Text>

        <VStack>
          <Image
            src={resolvePublicPath("images/ReOn.png")}
            alt="ReOn"
            w={logoWidth}
            h={logoHeight}
            objectFit="contain"
          />
          <Text color={accentColor} fontSize="22px" fontWeight="500" mt="-10px">
            リオン
          </Text>
        </VStack>

        <VStack spacing={4} w={formWidth}>
          <FormInput label="ID" placeholder="IDを入力してください" />
          <FormInput
            label="Password"
            placeholder="パスワードを入力してください"
            type="password"
          />
        </VStack>

        <Text color="#ff5166" fontSize="20px" fontWeight="300">
          IDが存在しません
        </Text>

        <Button
          bg="#fe8e9b"
          color="white"
          fontSize={useBreakpointValue({ base: "24px", md: "28px" })}
          fontWeight="600"
          borderRadius="60px"
          w={buttonWidth}
          h={buttonHeight}
          _hover={{ bg: "#ff7a8a" }}
        >
          ログイン
        </Button>
      </VStack>
    </Box>
  );
};

interface FormInputProps extends Omit<InputProps, "label"> {
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...props }) => (
  <VStack align="start" w="100%">
    <Text
      color="#393636"
      fontSize={useBreakpointValue({ base: "20px", md: "24px" })}
      fontWeight="600"
    >
      {label}
    </Text>
    <Input
      bg="#f8f8f8"
      border="1px solid #393636"
      borderRadius="10px"
      h={useBreakpointValue({ base: "50px", md: "66px" })}
      fontSize={useBreakpointValue({ base: "16px", md: "20px" })}
      _placeholder={{ color: "#393636", fontWeight: "300" }}
      {...props}
    />
  </VStack>
);

export default ReOn202408WebLoginTemplate;
