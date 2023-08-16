import "./globals.css";
import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const fira = Fira_Code({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
