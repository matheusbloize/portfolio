import Head from "next/head";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

const PageEn = () => {
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
      <Header lang="en" />
      <main className="flex flex-col justify-start items-center w-full sm:justify-center">
        <Hero lang="en" />
        <About lang="en" />
        <Services lang="en" />
        <Projects lang="en" />
        <Experience lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
};

export default PageEn;
