import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function ButtonGrey({ children }: ButtonProps) {
  return (
    <button className="m-5 flex items-center justify-between p-3 rounded-lg bg-gray-300 gap-2">
      {children}
    </button>
  );
}
