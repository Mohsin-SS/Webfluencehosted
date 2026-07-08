import type { Metadata } from "next"
import { Inter, Sora, Caveat } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { BookingProvider } from "@/components/booking-modal"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const sora = Sora({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display" })
const caveat = Caveat({ subsets: ["latin"], weight: ["700"], variable: "--font-hand" })

export const metadata: Metadata = {
  title: "Webfluence | Senior Engineering Studio",
  description:
    "Webfluence is a senior engineering studio in Lahore building web platforms, mobile apps, and AI-native products for founders and operators worldwide. Code you own outright.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(inter.variable, sora.variable, caveat.variable)}
    >
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-brand-amber/25">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  )
}
