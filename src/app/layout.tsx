import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const epilogue = Epilogue({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Franz Dainell V. Valones",
  description: "My web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${epilogue.className} antialiased`} 
      >
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
