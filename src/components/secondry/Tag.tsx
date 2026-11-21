export const Tag = ({text, className}: {text: string; className?: string}) => (
  <span
    className={` border border-dashed border-(--muted) rounded px-2 py-0.5 text-xs ${className} `}
  >
    {text}
  </span>
);
