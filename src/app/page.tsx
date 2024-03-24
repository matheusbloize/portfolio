import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-start items-center w-full sm:justify-center">
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
