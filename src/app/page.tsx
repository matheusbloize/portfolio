import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-start items-center w-full sm:justify-center">
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
};

export default Home;
