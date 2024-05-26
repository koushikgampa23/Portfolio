interface Props {
  title: string;
  skills: string[];
}

export const SkillCard = ({ title, skills }: Props) => {
  return (
    <div className="w-[250px] rounded-xl bg-customBrown p-5 md:w-[300px] lg:w-[480px]">
      <span className="label customContainer font-bold">{title}</span>
      <br />
      <div className="flex w-full flex-wrap gap-3">
        {skills.map((skill, index) => {
          return (
            <span
              className="label rounded-lg border-2 border-white p-2"
              key={index}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};
