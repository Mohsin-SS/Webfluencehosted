/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in `out/` for GitHub Pages.
  output: "export",
  // Served from a custom domain (see CNAME), so no basePath/assetPrefix needed.
  // Trailing slashes make nested routes resolve to their own index.html on a
  // static host, avoiding 404s (e.g. /services/foo/ -> /services/foo/index.html).
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
