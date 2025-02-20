import classNames from "classnames";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type containerProps = {
  children: ReactNode;
  className?: string;
  type?: "header" | "container";
};

export const Container = ({
  children,
  className,
  type = "container",
}: containerProps) => {
  return (
    <div
      className={twMerge(
        classNames({
          "py-4": type === "header",
          "bg-black": type === "container",
        }),
        `px-4 mlg:px-7 lg:px-16`,
        className
      )}
    >
      {children}
    </div>
  );
};
