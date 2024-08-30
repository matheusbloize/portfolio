import Image from "next/image";

import code from "@/assets/images/code.svg";
import css from "@/assets/images/css.svg";
import database from "@/assets/images/database.svg";
import figma from "@/assets/images/figma.svg";
import git from "@/assets/images/git.svg";
import github from "@/assets/images/github_service.svg";
import html from "@/assets/images/html.svg";
import javascript from "@/assets/images/javascript.svg";
import line from "@/assets/images/line.svg";
import next from "@/assets/images/next.svg";
import react from "@/assets/images/react.svg";
import typescript from "@/assets/images/typescript.svg";

const Services = ({ lang }: { lang: "en" | "br" }) => {
  return (
    <section className="flex flex-col w-[95%] gap-8 h-fit mx-auto mb-20">
      <h2 className="font-bold text-48 leading-1em uppercase sm:text-64 lg:text-94">
        {lang === "en" ? "What I do" : "O que faço"}
      </h2>
      <section className="flex flex-col">
        <article className="flex flex-col">
          <section className="flex items-center gap-2">
            <Image
              className="w-[30px] h-[5px] lg:w-[75px] lg:h-[15px]"
              src={line}
              alt={lang === "en" ? "Line Icon." : "Ícone de Linha."}
              width={75}
              height={15}
            />
            <h3 className="font-bold text-20 uppercase sm:text-48">
              {lang === "en" ? "Web Development" : "Desenvolvimento Web"}
            </h3>
            <Image
              className="w-8 h-8 lg:w-16 lg:h-16"
              src={code}
              alt={lang === "en" ? "Code Icon." : "Ícone de Código."}
              width={64}
              height={64}
            />
          </section>
          <p className="font-general text-16 sm:text-32">
            {lang === "en"
              ? "I build websites based in designs that I get, actually I'm learning how to do them also. I search for modern tools to use in all my projects, to get an updated service."
              : "Eu crio websites baseado em designs que recebo, atualmente estou aprendendo a fazê-los também. Pesquiso por ferramentas modernas para usar em todos os meus projetos, para ter um serviço atualizado."}
          </p>
          <section className="flex gap-2 items-center flex-wrap">
            <p className="font-general text-16 font-semibold sm:text-32">
              {lang === "en" ? "Tools:" : "Ferramentas:"}
            </p>
            <section className="flex flex-wrap">
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={javascript}
                alt={
                  lang === "en" ? "JavaScript Icon." : "Ícone do JavaScript."
                }
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={typescript}
                alt={
                  lang === "en" ? "TypeScript Icon." : "Ícone do TypeScript."
                }
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={react}
                alt={lang === "en" ? "React.js Icon." : "Ícone do React.js."}
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={next}
                alt={lang === "en" ? "Next Icon." : "Ícone do Next.js."}
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={html}
                alt={lang === "en" ? "HTML Icon." : "Ícone do HTML."}
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={css}
                alt={lang === "en" ? "CSS Icon." : "Ícone do CSS."}
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={git}
                alt={lang === "en" ? "Git Icon." : "Ícone do Git."}
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={github}
                alt={lang === "en" ? "GitHub Icon." : "Ícone do GitHub."}
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={figma}
                alt={lang === "en" ? "Figma Icon." : "Ícone do Figma."}
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={database}
                alt={
                  lang === "en" ? "Database Icon." : "Ícone de Banco de Dados."
                }
                width={64}
                height={64}
              />
            </section>
          </section>
        </article>
      </section>
    </section>
  );
};

export default Services;
