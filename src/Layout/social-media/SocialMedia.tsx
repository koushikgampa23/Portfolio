import { SectionHeading } from "../../components/section-heading/SectionHeading";
import { ContactMe } from "./contact-me/ContectMe";
import { SocialCard } from "./social-card/SocialCard";

interface Props {
  contact: {
    linkedIn?: string;
    github?: string;
    leetCode?: string;
    hackerRank?: string;
  };
}

export const SocialMedia = ({ contact }: Props) => {
  return (
    <div className="sectionTopPadding" id="Contact">
      <SectionHeading heading={"Contact Me"} subHeading={"My Socials"} />
      <div className="personalProjectContainer">
        <ContactMe />
      </div>
      <div className="personalProjectContainer mt-5">
        <SocialCard
          linkedIn={contact.linkedIn}
          github={contact.github}
          leetCode={contact.leetCode}
          hackerRank={contact.hackerRank}
        />
      </div>
    </div>
  );
};
