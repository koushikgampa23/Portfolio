import { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  clicked: boolean;
}

export const TextButton = ({ children, clicked, ...props }: Props) => {
  return (
    <button
      {...props}
      className={
        clicked
          ? "label mt-2 flex items-center gap-2 rounded-lg bg-white p-3 text-black"
          : "label mt-2 flex items-center gap-2 p-3"
      }
    >
      {children}
    </button>
  );
};
