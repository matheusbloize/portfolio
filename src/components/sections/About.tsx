import Image from "next/image";

import math from "@/assets/images/math.webp";
import rd from "@/assets/images/rd.svg";

const About = ({ lang }: { lang: "en" | "br" }) => {
  return (
    <section className="flex flex-col w-[95%] gap-8 h-fit mx-auto mb-20">
      <h2 className="font-bold text-48 leading-1em uppercase sm:text-64 lg:text-94">
        {lang === "en" ? "Pleased to meet you" : "Prazer em te conhecer"}
      </h2>
      <section className="flex flex-col gap-16 sm:flex-row sm:gap-4">
        <Image
          className="rounded-lg h-[80%] flex-1 sm:w-fit md:h-fit"
          src={math}
          alt={
            lang === "en"
              ? "Matheus Bloize Image."
              : "Imagem do Matheus Bloize."
          }
          width={591}
          height={788}
        />
        <section className="flex flex-col gap-8 font-general flex-[2]">
          <p className="text-16 inline leading-1.5em lg:text-24">
            <span className="font-medium text-24">M</span>
            {lang === "en"
              ? "y main goal is to help people with my work by creating easy and accessible interfaces. Focusing on making everything work as well as possible."
              : "eu principal objetivo é ajudar as pessoas com meu trabalho, criando interfaces fáceis e acessíveis. Com o foco em fazer tudo funcionar da melhor maneira possível."}
          </p>
          <p className="text-16 inline leading-1.5em lg:text-24">
            <span className="font-medium text-24">A</span>
            {lang === "en"
              ? "fter a few attempts at learning to program, I started focusing on the basics of web development with HTML, CSS and JavaScript. As I was finally learning something, my motivation made me evolve and here I am."
              : "pós algumas tentativas de aprender a programar, comecei a focar no básico do desenvolvimento web com HTML, CSS e JavaScript. Quando finalmente comecei a aprender algo, minha motivação me fez evoluir e aqui estou."}
          </p>
          <p className="text-16 inline leading-1.5em lg:text-24">
            <span className="font-medium text-24">T</span>
            {lang === "en"
              ? "he things that I like to do, besides coding, are work out (currently only running), read, relax, listen to podcasts, also sometimes play and study."
              : "irando programar, as coisas que gosto de fazer são treinar (atualmente somente corrida), ler, relaxar, ouvir podcasts, jogar de vez em quando e estudar."}
            <span className="inline-block">
              <Image
                className="w-4 h-5 lg:w-6 lg:h-7"
                src={rd}
                alt={
                  lang === "en"
                    ? "Reservatório de Dopamina's Logo"
                    : "Logo do Reservatório de Dopamina."
                }
                width={24}
                height={28}
              />
            </span>
          </p>
        </section>
      </section>
    </section>
  );
};

export default About;
