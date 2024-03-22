import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center w-full h-full pt-40">
        <Hero />
      </main>
    </>
  );
};

export default Home;
