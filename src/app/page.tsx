import Head from "next/head";

import Header from "@/components/Header";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

const Home = () => {
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
      <Header />
      <main className="flex flex-col justify-start items-center w-full sm:justify-center">
        <Hero />
        <About />
        <Services />
        <Projects />
      </main>
    </>
  );
};

export default Home;
