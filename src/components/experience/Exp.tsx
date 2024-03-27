import Tech from "../general/Tech";

interface Props {
  role: string;
  company: string;
  date: string;
  description: string;
  tech: string[];
  preposition: "at" | "na" | "no";
}

const Exp = ({
  role,
  company,
  date,
  description,
  tech,
  preposition,
}: Props) => {
  return (
    <article className="flex flex-col font-general gap-6 p-4 border-solid border-[1px] border-mb-black rounded-lg lg:w-[85%] lg:max-w-7xl">
      <section className="flex items-center flex-col sm:items-start">
        <section className="flex flex-col items-center sm:flex-row sm:gap-1">
          <h3 className="text-20 leading-1em font-medium sm:text-24 lg:text-36">
            {role}
          </h3>
          <div className="hidden text-20 sm:inline sm:text-24 lg:text-36">
            {preposition}
          </div>
          <h4 className="text-20 leading-1em font-medium  sm:text-24 lg:text-36">
            {company}
          </h4>
        </section>
        <span className="text-14 leading-1.5em lg:text-20">{date}</span>
      </section>
      <section className="flex flex-col">
        <p className="text-14 lg:text-20">{description}</p>
        <section className="flex flex-wrap gap-4 mt-4">
          {tech.map((skill) => (
            <Tech key={skill} name={skill} />
          ))}
        </section>
      </section>
    </article>
  );
};

export default Exp;
