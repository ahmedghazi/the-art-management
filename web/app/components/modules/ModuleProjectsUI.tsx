import React from "react";
import clsx from "clsx";
import Figure from "../ui/Figure";
import { ProjectsUI } from "@/app/types/schema";

interface Props {
  input: ProjectsUI;
}

const ModuleProjectsUI = ({ input }: Props) => {
  const { title, items = [] } = input;

  return (
    <section className={clsx("module module--projects")}>
      <h2 className='module__title'>{title}</h2>
      <div className='projects__grid'>
        {items.map((project) => (
          <div key={project._id} className='projects__item'>
            {project.imageCover && <Figure asset={project.imageCover.asset} />}
            {project.title && <h3>{project.title.fr}</h3>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModuleProjectsUI;
