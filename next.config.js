/** @type {import('next').NextConfig} */
const repoName = (process.env.GITHUB_REPOSITORY || "").split("/")[1] || "";
const isUserSite = repoName.endsWith(".github.io");
const computedBasePath = isUserSite ? "" : process.env.NEXT_PUBLIC_BASE_PATH || (repoName ? `/${repoName}` : "");

const nextConfig = {
  output: "export",
  basePath: computedBasePath,
  assetPrefix: computedBasePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
