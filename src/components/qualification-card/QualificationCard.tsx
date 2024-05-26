import { SlCalender } from "react-icons/sl";
import { twMerge } from "tailwind-merge";

interface Props {
  role: string;
  company: string;
  duration: string;
  cgpa?: string;
  className?: string;
}

export const QualificationCard = ({
  role,
  company,
  duration,
  cgpa,
  className = "",
}: Props) => {
  return (
    <>
      <span className="label">{role}</span>
      <div>
        <span className="label">{company}</span>
        <br />
        <span className="label">{cgpa}</span>
        <span className={twMerge("label iconContainer", className)}>
          {duration.length > 0 && (
            <>
              <SlCalender />
              {duration}
            </>
          )}
        </span>
      </div>
    </>
  );
};
