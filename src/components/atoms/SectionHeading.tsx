import React from 'react';
import { Box, Text, TextProps } from '@chakra-ui/react';

interface SectionHeadingProps extends Omit<TextProps, 'bgGradient' | 'bgClip'> {
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  fromColor = "#FD2A44",
  toColor = "#FE7340",
  ...props
}) => {
  return (
    <Box textAlign="center" mb={4}>
      <Text
        display="inline-block"
        pb={1}
        bgGradient={`linear(to-r, ${fromColor}, ${toColor})`}
        bgClip="text"
        {...props}
      >
        {children}
      </Text>
    </Box>
  );
};