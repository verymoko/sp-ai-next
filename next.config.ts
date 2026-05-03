const isProd = process.env.NODE_ENV === 'production';
// Имя вашего репозитория для GitHub Pages
const repoName = '/sp-ai-next'; 

/** @type {import('next').NextConfig} */
const nextConfig = {
  // На локалке (npm run dev) basePath будет пустым
  // В продакшене (GitHub Pages) добавится префикс репозитория
  basePath: isProd ? repoName : '',
  
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;