import Image from "next/image";

import code from "@/assets/images/code.svg";
import javascript from "@/assets/images/javascript.svg";
import line from "@/assets/images/line.svg";
import next from "@/assets/images/next.svg";
import react from "@/assets/images/react.svg";
import typescript from "@/assets/images/typescript.svg";

const Services = () => {
  return (
    <section className="flex flex-col w-[95%] gap-8 h-fit mx-auto mb-20">
      <h2 className="font-bold text-48 leading-1em uppercase sm:text-64 lg:text-94">
        What I do
      </h2>
      <section className="flex flex-col">
        <article className="flex flex-col">
          <section className="flex items-center gap-2">
            <Image
              className="w-[30px] h-[5px] lg:w-[75px] lg:h-[15px]"
              src={line}
              alt="Line Icon."
              width={75}
              height={15}
            />
            <h3 className="font-bold text-20 uppercase sm:text-48">
              Web Development
            </h3>
            <Image
              className="w-8 h-8 lg:w-16 lg:h-16"
              src={code}
              alt="Code Icon."
              width={64}
              height={64}
            />
          </section>
          <p className="font-general text-16 sm:text-32">
            I build websites based in designs that I get, actually I&apos;m
            learning how to do them also. I search for modern tools to use in
            all my projects, to get an updated service.
          </p>
          <section className="flex gap-2 items-center">
            <p className="font-general text-16 sm:text-32">Tools:</p>
            <section className="flex">
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={javascript}
                alt="JavaScript Icon."
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={typescript}
                alt="TypeScript Icon."
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={react}
                alt="React Icon."
                width={64}
                height={64}
              />
              <Image
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={next}
                alt="Next Icon."
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
