import LinkedIcon from "./LinkedIn_icon.svg";
import Github from "./Github-desktop-logo-symbol.svg";
import HackerRank from "./hackerrank.svg";
import LeetCode from "./LeetCode_Logo_1.png";
import Instagram from "./Instagram_logo_2016.svg";

interface Props {
  linkedIn?: string;
  github?: string;
  leetCode?: string;
  hackerRank?: string;
  instagram?: string;
}

export const SocialCard = ({
  linkedIn,
  github,
  leetCode,
  hackerRank,
  instagram,
}: Props) => {
  return (
    <>
      {linkedIn && (
        <a href={linkedIn}>
          <img src={LinkedIcon} className="socialIcons p-3" alt="Linkedin" />
        </a>
      )}
      {github && (
        <a href={github}>
          <img src={Github} className="socialIcons" alt="github" />
        </a>
      )}
      {hackerRank && (
        <a href={hackerRank}>
          <img src={HackerRank} className="socialIcons" alt="hackerrank" />
        </a>
      )}
      {leetCode && (
        <a href={leetCode}>
          <img src={LeetCode} className="socialIcons" alt="leetcode" />
        </a>
      )}
      {instagram && (
        <a href={leetCode}>
          <img src={Instagram} className="socialIcons p-2" alt="instagram" />
        </a>
      )}
    </>
  );
};
