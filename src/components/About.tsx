import Image from "next/image";

import math from "@/assets/images/math.webp";
import rd from "@/assets/images/rd.svg";

const About = () => {
  return (
    <section className="flex flex-col w-[95%] gap-8 h-screen mx-auto">
      <h2 className="font-bold text-32 leading-1em uppercase sm:text-64 lg:text-94">
        Pleased to meet you
      </h2>
      <section className="flex flex-col gap-16 sm:flex-row sm:gap-4">
        <Image
          className="rounded-lg h-fit sm:w-fit lg:h-[80%]"
          src={math}
          alt="Matheus Bloize Image."
          width={591}
          height={788}
          priority
        />
        <section className="flex flex-col gap-8 font-general flex-[2]">
          <p className="text-16 inline leading-1.5em lg:text-24">
            <span className="font-medium text-24">M</span>y main goal is to help
            people with my work by creating easy and accessible interfaces.
            Focusing on making everything work as well as possible.
          </p>
          <p className="text-16 inline leading-1.5em lg:text-24">
            <span className="font-medium text-24">A</span>fter a few attempts at
            learning to program, I started focusing on the basics of web
            development with HTML, CSS and JavaScript. As I was finally learning
            something, my motivation made me evolve and here I am.
          </p>
          <p className="text-16 inline leading-1.5em lg:text-24">
            <span className="font-medium text-24">T</span>
            he things that I like to do, besides coding, are work out
            &#40;currently only running&#41;, read, relax, listen to podcasts,
            also sometimes play and study.
            <span className="inline-block">
              <Image
                className="w-4 h-5 lg:w-6 lg:h-7"
                src={rd}
                alt="Reservatório de Dopamina's Logo"
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
