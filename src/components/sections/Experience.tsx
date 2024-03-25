import Exp from "../experience/Exp";

const Experience = () => {
  return (
    <section className="flex flex-col w-[95%] gap-8 h-fit mx-auto mb-20">
      <h2 className="font-bold text-48 leading-1em uppercase sm:text-64 lg:text-94">
        Where I worked
      </h2>
      <section className="flex flex-col gap-8">
        <Exp
          role="Frontend Developer"
          company="Juniors Developers Group"
          date="may/23 - february/24"
          description="I built, developed and collaborated with the team to create 2 projects from scratch.A Social Network, where my main task was to develop and finish tasks on time, and an E-Commerce, where I was the leader of the frontend team and my objectives were to develop, organize the code and tasks and help team members."
          tech={["Next.js", "TypeScript", "TailwindCSS", "React Query"]}
        />
        <Exp
          role="Frontend Developer Intern"
          company="Aeroespacial"
          date="june/23 - september/23"
          description="I collaborated with the team by carrying out tasks and some product research. I had to get out of my comfort zone to understand new technologies such as Python, Linux and PostgreSQL. As well as taking part in dailys and understanding how different people solve their problems."
          tech={["React.js", "PostgreSQL", "Linux/WSL", "Python", "Figma"]}
        />
      </section>
    </section>
  );
};

export default Experience;
