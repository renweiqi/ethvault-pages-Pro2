import { ThirdwebProvider } from "thirdweb/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETHVault",
  description:
    "Starter template for using thirdweb SDK with Next.js App router",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}