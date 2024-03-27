"use client";

import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRef } from "react";

import email from "@/assets/images/email.svg";
import github from "@/assets/images/github.svg";
import instagram from "@/assets/images/instagram.svg";
import linkedin from "@/assets/images/linkedin.svg";

const Contact = ({ lang }: { lang: "en" | "br" }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  let form_name: string, form_email: string, form_message: string;
  const sendEmailMutation = useMutation({
    mutationKey: ["send-email"],
    mutationFn: async () => {
      const query = (await import("@/utils/query")).default;
      return query(form_name, form_email, form_message);
    },
    onSuccess: () => {
      const formName = document.getElementsByName(
        "form_name",
      )[0] as HTMLInputElement;
      const formEmail = document.getElementsByName(
        "form_email",
      )[0] as HTMLInputElement;
      const formMessage = document.getElementsByName(
        "form_message",
      )[0] as HTMLTextAreaElement;
      const emailSentStorage = sessionStorage.getItem("email_sent") as string;
      if (emailSentStorage === "true") {
        formName.value = "";
        formEmail.value = "";
        formMessage.value = "";
        if (modalRef.current) {
          modalRef.current.style.animation = "slide-in .5s ease";
          modalRef.current.style.display = "flex";
          setTimeout(() => {
            modalRef.current!.style.animation = "";
            modalRef.current!.style.display = "none";
          }, 4000);
        }
      }
    },
  });

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formName = e.currentTarget.querySelectorAll(
      "input",
    )[0] as HTMLButtonElement;
    const formEmail = e.currentTarget.querySelectorAll(
      "input",
    )[1] as HTMLButtonElement;
    const formMessage = e.currentTarget.querySelectorAll(
      "textarea",
    )[0] as HTMLTextAreaElement;
    const regex = /^[\w+.áéíóúâêîôûãõç]+@\w+\.\w{2,}(?:\.\w{2})?$/gi;

    if (formName.value === "") {
      return formName.focus();
    }
    if (formEmail.value === "" || !regex.test(formEmail.value)) {
      return formEmail.focus();
    }
    if (formMessage.value === "") {
      return formMessage.focus();
    }

    form_name = formName.value;
    form_email = formEmail.value;
    form_message = formMessage.value;
    sendEmailMutation.mutate();
  };

  return (
    <section className="flex flex-col relative w-[95%] gap-8 h-fit mx-auto mb-20">
      <div
        ref={modalRef}
        className="hidden absolute z-20 font-general flex-col p-4 gap-4 items-center bg-mb-base border-solid border-2 border-mb-black rounded-lg [transform:translate(50%,0);] bottom-0 right-1/2 h-fit w-80 lg:top-[15%] lg:bottom-auto"
      >
        <span className="font-bold text-32 leading-1.5em">
          {lang === "en" ? "Thank you!" : "Obrigado!"}
        </span>
        <p className="text-24 leading-1em">
          {lang === "en" ? "Your email was sent!" : "Seu email foi enviado!"}{" "}
          <br />{" "}
          {lang === "en"
            ? "I'll read and respond soon!"
            : "Responderei em breve!"}
        </p>
      </div>
      <section className="flex flex-col">
        <h2
          className={`font-bold ${lang === "en" ? "text-48" : "text-46.4"} leading-1em uppercase sm:text-64 lg:text-94`}
        >
          {lang === "en" ? "If you're interested" : "Caso esteja interessado"}
        </h2>
        <span className="text-20 leading-.5em lg:text-36">
          {lang === "en" ? "let's chat!" : "vamos conversar!"}
        </span>
      </section>
      <section className="flex flex-col gap-8 lg:gap-40 lg:flex-row lg:w-[85%] lg:max-w-7xl">
        <form
          onSubmit={handleSendEmail}
          className="flex flex-col gap-4 relative"
        >
          <label
            htmlFor="form_name"
            className="absolute font-medium px-2 z-10 -top-3 left-4"
          >
            {lang === "en" ? "name" : "nome"}
          </label>
          <input
            id="form_name"
            className="bg-transparent border-solid border-2 relative border-mb-black rounded-lg py-4 px-6 font-medium transition-all focus:outline-mb-white"
            type="text"
            name="form_name"
            autoComplete="off"
          />
          <label
            htmlFor="form_email"
            className="absolute font-medium px-2 z-10 top-16 left-4"
          >
            email
          </label>
          <input
            id="form_email"
            className="bg-transparent border-solid border-2 border-mb-black rounded-lg py-4 px-6 font-medium transition-all focus:outline-mb-white"
            type="email"
            name="form_email"
            autoComplete="off"
          />
          <label
            htmlFor="form_message"
            className="absolute font-medium px-2 z-10 top-[8.75rem] left-4"
          >
            {lang === "en" ? "message" : "mensagem"}
          </label>
          <textarea
            id="form_message"
            className="bg-transparent border-solid border-2 border-mb-black rounded-lg py-4 px-6 font-medium transition-all focus:outline-mb-white"
            cols={30}
            rows={5}
            name="form_message"
            autoComplete="off"
          ></textarea>
          <button
            className="bg-transparent border-solid border-2 border-mb-black rounded-lg py-2 px-8 self-start font-medium transition-all hover:text-mb-base hover:bg-mb-black disabled:cursor-not-allowed"
            type="submit"
            name="form_button"
          >
            {lang === "en" ? "submit" : "enviar"}
          </button>
        </form>
        <section className="flex gap-2 justify-center">
          <a
            className="transition-all relative border-link h-fit"
            href="mailto:mbloizepd@gmail.com"
            target="_blank"
          >
            <Image
              src={email}
              alt={lang === "en" ? "Email Icon." : "Ícone de Email."}
              width={40}
              height={40}
            />
          </a>
          <a
            className="transition-all relative border-link h-fit"
            href="https://github.com/matheusbloize"
            target="_blank"
          >
            <Image
              src={github}
              alt={lang === "en" ? "GitHub Icon." : "Ícone do GitHub."}
              width={40}
              height={40}
            />
          </a>
          <a
            className="transition-all relative border-link h-fit"
            href="https://www.linkedin.com/in/matheus-bloize/"
            target="_blank"
          >
            <Image
              src={linkedin}
              alt={lang === "en" ? "LinkedIn Icon." : "Ícone do LinkedIn."}
              width={40}
              height={40}
            />
          </a>
          <a
            className="transition-all relative border-link h-fit"
            href="https://www.instagram.com/matheus.bloize/"
            target="_blank"
          >
            <Image
              src={instagram}
              alt={lang === "en" ? "Instagram Icon." : "Ícone do Instagram."}
              width={40}
              height={40}
            />
          </a>
        </section>
      </section>
    </section>
  );
};

export default Contact;
