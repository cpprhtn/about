import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const title = "자기 소개 - 김현우";
const description =
  "보이지 않는 곳에서 동작하는 것에 대해 알아보는 걸 좋아합니다.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
