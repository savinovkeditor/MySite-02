const normalizeBasePath = (value) => {
  if (!value || value === "/") {
    return ""
  }

  return value.startsWith("/") ? value : `/${value}`
}

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isUserOrOrgPages = repo?.endsWith(".github.io")
const inferredBasePath = !isUserOrOrgPages && repo ? `/${repo}` : ""
const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
