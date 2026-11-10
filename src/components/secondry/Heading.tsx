interface HeadingProps {
  text: string;
  className?: string;
}

export const MainHeading = ({text, className = ""}: HeadingProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <h2 className="capitalize font-semibold text-xl tracking-wide pb-2">
        {text}
      </h2>
      <hr className="border-gray-300" />
    </div>
  );
};

export const SubHeading = ({text, className = ""}: HeadingProps) => {
  return (
    <div className={`${className}`}>
     <h3 className="capitalize text-lg tracking-wide pb-2 font-medium">{text}</h3>
    </div>
  );
};
