import { BsSend } from "react-icons/bs";
import classes from "./Introduction.module.css";

interface Props {
  linkedIn: string;
  details: Details;
}

interface Details {
  name: string;
  currentPosition: string;
  description: string;
}

export const Introduction = ({ details, linkedIn }: Props) => {
  return (
    <div
      className="sectionTopPadding flex flex-row flex-wrap justify-center gap-10 lg:py-[200px] xl:py-[250px]"
      id="Home"
    >
      <div className="order-1 lg:order-2">
        <div className={classes.home__img}></div>
      </div>
      <div className="order-2 lg:order-1">
        <div className="grid gap-3">
          <span className={classes.mainHeading}>{details.name}🖐️</span>
          <span className="label text-3xl font-bold">
            {details.currentPosition}
          </span>
          <span className="label">{details.description}</span>
          <div>
            <a href={linkedIn} className="primaryButton w-[200px]">
              Let's Connect! <BsSend />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
