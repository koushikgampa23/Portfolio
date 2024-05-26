import { SectionHeading } from "../../components/section-heading/SectionHeading";
import { ProjectCard } from "./project-card/ProjectCard";

interface Props {
  projects: Project[];
}

interface Project {
  projectName: string;
  projectLink: string;
  thumbNail: any;
}

export const Projects = ({ projects }: Props) => {
  return (
    <div className="sectionTopPadding" id="Projects">
      <SectionHeading heading={"Portfolio"} subHeading={"Personal Projects"} />
      <div className="personalProjectContainer">
        {projects.map((project, key) => {
          return (
            <ProjectCard
              projectName={project.projectName}
              projectLink={project.projectLink}
              thumbNail={project.thumbNail}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};
