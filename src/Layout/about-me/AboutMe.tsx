import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { SectionHeading } from "../../components/section-heading/SectionHeading";
import { SubCard } from "../../components/sub-card/SubCard";

interface Props {
  Logo: any;
  aboutMe: {
    experience: string[];
    projectsCompleted: string[];
    solved: string[];
    detailedDescription: string;
  };
  Resume: any;
}

export const AboutMe = ({ Logo, aboutMe, Resume }: Props) => {
  const handleDownload = () => {
    const anchorElement = document.createElement("a");
    anchorElement.href = Resume;
    anchorElement.download = "koushikgampa.pdf";
    anchorElement.click();
  };
  return (
    <div>
      <SectionHeading heading="About Me" subHeading="My Introduction" />
      <div className="customContainer gap-5">
        <img src={Logo} className="h-[350px] w-[300px]" alt="logo" />
        <div className="ml-8">
          <div className="flex gap-3 py-6">
            <SubCard
              heading="Experience"
              content={aboutMe.experience}
              icon={<FaBriefcase />}
            />
            <SubCard
              heading="Completed"
              content={aboutMe.projectsCompleted}
              icon={<FaLaptopCode />}
            />
            <SubCard
              heading="Solved"
              content={aboutMe.solved}
              icon={<SlGraph />}
            />
          </div>
          <div className="grid gap-1">
            <span className="textLength">{aboutMe.detailedDescription}</span>
            <button
              className="primaryButton justify-center"
              onClick={() => handleDownload()}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
