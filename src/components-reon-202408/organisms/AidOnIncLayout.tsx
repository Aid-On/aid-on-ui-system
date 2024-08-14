import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { resolvePublicPath } from "../../resolvePublicPath";

export interface AidOnIncLayoutProps extends BoxProps {
  children: React.ReactNode;
}

export const AidOnIncLayout: React.FC<AidOnIncLayoutProps> = ({
  children,
  ...props
}) => (
  <Box
    minHeight="100vh"
    width="100%"
    display="flex"
    flexDirection="column"
    bgImage={`url('${resolvePublicPath("/images/aid-on-inc-background.svg")}')`}
    backgroundRepeat="no-repeat"
    backgroundSize="100%"
    backgroundAttachment="fixed"
    {...props}
  >
    {children}
  </Box>
);
