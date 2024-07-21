import React from 'react';
import { Image, ImageProps } from '@chakra-ui/react';
import { resolvePublicPath } from '../../resolvePublicPath';

type SideLogoProps = Omit<ImageProps, 'src' | 'alt'>;

export const SideLogo: React.FC<SideLogoProps> = (props) => {
  return (
    <Image
      src={resolvePublicPath("/images/side-logo-aid-on.png")}
      alt="Aid-On Side Logo"
      w="137px"
      h="44px"
      onError={(e) => {
        console.error('Failed to load logo', e);
      }}
      {...props}
    />
  );
};
