import type { Metadata } from "next";

const metadataHead = ({ lang }: { lang: "en" | "br" }) => {
  const metadata: Metadata = {
    metadataBase: new URL("https://matheusbloize.com/"),
    title:
      lang === "en"
        ? "Matheus Bloize - Fullstack Developer"
        : "Matheus Bloize - Desenvolvedor Fullstack",
    description:
      lang === "en"
        ? "Matheus Bloize is a chill fullstack developer who builds easy and accessible interfaces."
        : "Matheus Bloize é um desenvolvedor fullstack tranquilo que constrói interfaces fáceis e acessíveis.",
    authors: [
      {
        name: "Matheus Bloize",
        url: "https://matheusbloize.com/",
      },
    ],
    manifest: "https://matheusbloize.com/manifest.json",
    openGraph: {
      title:
        lang === "en"
          ? "Matheus Bloize - Fullstack Developer"
          : "Matheus Bloize - Desenvolvedor Fullstack",
      type: "website",
      description:
        lang === "en"
          ? "Matheus Bloize is a chill fullstack developer who builds easy and accessible interfaces."
          : "Matheus Bloize é um desenvolvedor fullstack tranquilo que constrói interfaces fáceis e acessíveis.",
      images: "/static/images/logo.svg",
      url: "https://matheusbloize.com/",
      locale: lang === "en" ? "en_US" : "pt_BR",
      alternateLocale: lang === "en" ? "pt_BR" : "en_US",
    },
  };

  return metadata;
};

export default metadataHead;
