import project_01_mobile from "@/assets/images/project_01_mobile.webp";
import project_01_pc from "@/assets/images/project_01_pc.webp";

import Project from "../projects/Project";

const Projects = () => {
  return (
    <section className="flex flex-col w-[95%] gap-8 h-screen mx-auto">
      <section className="flex flex-col">
        <h2 className="font-bold text-48 leading-1em uppercase sm:text-64 lg:text-94">
          What I made
        </h2>
        <span className="text-20 leading-.5em lg:text-36">so far</span>
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
          description="Math Delivery is a complete delivery system. With delivery,
              take-away and table reservation options, it comes with account
              creation by roles &#40;customer, manager and administrator&#41;
              and an administration area to manage all the system's
              information. It's an easy-to-use site designed to work with
              restaurants."
          tech={[
            "Next.js",
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
