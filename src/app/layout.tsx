import type { Metadata } from "next"
import "./globals.css"
import { cn } from "@/lib/utils"
import { fontSans } from "@/lib/fonts"
import { MetaTags } from "@/data/config"

export const metadata: Metadata = MetaTags

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
