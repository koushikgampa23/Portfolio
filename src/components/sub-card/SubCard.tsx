interface Props {
  heading: string;
  content: string[];
  icon: any;
}

export const SubCard = ({ heading, content, icon }: Props) => {
  return (
    <div className="sectionStyle items-center gap-1 p-3">
      <span className="label">{icon}</span>
      <span className="label font-bold">{heading}</span>
      {content.map((item, key) => (
        <span className="label" key={key}>
          {item}
        </span>
      ))}
    </div>
  );
};
