import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider as CustomThemeProvider } from "../context/ThemeContext";
import ThemeRegistry from "../components/ThemeRegistry";
import DecorativeBackground from "../components/DecorativeBackground";

export const metadata: Metadata = {
  title: "orthyx AI",
  description: "Orthogonal intelligence for precise alignment and reliable automation. Decouple, align, deploy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="transition-colors duration-300">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                colors: {
                  primary: '#14B8A6',
                  secondary: '#2DD4BF',
                }
              }
            }
          }
        `}}></script>
      </head>
      <body className="flex flex-col min-h-screen font-sans transition-colors duration-300" style={{ backgroundColor: '#f8fafc', color: '#0f172a' }}>
        <ThemeRegistry>
          <LanguageProvider>
            <CustomThemeProvider>
              <DecorativeBackground />
              <Header />
              <main className="flex-1 relative z-10">{children}</main>
              <Footer />
              <CookieBanner />
            </CustomThemeProvider>
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
