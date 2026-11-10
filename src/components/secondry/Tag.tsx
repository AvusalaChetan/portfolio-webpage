export const Tag = ({text,className}: {text: string,className?:string}) => (
  <span
  className={`${className} border border-dashed border-gray-300 rounded px-2 py-0.5 text-sm`}
  
  >
    {text}
  </span>
);
