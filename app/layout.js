import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soulful Living",
  description: "Explore Soulful Living for inspiring articles on personal growth, wellness, and mindful living. Join our community of lifelong learners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
