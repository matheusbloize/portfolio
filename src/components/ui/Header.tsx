"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
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
        ? { src: "/static/images/close.svg", alt: "Close Nav Button." }
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
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <header className="lg:flex justify-between items-end w-[95%] mt-4 mx-auto">
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
            <p className="uppercase lg:text-16">Available For Work</p>
          </section>
        </section>
      </section>
      <nav
        ref={navRef}
        className={`flex flex-col leading-1em ${actualImage.alt !== "Matheus Bloize's Logo." ? "absolute bg-mb-base h-full text-32 gap-3 z-10 w-full m-0 top-0 left-0" : "text-20 mx-20 w-fit lg:text-32 lg:m-0"}`}
      >
        <section
          className={`${actualImage.alt !== "Matheus Bloize's Logo." ? "flex flex-col mt-24 gap-3 mx-auto" : "hidden lg:flex lg:flex-row lg:gap-8 lg:my-6"}`}
        >
          <Link className="relative border-link w-fit" href={"#about"}>
            About
          </Link>
          <Link className="relative border-link w-fit" href={"#services"}>
            Services
          </Link>
          <Link className="relative border-link w-fit" href={"#projects"}>
            Projects
          </Link>
          <Link className="relative border-link w-fit" href={"#experience"}>
            Experience
          </Link>
          <Link className="relative border-link w-fit" href={"#contact"}>
            Contact
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;