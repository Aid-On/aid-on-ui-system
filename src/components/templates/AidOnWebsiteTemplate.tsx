import React from 'react';
import { Box, Image, Text, VStack, HStack, Container, Divider } from '@chakra-ui/react';
import { SideLogo } from '../atoms/SideLogo';
import { SectionHeading } from '../atoms/SectionHeading';
import { Tagline } from '../atoms/Tagline';

export const AidOnWebsiteTemplate = () => {
  return (
    <Box>
      <VStack spacing={"32px"} align="center" py={"32px"}>
        <VStack align="center" className="a">
          <SideLogo width={"100%"} height="137px"  px={2} />
          <Tagline mt={2} >Empower Lives with AI</Tagline>
        </VStack>

        <Box className="b" textAlign="center">
          <SectionHeading fontSize="70px" fontWeight="bold" mb={4}>Mission</SectionHeading>
          <Text fontSize="24px" fontWeight={"bold"}>
            AI が人間の知識を超える日がそう遠くないとした時に<br />
            AI になくて人間にあるものとして<br />
            「意志の力」や「熱量」が重要であると考えています<br /><br />
            これからの未来に向けて重要な『意志の力・熱量』を<br />
            AIテクノロジーで助けていくことを使命に掲げ<br />
            私たちは、新たな社会やビジネスづくりに挑戦していきます
          </Text>
        </Box>

        <Box className="c" width="100%">
          <Container maxW="container.md">
            <SectionHeading fontSize="70px"  fontWeight={700} mb={4} textAlign="center">Company</SectionHeading>
            <VStack spacing={4} align="stretch">
              <CompanyInfoItem label="会社名" detail="株式会社Aid-On / Aid-On Inc." />
              <CompanyInfoItem label="所在地" detail="宮崎県宮崎市" />
              <CompanyInfoItem 
                label="事業内容" 
                detail={`人工知能及び応用技術に係る
                    ソフトウェア、システム等の
                    企画・開発・コンサルティング・保守など`} 
              />
              <CompanyInfoItem label="連絡先" detail="info@aid-on.org" noBorder />
            </VStack>
          </Container>
        </Box>

        <Box className="d" width="100%" textAlign="center" py={4}>
          <Text>© 2024 Aid-On Inc.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

const CompanyInfoItem = ({ label, detail, noBorder = false }: {
    label: string,
    detail: string,
    noBorder?: boolean
}) => (
  <Box borderBottom={noBorder ? 'none' : '1px solid'} borderColor="gray.200" pb={2}>
    <HStack justify="space-between" align="start">
      <Text fontWeight="bold" width="30%">{label}</Text>
      <Text width="70%">{detail}</Text>
    </HStack>
  </Box>
);
