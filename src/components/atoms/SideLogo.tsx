import React from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

type SideLogoProps = Omit<ImageProps, 'src' | 'alt'>;

export const SideLogo: React.FC<SideLogoProps> = (props) => {
  const basePath = process.env.AIDON_STORYBOOK === 'true' 
    ? process.env.STORYBOOK_BASE_PATH || ''
    : '';

  const logoPath = `${basePath}/images/side-logo-aid-on.png`;

  return (
    <Image
      src={logoPath}
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