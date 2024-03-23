import Image from "next/image";

import brain from "@/assets/images/brain.svg";
import github from "@/assets/images/github.svg";
import instagram from "@/assets/images/instagram.svg";
import linkedin from "@/assets/images/linkedin.svg";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-4 md:px-0">
      <Image
        // className="absolute -z-10 [transform:translate(0,3%);]"
        className="absolute -z-10 [transform:translate(0,1.5em);] h-[90vh]"
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
      <section className="flex gap-8 absolute -bottom-16">
        <a
          className="border-link relative"
          href="https://github.com/matheusbloize"
          target="_blank"
        >
          <Image
            src={github}
            alt="Matheus Bloize's Github."
            width={32}
            height={32}
          />
        </a>
        <a
          className="border-link relative"
          href="https://www.linkedin.com/in/matheus-bloize/"
          target="_blank"
        >
          <Image
            src={linkedin}
            alt="Matheus Bloize's LinkedIn."
            width={32}
            height={32}
          />
        </a>
        <a
          className="border-link relative"
          href="https://www.instagram.com/matheus.bloize/"
          target="_blank"
        >
          <Image
            src={instagram}
            alt="Matheus Bloize's Instagram."
            width={32}
            height={32}
          />
        </a>
      </section>
    </section>
  );
};

export default Hero;
