import {GitHubCalendar} from "react-github-calendar";
import {LuExternalLink} from "react-icons/lu";
import {ProjectCard} from "../components/project/ProjectCard";
import {MainHeading, SubHeading} from "../components/secondry/Heading";
import Section from "../components/secondry/Section";
import {Tag} from "../components/secondry/Tag";
import {achievements} from "../data/achieviements";
import {currentProject} from "../data/currentProject";
import {projects} from "../data/projects";
import {techStack} from "../data/techStack";

const Overview = () => {
  const majorProjects = ["express-jetstart", "watchly"];

  return (
    <div className="h-full w-full">
      <Section className="">
        <MainHeading text="summary" />
        <p className="text-(--text) ">
          Final-year ECE student building full-stack apps with React, Node and
          MongoDB. Focused on clean backend APIs and auth systems.
        </p>
      </Section>
      <Section>
        <MainHeading text="Currently building" />
        <SubHeading text={currentProject.title} />
        <p className="text-gray-600 mb-3">{currentProject.description}</p>
        <div className="flex flex-wrap gap-2">
          {currentProject.tech.map((tech) => (
            <Tag key={tech} text={tech} />
          ))}
        </div>
      </Section>
      <Section>
        <MainHeading text="Featured projects" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-col-1  lg:grid-cols-3">
          {projects
            .filter((p) => majorProjects.includes(p.id))
            .map((p) => (
              <ProjectCard project={p} key={p.id} />
            ))}
        </div>
      </Section>
      <Section>
        <MainHeading text="Achievements" />
        <div className="flex flex-col gap-5">
          {achievements.map((a) => (
            <div key={a.heading}>
              <SubHeading text={a.heading} />
              <div className="flex flex-col gap-3">
                {a.items.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-300 bg-white p-3 transition-colors hover:border-gray-500"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-base font-semibold">{item.title}</h4>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${item.title}`}
                          className="shrink-0 border border-gray-300 p-1.5 hover:bg-gray-100"
                        >
                          <LuExternalLink />
                        </a>
                      )}
                    </div>
                    {item.date && (
                      <span className="text-xs text-gray-500">{item.date}</span>
                    )}
                    <p className="mt-1 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section className="">
        <MainHeading text="Coding stats" />

        <div className="flex flex-col gap-4  items-start justify-center">
          <div className="overflow-x-auto border border-(--line) p-2">
            <GitHubCalendar username="AvusalaChetan" colorScheme="light" />
          </div>
          <div>
            <img
              src="https://streak-stats.demolab.com/?user=AvusalaChetan&theme=dark"
              alt="GitHub streak"
              loading="lazy"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </Section>
      <Section>
        <MainHeading text="Tech stack" />
        <div className="flex flex-col gap-4">
          {techStack.map((group) => (
            <div key={group.heading}>
              <SubHeading text={group.heading} />
              <div className="flex flex-wrap gap-2 ">
                {group.items.map((item) => (
                  <Tag key={item} text={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Overview;
