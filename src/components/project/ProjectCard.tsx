import {useState} from "react";
import {LuGithub, LuExternalLink} from "react-icons/lu";
import {Tag} from "../secondry/Tag";
import type {ProjectCardData} from "../../types";

export const ProjectCard = ({project}: {project: ProjectCardData}) => {
  const {title, description, image, tech, liveUrl, githubUrl} = project;
  const [imgError, setImgError] = useState(false);

  return (
    <article className="flex h-full w-full flex-col overflow-hidden border border-(--border) bg-(--card) transition-colors hover:border-(--muted)">
      <div className="aspect-video w-full shrink-0 overflow-hidden border-b border-(--border) bg-(--bg)">
        {image && !imgError ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-full w-full scale-105 object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-(--border) px-4 text-center">
            <span className="text-2xl lg:text-3xl font-semibold tracking-wide text-(--text) capitalize">
              {title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold capitalize">{title}</h3>
          <p className="line-clamp-2 text-xs text-(--muted)">{description}</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-(--muted)">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tech?.map((t) => (
              <Tag key={t} text={t} />
            ))}
          </div>
        </div>

        {(liveUrl || githubUrl) && (
          <div className="mt-auto flex items-center gap-2 pt-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center gap-1.5 border border-(--border) px-3 text-xs font-medium transition-colors hover:bg-(--border)"
              >
                Live <LuExternalLink className="size-3.5" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
                className="inline-flex h-8 w-8 items-center justify-center border border-(--border) transition-colors hover:bg-(--border)"
              >
                <LuGithub className="size-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
