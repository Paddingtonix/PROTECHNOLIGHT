import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"
const repoName = "PROTECHNOLIGHT"

const nextConfig: NextConfig = {
  output: "export",
  
  // Важно: basePath БЕЗ слеша в конце, assetPrefix СО слешем
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  
  // Отключаем оптимизацию изображений
  images: {
    unoptimized: true
  },
  
  // Важные дополнительные настройки
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Отключаем кеширование
  generateBuildId: async () => 'build',
  
}

export default nextConfig