import Image from "next/image";

import github from "@/assets/images/github.svg";
import instagram from "@/assets/images/instagram.svg";
import linkedin from "@/assets/images/linkedin.svg";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-start w-full h-screen">
      <section className="w-full h-[85vh] flex flex-col justify-center items-center gap-8">
        <Image
          className="absolute w-[120vh] h-[80vh] -z-10 object-cover"
          src={"/static/images/brain.webp"}
          alt="Brain Shape."
          width={1138}
          height={795}
          priority
          loading="eager"
        />
        <section className="flex flex-col">
          <p className="font-general text-20 leading-1em md:text-36">
            Hi, I&apos;m
          </p>
          <h1 className="font-bold uppercase text-64 leading-1em md:text-94 lg:text-120">
            Matheus <br className="sm:hidden" /> Bloize
          </h1>
          <p className="font-general text-center text-20 leading-1em md:text-36">
            a chill frontend developer
          </p>
        </section>
        <section className="flex gap-8">
          <a
            className="border-link relative w-fit"
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
            className="border-link relative w-fit"
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
            className="border-link relative w-fit"
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
    </section>
  );
};

export default Hero;
