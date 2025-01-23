import Exp from "../experience/Exp";

const Experience = ({ lang }: { lang: "en" | "br" }) => {
  return (
    <section className="flex flex-col w-[95%] gap-8 h-fit mx-auto mb-20">
      <h2 className="font-bold text-48 leading-1em uppercase sm:text-64 lg:text-94">
        {lang === "en" ? "Where I worked" : "Onde trabalhei"}
      </h2>
      <section className="flex flex-col gap-8">
        <Exp
          role={lang === "en" ? "Frontend Developer" : "Desenvolvedor Frontend"}
          company="Juniors Developers Group"
          date={
            lang === "en" ? "may/23 - february/24" : "maio/23 - fevereiro/24"
          }
          description={
            lang === "en"
              ? "I built, developed and collaborated with the team to create two Next.js projects from scratch. A Social Network, where my main function was to develop and finish the tasks on time, and an E-Commerce, where I was the leader of the frontend team and my objectives were to develop, organize the code and tasks and help the team members."
              : "Construí, desenvolvi e colaborei com o time para criar dois projetos Next.js do zero. Uma Rede Social, onde minha principal função era desenvolver e finalizar as tarefas no prazo, e um E-Commerce, onde fui o líder do time de frontend e meus objetivos foram desenvolver, organizar o código e tarefas e ajudar os membros do time."
          }
          tech={[
            "Next.js (React.js)",
            "TypeScript",
            "TailwindCSS",
            "React Query",
          ]}
          preposition={lang === "en" ? "at" : "no"}
        />
        <Exp
          role={
            lang === "en"
              ? "Frontend Developer Intern"
              : "Desenvolvedor Frontend Estagiário"
          }
          company="Aeroespacial"
          date={
            lang === "en" ? "june/23 - september/23" : "junho/23 - setembro/23"
          }
          description={
            lang === "en"
              ? "I collaborated with the team by doing tasks in React.js and some product research. I had to get out of my comfort zone to understand new technologies such as Python, Linux and PostgreSQL. I also took part in daily meetings and managed to understand how different people in the team solve their problems."
              : "Colaborei com o time fazendo tarefas em React.js e algumas pesquisas de produto. Tive que sair da minha zona de conforto para entender novas tecnologias como Python, Linux e PostgreSQL. Também participei de reuniões diárias e consegui entender como diferentes pessoas do time resolvem seus problemas."
          }
          tech={["React.js", "PostgreSQL", "Linux/WSL", "Python", "Figma"]}
          preposition={lang === "en" ? "at" : "na"}
        />
      </section>
    </section>
  );
};

export default Experience;
