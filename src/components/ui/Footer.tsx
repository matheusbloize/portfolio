"use client";

import Image from "next/image";

import handleLink from "@/utils/handleLink";

const Footer = ({ lang }: { lang: "en" | "br" }) => {
  return (
    <footer className="flex flex-col">
      <section className="flex relative">
        <section className="flex w-full justify-around z-10 lg:w-[65%]">
          <section className="flex flex-col text-24 lg:text-36">
            <h3 className="font-bold uppercase">
              {lang === "en" ? "Navigation" : "Navegação"}
            </h3>
            <nav
              onClick={(e) => handleLink(e, "footer")}
              className="flex flex-col"
            >
              <button className="relative border-link w-fit">
                {lang === "en" ? "Home" : "Início"}
              </button>
              <button className="relative border-link w-fit">
                {lang === "en" ? "About" : "Sobre"}
              </button>
              <button className="relative border-link w-fit">
                {lang === "en" ? "Services" : "Serviços"}
              </button>
              <button className="relative border-link w-fit">
                {lang === "en" ? "Projects" : "Projetos"}
              </button>
              <button className="relative border-link w-fit">
                {lang === "en" ? "Experience" : "Experiência"}
              </button>
              <button className="relative border-link w-fit">
                {lang === "en" ? "Contact" : "Contato"}
              </button>
            </nav>
          </section>
          <section className="flex flex-col text-24 lg:text-36">
            <h3 className="font-bold uppercase">
              {lang === "en" ? "Socials" : "Sociais"}
            </h3>
            <nav className="flex flex-col">
              <a
                className="border-link relative w-fit"
                href="https://github.com/matheusbloize"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="border-link relative w-fit"
                href="https://www.linkedin.com/in/matheus-bloize/"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="border-link relative w-fit"
                href="https://www.instagram.com/matheus.bloize/"
                target="_blank"
              >
                Instagram
              </a>
            </nav>
          </section>
        </section>
        <section className="w-full h-full absolute bottom-[-85%] lg:static lg:w-[30vw] lg:h-80">
          <Image
            className="absolute w-full h-full mx-auto -z-10 object-contain lg:object-fill lg:w-[30vw] lg:h-80"
            src={"/static/images/brain.webp"}
            alt={lang === "en" ? "Brain Shape." : "Forma de Cérebro."}
            width={1138}
            height={795}
          />
          <section className="relative h-full">
            <p className="w-fit absolute left-1/2 top-1/2 [transform:translate(-50%,-50%);] opacity-20">
              {lang === "en" ? "Yes, it's a brain" : "Sim, é um cérebro"}
            </p>
          </section>
        </section>
      </section>
      <p className="text-center py-14 text-24 lg:text-36 lg:py-12">
        @ {new Date().getFullYear()} - Matheus Bloize
      </p>
    </footer>
  );
};

export default Footer;
