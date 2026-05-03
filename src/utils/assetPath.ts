export const getAssetPath = (path: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const repoName = '/sp-ai-next';
  return isProd ? `${repoName}${path}` : path;
};