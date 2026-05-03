import type { Metadata } from "next";
// Импортируем Onest из библиотеки Google-шрифтов Next.js
import { Onest } from "next/font/google";
import "./globals.css";

// Инициализируем шрифт, обязательно добавляем кириллицу
const onest = Onest({ subsets: ["latin", "cyrillic"] });

// Заодно поправим заголовок, который отображается на вкладке браузера
export const metadata: Metadata = {
  title: "Я — Дизайнер",
  description: "Мой первый проект на Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Меняем язык на русский
    <html lang="ru">
      {/* Применяем класс шрифта ко всему содержимому сайта */}
      <body className={onest.className}>
        {children}
      </body>
    </html>
  );
}