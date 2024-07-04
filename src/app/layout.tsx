import type { Metadata } from "next";
import { Jua } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { QueryProvider } from "./provider";

// const inter = Inter({ subsets: ["latin"] });
const jua = Jua({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "151개의 포켓몬을 소개합니다!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jua.className}>
        <div className="flex justify-center p-7 bg-[#90cbf1]">
          {/* <h1>플러스주차 개인과제 (NextJS)</h1> */}
          <Link href={"/"} className="cursor-pointer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png"
              width={200}
              height={40}
              alt="포켓몬 로고"
            />
          </Link>
        </div>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
