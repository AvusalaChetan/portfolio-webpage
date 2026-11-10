import {type ReactNode} from "react";

interface PropTypes {
  children: ReactNode;
  className?: string;
}

const Section = ({children, className = ""}: PropTypes) => {
  return (
    <section className={`${className}  mb-4 p-2 `}>{children}</section>
  );
};

export default Section;
