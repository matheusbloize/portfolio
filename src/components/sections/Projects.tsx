import project_01_mobile from "@/assets/images/project_01_mobile.webp";
import project_01_pc from "@/assets/images/project_01_pc.webp";

import Project from "../projects/Project";

const Projects = ({ lang }: { lang: "en" | "br" }) => {
  return (
    <section className="flex flex-col w-[95%] gap-8 h-fit mx-auto mb-20">
      <section className="flex flex-col">
        <h2 className="font-bold text-48 leading-1em uppercase sm:text-64 lg:text-94">
          {lang === "en" ? "What I made" : "O que fiz"}
        </h2>
        <span className="text-20 leading-.5em lg:text-36">
          {lang === "en" ? "so far" : "até agora"}
        </span>
      </section>
      <section className="flex flex-col">
        <Project
          name="Math Delivery"
          images={{
            pc: project_01_pc,
            mobile: project_01_mobile,
            pcWidth: 680,
            pcHeight: 1448,
            mobileWidth: 2472,
            mobileHeight: 1420,
          }}
          description={
            lang === "en"
              ? "Math Delivery is a complete delivery system. It offers delivery, takeaway and table reservation options, as well as account creation by role (customers, manager and administrator) and an administration area to manage all the system's information. It's an easy-to-use site designed to work with restaurants."
              : "Math Delivery é um sistema completo de delivery. Com as opções de entrega, retirada e reserva de mesas, além de vir com criação de contas por cargos (clientes, gerente e administrador) e uma área de administração para gerenciar todas as informações do sistema. É um site fácil de utilizar, criado para trabalhar com restaurantes."
          }
          tech={[
            "Next.js (React.js)",
            "TypeScript",
            "Mongo DB",
            "React Query",
            "Next Auth",
            "Cloudinary",
            "Resend",
          ]}
          link="https://mathdelivery.com.br"
        />
      </section>
    </section>
  );
};

export default Projects;
