import { AboutMe } from "./about-me/AboutMe";
import { NavBar } from "./navbar/NavBar";
import { Introduction } from "./Introduction/Introduction";
import { Qualifications } from "./qualifications/Qualificatons";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { SocialMedia } from "./social-media/SocialMedia";
import { PersonalData } from "./data";
import { QualificationCard } from "../components/qualification-card/QualificationCard";
import { SectionHeading } from "../components/section-heading/SectionHeading";

export const Header = () => {
  const educationQualifications = PersonalData.qualifications.education.map(
    (company, key) => ({
      children: (
        <QualificationCard
          role={company.degree}
          company={company.collegeName}
          duration={company.duration}
          cgpa={company.cgpa}
          className={key % 2 !== 0 ? "justify-end" : ""}
        />
      ),
      color: "text-white",
    }),
  );

  const workQualification = PersonalData.qualifications.companys.map(
    (company, key) => ({
      children: (
        <QualificationCard
          role={company.role}
          company={company.companyName}
          duration={company.duration}
          className={key % 2 !== 0 ? "justify-end" : ""}
        />
      ),
      color: "text-white",
    }),
  );

  return (
    <div className="customContainer">
      <NavBar />
      <div className="customContainer" style={{ height: "calc(100% - 102px)" }}>
        <div className="sectionDistance h-[100%]">
          <div></div>
          <Introduction
            linkedIn={PersonalData.contact.linkedIn}
            details={PersonalData.details}
          />
          <AboutMe
            Logo={PersonalData.profile}
            aboutMe={PersonalData.aboutMe}
            Resume={PersonalData.resume}
          />
          <Qualifications
            work={workQualification}
            education={educationQualifications}
          />
          <Skills tech={PersonalData.tech} />
          <Projects projects={PersonalData.projects} />
          <SocialMedia contact={PersonalData.contact} />
          <SectionHeading
            heading={""}
            subHeading={
              "©2024 Developed By Koushik Gampa. All rights reserved"
            }
          />
        </div>
      </div>
    </div>
  );
};
