import path from 'path-browserify';

export const resolvePublicPath = (filePath: string): string => {
  const basePath = process.env.AIDON_STORYBOOK === 'true'
    ? process.env.AIDON_STORYBOOK_BASE_PATH || ''
    : '';

  return path.join(basePath, filePath).replace(/\\/g, '/');
};
