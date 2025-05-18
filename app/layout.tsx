import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

//
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "greek"]
})

export const metadata: Metadata = {
  title: "Productivity App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased primaryBG`} // pt-8 px-48
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
