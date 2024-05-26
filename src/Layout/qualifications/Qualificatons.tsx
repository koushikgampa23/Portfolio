import { ConfigProvider, Timeline } from "antd";
import { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { SectionHeading } from "../../components/section-heading/SectionHeading";
import { TextButton } from "../../components/text-button/TextButton";

interface Props {
  work: Qualification[];
  education: Qualification[];
}

interface Qualification {
  children: JSX.Element;
  color: string;
}

export const Qualifications = ({ work, education }: Props) => {
  const [content, setContent] = useState("work");
  return (
    <>
      <div className="sectionTopPadding" id="Qualifications">
        <SectionHeading heading="Qualifications" subHeading="My Journey" />
        <div className="customContainer">
          <TextButton
            onClick={() => setContent("education")}
            clicked={content === "education"}
          >
            <FaGraduationCap />
            Education
          </TextButton>
          <TextButton
            onClick={() => setContent("work")}
            clicked={content === "work"}
          >
            <FaBriefcase />
            Experience
          </TextButton>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Timeline: {
                dotBorderWidth: 6,
                tailColor: "white",
                tailWidth: 3,
              },
            },
          }}
        >
          <Timeline
            mode={"alternate"}
            items={content === "work" ? work : education}
            className="mt-8 text-white"
          />
        </ConfigProvider>
      </div>
    </>
  );
};
