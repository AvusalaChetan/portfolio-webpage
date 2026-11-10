import {LuGithub, LuExternalLink} from "react-icons/lu";
import {Tag} from "../secondry/Tag";
import type {ProjectCardData} from "../../types";

export const ProjectCard = ({project}: {project: ProjectCardData}) => {
  const {title, description, image, tech, liveUrl, githubUrl} = project;

  return (
    <article className="flex flex-col overflow-hidden border border-gray-300 bg-white transition-colors hover:border-gray-500 w-full h-full flex-1  gap-1.5 ">
      <div className="aspect-video w-full overflow-hidden border-b border-gray-300 bg-gray-50 h-40 ">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover "
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-base font-semibold capitalize">{title}</h3>
        <p className="line-clamp-2 text-xs text-gray-600 ">{description}</p>

        <div className="flex flex-nowrap gap-2 overflow-y-hidden overflow-x-scroll">
          {tech?.map((t) => (
            <Tag key={t} text={t}  />
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 px-2 py-1 text-xs">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
            >
              Live <LuExternalLink />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="px-2 py-1 text-xs border border-gray-300 p-2 hover:bg-gray-100 "
            >
              <LuGithub />
            </a>
          )}
        </div>
        <div className="h-fit">
          <button className="float-end text-sm">view</button>
        </div>
      </div>
    </article>
  );
};
