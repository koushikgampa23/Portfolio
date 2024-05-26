import { SectionHeading } from "../../components/section-heading/SectionHeading";
import { SkillCard } from "./skill-card/SkillCard";

interface Props {
  tech: Skill[];
}

interface Skill {
  title: string;
  skills: string[];
}

export const Skills = ({ tech }: Props) => {
  return (
    <div className="sectionTopPadding" id="Skills">
      <SectionHeading heading={"Skills"} subHeading={""} />
      <div className="personalProjectContainer">
        {tech.map((item, index) => {
          return (
            <SkillCard title={item.title} skills={item.skills} key={index} />
          );
        })}
      </div>
    </div>
  );
};
