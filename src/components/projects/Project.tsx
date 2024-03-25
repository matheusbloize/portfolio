import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  images: {
    pc: StaticImageData;
    mobile: StaticImageData;
    pcWidth: number;
    pcHeight: number;
    mobileWidth: number;
    mobileHeight: number;
  };
  description: string;
  tech: string[];
  link: string;
}

const Tech = ({ name }: { name: string }) => {
  return (
    <div className="bg-mb-black font-medium text-mb-white py-2 px-6 rounded-lg w-fit font-general text-14">
      {name}
    </div>
  );
};

const Project = ({ name, images, description, tech, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col items-center p-4 rounded-lg border-solid border-2 border-mb-black w-full lg:w-3/4"
    >
      <h3 className="font-bold font-general text-32 lg:text-36">{name}</h3>
      <section className="flex flex-col gap-8 lg:flex-row">
        <section className="flex flex-col gap-4 my-4 mx-auto flex-1 sm:flex-row lg:my-0">
          <Image
            className="w-full h-fit mx-auto flex-1 sm:w-1/2 sm:m-0 lg:w-[70%]"
            src={images.pc}
            alt={`${name} Project PC.`}
            width={images.pcWidth}
            height={images.pcHeight}
          />
          <Image
            className="w-1/2 h-fit mx-auto sm:w-1/4 sm:m-0 lg:h-fit"
            src={images.mobile}
            alt={`${name} Project Mobile.`}
            width={images.mobileWidth}
            height={images.mobileHeight}
          />
        </section>
        <p className="font-general w-fit text-16 flex-1 lg:text-20">
          {description}
        </p>
      </section>
      <section className="flex flex-wrap gap-4 mt-4">
        {tech.map((skill) => (
          <Tech key={skill} name={skill} />
        ))}
      </section>
    </a>
  );
};

export default Project;
