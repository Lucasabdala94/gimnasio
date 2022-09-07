
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir:"build",
  images: {
    disableStaticImages: true,
    loader: "custom",
  },
  
}  

module.exports = nextConfig

