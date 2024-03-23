import Image from "next/image";

import brain from "@/assets/images/brain.svg";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-4 md:px-0">
      <Image
        // className="absolute -z-10 [transform:translate(0,3%);]"
        className="absolute -z-10 [transform:translate(0,1.5em);] h-[80vh]"
        src={brain}
        alt="Brain Shape."
        width={1138}
        height={795}
        priority
      />
      <section className="flex flex-col">
        <p className="font-general text-20 leading-1em text-center sm:text-start md:text-36">
          Hi, I&apos;m
        </p>
        <h1 className="font-bold uppercase text-64 leading-1em text-center sm:text-start md:text-94 lg:text-120">
          Matheus Bloize
        </h1>
        <p className="font-general text-center text-20 leading-1em md:text-36">
          a chill frontend developer
        </p>
      </section>
    </section>
  );
};

export default Hero;
