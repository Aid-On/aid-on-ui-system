import { Box, Image } from "@chakra-ui/react";
import { resolvePublicPath } from "../../resolvePublicPath";

// カスタムアイコンコンポーネント
export const SidebarIcon = (props: {
  onClick?: () => void;
  isHidden?: boolean;
}) => (
  <Box
    position="relative"
    width="28px"
    height="28px"
    hidden={props.isHidden ?? false}
    onClick={props.onClick}
  >
    <Box
      position="absolute"
      width="28px"
      height="28px"
      borderRadius="50%"
      bg="red.500"
    />
    <Image
      src={resolvePublicPath("images/Sidebar-icon.png")}
      width="28px"
      height="28px"
      position="absolute"
    />
  </Box>
);
