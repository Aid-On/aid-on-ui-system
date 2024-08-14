import React from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Container,
  Divider,
  BoxProps,
  Spacer,
} from "@chakra-ui/react";
import { SideLogo } from "../atoms/SideLogo";
import { SectionHeading } from "../atoms/SectionHeading";
import { Tagline } from "../atoms/Tagline";
import { AidOnIncLayout } from "../organisms/AidOnIncLayout";

export const AidOnWebsiteTemplate = () => {
  return (
    <AidOnIncLayout>
      <VStack spacing={"32px"} align="center" py={"32px"}>
        <VStack align="center" className="a">
          <SideLogo width={"100%"} height="137px" px={2} />
          <Tagline mt={2}>Empower Lives with AI</Tagline>
        </VStack>

        <Box className="b" textAlign="center">
          <SectionHeading fontSize="70px" fontWeight="bold" mb={4}>
            Mission
          </SectionHeading>
          <Text fontSize="16px" fontWeight={"bold"}>
            AI が人間の知識を超える日がそう遠くないとした時に
            <br />
            AI になくて人間にあるものとして
            <br />
            「意志の力」や「熱量」が重要であると考えています
            <br />
            <br />
            これからの未来に向けて重要な『意志の力・熱量』を
            <br />
            AIテクノロジーで助けていくことを使命に掲げ
            <br />
            私たちは、新たな社会やビジネスづくりに挑戦していきます
          </Text>
        </Box>

        <Box className="c" width="100%">
          <Container maxW="container.md">
            <SectionHeading
              fontSize="70px"
              fontWeight={700}
              mb={4}
              textAlign="center"
            >
              Company
            </SectionHeading>
            <VStack
              spacing={4}
              align="stretch"
              bgColor={"#fff"}
              borderRadius="10px"
              px={"59px"}
              py={8}
            >
              <CompanyInfoItem
                pb="32px"
                label="会社名"
                detail="株式会社Aid-On / Aid-On Inc."
              />
              <CompanyInfoItem
                pt="16px"
                pb="32px"
                label="所在地"
                detail="宮崎県宮崎市"
              />
              <CompanyInfoItem
                pt="16px"
                pb="32px"
                label="事業内容"
                detail={`人工知能及び応用技術に係る
                    ソフトウェア、システム等の
                    企画・開発・コンサルティング・保守など`}
              />
              <CompanyInfoItem
                pt="32px"
                label="連絡先"
                detail="info@aid-on.org"
                noBorder
              />
            </VStack>
          </Container>
        </Box>

        <Box className="d" width="100%" textAlign="center" py={4}>
          <Text>© 2024 Aid-On Inc.</Text>
        </Box>
      </VStack>
    </AidOnIncLayout>
  );
};

interface CompanyInfoItemProps extends BoxProps {
  label: string;
  detail: string;
  noBorder?: boolean;
}

const CompanyInfoItem = (props: CompanyInfoItemProps) => (
  <Box
    borderBottom={props.noBorder ? "none" : "1px solid"}
    borderColor="gray.200"
    pb={2}
    {...props}
  >
    <HStack justify="space-between" align="start">
      <Box w={20} />
      <Text fontWeight="bold" width="30%">
        {props.label}
      </Text>
      <Text width="70%">{props.detail}</Text>
      <Box w={8} />
    </HStack>
  </Box>
);
