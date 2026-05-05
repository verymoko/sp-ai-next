import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-onest', // создаем переменную
});

export const metadata: Metadata = {
  title: "Я — Дизайнер"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={onest.variable}>
      <body className="bg-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}