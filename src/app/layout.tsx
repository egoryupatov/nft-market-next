import "./globals.scss";
import { Manrope } from "@next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const manrope = Manrope({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <head />
      <body className={"layout"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
