/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://localhost:3000/api/:path*",
  //     },
  //   ];
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/thumb/9/98/**",
      },
      {
        protocol: "https",
        hostname: "dthezntil550i.cloudfront.net",
        pathname: "/4w/latest/**",
      },
    ],
  },
};

export default nextConfig;
