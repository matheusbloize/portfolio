import Head from "next/head";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import metadataHead from "@/utils/metadataHead";

export const metadata = metadataHead({ lang: "br" });

const PageBr = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/static/images/brain.webp"
          as="image"
          type="image/webp"
        />
      </Head>
      <Header lang="br" />
      <main className="flex flex-col justify-start items-center w-full sm:justify-center">
        <Hero lang="br" />
        <About lang="br" />
        <Services lang="br" />
        <Projects lang="br" />
        <Experience lang="br" />
        <Contact lang="br" />
      </main>
      <Footer lang="br" />
    </>
  );
};

export default PageBr;
