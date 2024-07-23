import React from 'react';
import { Box, Text, BoxProps } from '@chakra-ui/react';

export interface TaglineProps extends BoxProps {
  children?: React.ReactNode;
}

export const Tagline: React.FC<TaglineProps> = ({
  children = "Empower Lives with AI",
  ...props
}) => {
  return (
    <Box
      color="#fff"
      borderRadius="8px"
      padding="8px 0 12px"
      background="linear-gradient(90deg, #ff5166 0%, #9e0798 100%)"
      width={["90%", "90%", "372px"]}
      textAlign="center"
      {...props}
    >
      <Text
        fontSize="28px"
        fontWeight={700}
        lineHeight="40px"
        fontFamily="Helvetica Neue"
      >
        {children}
      </Text>
    </Box>
  );
};