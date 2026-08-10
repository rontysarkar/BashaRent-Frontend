import {  Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import { Toaster } from "sonner"
import { AuthProvider } from "@/context/auth-context"
import Footer from "@/components/shared/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

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
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="bg-slate-50">
        {/* <Navbar /> */}
        <Toaster position="top-center" richColors />
        {/* <ThemeProvider> */}
          <AuthProvider>
            {children}
            <Footer/>
            </AuthProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
