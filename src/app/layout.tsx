import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const clashGrotesk = localFont({
  src: "../assets/fonts/ClashGrotesk-Variable.ttf",
});

export const metadata: Metadata = {
  title: "Matheus Bloize - Frontend Developer",
  description:
    "Matheus Bloize is a chill frontend developer who builds easy and accessible interfaces.",
  authors: [
    {
      name: "Matheus Bloize",
      url: "https://www.linkedin.com/in/matheus-bloize/",
    },
  ],
  openGraph: {
    title: "Matheus Bloize - Frontend Developer",
    description:
      "Matheus Bloize is a chill frontend developer who builds easy and accessible interfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/static/images/brain.webp"
          as="image"
          type="image/webp"
        />
      </Head>
      <body
        className={`${clashGrotesk.className} bg-mb-base text-mb-black flex flex-col`}
      >
        {children}
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
