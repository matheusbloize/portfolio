"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import handleLink from "@/utils/handleLink";

const Header = ({ lang }: { lang: "en" | "br" }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [actualImage, setActualImage] = useState<{ src: string; alt: string }>({
    src: "/static/images/logo.svg",
    alt: "Matheus Bloize's Logo.",
  });

  const toggleImage = () => {
    if (window.innerWidth >= 1024) return;
    setActualImage(
      actualImage.alt === "Matheus Bloize's Logo."
        ? {
            src: "/static/images/close.svg",
            alt:
              lang === "en"
                ? "Close Nav Button."
                : "Botão de Fechar Navegação.",
          }
        : {
            src: "/static/images/logo.svg",
            alt: "Matheus Bloize's Logo.",
          },
    );
    if (navRef.current && logoRef.current) {
      if (actualImage.alt === "Matheus Bloize's Logo.") {
        navRef.current.style.animation =
          window.innerWidth > 768
            ? "nav-in-1024 .5s ease-in"
            : window.innerWidth <= 400
              ? "nav-in-400 .5s ease-in"
              : "nav-in-768 .5s ease-in";
      } else {
        navRef.current.style.animation = "";
      }
      logoRef.current.style.animation = "logo .5s ease-out";
      setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.style.animation = "";
        }
      }, 500);
    }
    if (actualImage.alt === "Matheus Bloize's Logo.") {
      document.body.style.overflow = "hidden";
      scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const checkWidth = () => {
    if (window.innerWidth >= 1024) {
      const actualImageHTML = document.querySelectorAll(
        "header img",
      )[0] as HTMLImageElement;
      if (actualImageHTML.alt === "Matheus Bloize's Logo.") return;
      setActualImage({
        src: "/static/images/logo.svg",
        alt: "Matheus Bloize's Logo.",
      });
    }
  };

  useEffect(() => {
    const alreadyVisitedStorage = localStorage.getItem(
      "already_visited",
    ) as string;
    if (alreadyVisitedStorage !== "true") {
      localStorage.setItem("already_visited", "true");
    }
    location.pathname === "/en"
      ? localStorage.setItem("selected_lang", "en_US")
      : localStorage.setItem("selected_lang", "pt_BR");
    if (modalRef.current) {
      modalRef.current.style.display = "none";
    }
    document.body.style.overflow = "auto";
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <header className="lg:flex justify-between items-end w-[95%] mt-4 mx-auto">
      <div
        ref={modalRef}
        className="fixed w-full h-full bg-mb-base top-0 left-0 z-30 flex justify-center items-center"
      >
        <div className="border-solid border-2 border-mb-black rounded-full animate-spin border-r-0 border-b-0 w-16 h-16"></div>
      </div>
      <section className="flex flex-row-reverse justify-center gap-2 relative z-20 lg:gap-0 lg:justify-normal lg:flex-col items-center">
        <Image
          ref={logoRef}
          className="transition-all cursor-pointer lg:cursor-auto"
          onClick={toggleImage}
          src={actualImage.src}
          alt={actualImage.alt}
          width={64}
          height={64}
        />
        <section className="flex flex-col items-center">
          <span className="text-32 leading-1em">Matheus Bloize</span>
          <section className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-mb-green rounded-full"></div>
            <p className="uppercase lg:text-16">
              {lang === "en"
                ? "Available for work"
                : "Disponível para trabalho"}
            </p>
          </section>
        </section>
      </section>
      <nav
        ref={navRef}
        onClick={(e) => handleLink(e, "header")}
        className={`flex flex-col leading-1em ${actualImage.alt !== "Matheus Bloize's Logo." ? "absolute bg-mb-base h-full text-32 gap-3 z-10 w-full m-0 top-0 left-0" : "text-20 mx-20 w-fit lg:text-32 lg:m-0"}`}
      >
        <section
          onClick={toggleImage}
          className={`${actualImage.alt !== "Matheus Bloize's Logo." ? "flex flex-col mt-24 gap-3 mx-auto" : "hidden lg:flex lg:flex-row lg:gap-8 lg:my-6"}`}
        >
          <button tabIndex={0} className="relative border-link w-fit">
            {lang === "en" ? "About" : "Sobre"}
          </button>
          <button tabIndex={0} className="relative border-link w-fit">
            {lang === "en" ? "Services" : "Serviços"}
          </button>
          <button tabIndex={0} className="relative border-link w-fit">
            {lang === "en" ? "Projects" : "Projetos"}
          </button>
          <button tabIndex={0} className="relative border-link w-fit">
            {lang === "en" ? "Experience" : "Experiência"}
          </button>
          <button tabIndex={0} className="relative border-link w-fit">
            {lang === "en" ? "Contact" : "Contato"}
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
