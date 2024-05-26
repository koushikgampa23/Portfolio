interface Props {
  heading: string;
  subHeading: string;
}

export const SectionHeading = ({ heading, subHeading }: Props) => {
  return (
    <div className="customContainer">
      <div className="sectionStyle sectionTopPadding" id="About">
        <span className="sectionHeading">{heading}</span>
        <span className="sectionSubHeading">{subHeading}</span>
      </div>
    </div>
  );
};
