import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.svg";

const Header = () => {
  return (
    <header className="hidden lg:flex justify-between items-end w-[95%] mt-4 mx-auto">
      <section className="flex flex-col items-center">
        <Image src={logo} alt="Matheus Bloize's Logo." width={64} height={64} />
        <span className="md:text-32">Matheus Bloize</span>
        <section className="flex gap-1">
          <div className="w-3 h-3 bg-mb-green rounded-full"></div>
          <p className="uppercase md:text-16">Available For Work</p>
        </section>
      </section>
      <nav className="flex gap-8 my-6 md:text-32">
        <Link href={"#about"}>About</Link>
        <Link href={"#services"}>Services</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#experience"}>Experience</Link>
        <Link href={"#contact"}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
