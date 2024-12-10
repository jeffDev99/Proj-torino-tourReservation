import localFont from "next/font/local";
import MainLayout from "../components/templates/layout/MainLayout";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import "./globals.css";

const yekan = localFont({
  src: "./fonts/Yekan.ttf",
  variable: "--yekan",
  weight: "100 900",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`${yekan.variable} ${yekan.variable} antialiased`}>
        <TanstackQueryProvider>
          <MainLayout>{children}</MainLayout>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
