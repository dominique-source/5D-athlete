import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IconSprite } from "@/components/IconSprite";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "5D Athlete by Dominique Soucy",
  description:
    "5D Athlete — Skills, Decision Making, Community, Mind, Soul. Build the complete athlete. Découvrez 5D Squash Élite, École et Corpo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-off-white">
        <IconSprite />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
