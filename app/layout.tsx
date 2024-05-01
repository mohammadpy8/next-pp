import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import { ProviderLayout } from "@/provider";
import { BottomNavigation } from "@/components/module";

import "./globals.css";
// import 'swiper/css';

const vazirFont = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirFont.className}>
      <ProviderLayout>
        <body
          className="bg-gray-200"
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          <div className="flex mx-auto bg-white max-w-[500px] h-[100vh] overflow-hidden overflow-y-scroll center-box">
            {children}
          </div>
          <div className="relative flex justify-center items-center bottom-8 ">
            <BottomNavigation />
          </div>
        </body>
      </ProviderLayout>
    </html>
  );
}
