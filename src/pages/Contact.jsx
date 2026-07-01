import * as FaIcons from "react-icons/fa";
import FieldName from "../components/common/FieldName";
import useGetData from "../hooks/useGetData";
const Contact = () => {
  const PATH = "/json/contact.json";
  if (!PATH) console.log("path is not there");
  const contact = useGetData(PATH);
  return (
    <div className="h-[60%]  w-full flex items-start justify-center flex-col">
      <FieldName fieldName={"contact"} text={"Get in touch"} />
      <div className="  mx-auto flex gap-4 flex-wrap ">
        {contact.map((link, idx) => {
          const { id, label, value, href, iconName } = link;
          const IconComponent = FaIcons[iconName.trim()] || FaIcons.FaQuestion;
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              className="p-4 border w-[40%] mx-auto  rounded-sm bg-(--bg-card) border-(--border) flex items-center gap-4 transition-all duration-200 group hover:border-(--border-hover) hover:bg-var(--bg-3) cursor-pointer"
            >
              <div className="p-2  bg-(--bg-2)    transition-colors flex items-center justify-center">
                <span className="text-(--accent) transition-transform duration-200 group-hover:scale-110">
                  <IconComponent />
                </span>
              </div>

              <div className="flex flex-col">
                <p className="text-xs font-mono text-(--text-muted) uppercase tracking-wider">
                  {label}
                </p>
                <p className="text-sm font-sans font-medium text-(--text) mt-0.5 group-hover:text-[var(--accent-light)] transition-colors break-all">
                  {value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
