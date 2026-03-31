import { Geist_Mono, Inter, Manrope } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/modules/core/components/theme-provider"
import { WhatsAppFab } from "@/modules/core/components/whatsapp-fab"
import { cn } from "@workspace/ui/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        manrope.variable,
      )}
    >
      <body>
        <ThemeProvider>
          {children}
          <WhatsAppFab />
        </ThemeProvider>
      </body>
    </html>
  )
}
