import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/provider/theme-provider";
import { Inter } from "@next/font/google";

export const metadata: Metadata = {
  title: "NeuroSync",
  description: "NeuroSync is the new way to challenge your mind.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
