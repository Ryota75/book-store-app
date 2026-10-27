import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const notoSansJP = Noto_Sans_JP({
  weight: ["400"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "book-store-app",
  description: "記事サイト",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}</body>
    </html>
  );
}
