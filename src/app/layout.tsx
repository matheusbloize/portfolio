import localFont from "next/font/local";

import "./globals.css";
import ReactQueryProvider from "@/providers/QueryProvider";
import metadataHead from "@/utils/metadataHead";

const clashGrotesk = localFont({
  src: "../assets/fonts/ClashGrotesk-Variable.ttf",
});

export const metadata = metadataHead({ lang: "en" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashGrotesk.className} bg-mb-base text-mb-black flex flex-col overflow-hidden`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <svg>
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency=".25"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
        </svg>
      </body>
    </html>
  );
}
