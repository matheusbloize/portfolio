import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <section className="flex relative">
        <section className="flex w-full justify-around lg:w-[65%]">
          <section className="flex flex-col text-24 lg:text-36">
            <h5 className="font-bold uppercase">Navigation</h5>
            <nav className="flex flex-col">
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
            </nav>
          </section>
          <section className="flex flex-col text-24 lg:text-36">
            <h5 className="font-bold uppercase">Socials</h5>
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
            alt="Brain Shape."
            width={1138}
            height={795}
          />
          <section className="relative h-full">
            <p className="w-fit absolute left-1/2 top-1/2 [transform:translate(-50%,-50%);] opacity-20">
              Yes, it&apos;s a brain
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
