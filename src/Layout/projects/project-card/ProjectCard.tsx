import { FaArrowAltCircleRight } from "react-icons/fa";

interface Props {
  projectName: string;
  projectLink: string;
  thumbNail: any;
}

export const ProjectCard = ({ projectName, projectLink, thumbNail }: Props) => {
  return (
    <div>
      <div className="grid gap-2 rounded-xl bg-[#1D1D1D] p-5">
        <img
          src={thumbNail}
          alt="Thumbnail"
          className="h-[250px] w-[250px] rounded-xl md:w-[300px] lg:w-[500px]"
        />
        <span className="flex text-lg font-medium">{projectName}</span>
        <a href={projectLink} className="text-md flex items-center gap-2">
          Demo <FaArrowAltCircleRight />
        </a>
      </div>
    </div>
  );
};
