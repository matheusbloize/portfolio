import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-start items-center w-full h-full pt-32 sm:justify-center sm:pt-0 lg:pt-40">
        <Hero />
      </main>
    </>
  );
};

export default Home;
