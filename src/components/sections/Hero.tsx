import Image from "next/image";

import github from "@/assets/images/github.svg";
import instagram from "@/assets/images/instagram.svg";
import linkedin from "@/assets/images/linkedin.svg";

const Hero = ({ lang }: { lang: "en" | "br" }) => {
  return (
    <section className="relative flex flex-col items-center justify-start w-full h-screen">
      <section className="w-full h-[85vh] flex flex-col justify-center items-center gap-8">
        <picture className="absolute flex w-full h-full justify-center items-center -z-10">
          <source type="image/webp" />
          <Image
            className="absolute w-[120vh] h-[80vh] -z-10 object-cover"
            src={"/static/images/brain.webp"}
            alt={lang === "en" ? "Brain Shape." : "Forma de Cérebro."}
            width={1138}
            height={795}
            priority
            sizes="67.52vw"
          />
        </picture>
        <section className="flex flex-col">
          <p className="font-general text-20 leading-1em md:text-36">
            {lang === "en" ? "Hi, I'm" : "Olá, sou o"}
          </p>
          <h1 className="font-bold uppercase text-64 leading-1em md:text-94 lg:text-120">
            Matheus <br className="sm:hidden" /> Bloize
          </h1>
          <p className="font-general text-center text-20 leading-1em md:text-36">
            {lang === "en"
              ? "a chill fullstack developer"
              : "um desenvolvedor fullstack tranquilo"}
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
              alt={
                lang === "en"
                  ? "Matheus Bloize's Github."
                  : "GitHub do Matheus Bloize."
              }
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
              alt={
                lang === "en"
                  ? "Matheus Bloize's LinkedIn."
                  : "LinkedIn do Matheus Bloize"
              }
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
              alt={
                lang === "en"
                  ? "Matheus Bloize's Instagram."
                  : "Instagram do Matheus Bloize."
              }
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
