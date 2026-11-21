import {MainHeading, SubHeading} from "../components/secondry/Heading";
import Section from "../components/secondry/Section";
import {Tag} from "../components/secondry/Tag";
import {learningSkills, skills} from "../data/skills";

const Skills = () => {
  return (
    <div className="h-full w-full">
      {skills.map((group) => (
        <Section key={group.heading}>
          <div className="flex flex-col gap-4">
            {group.items.map((category) => (
              <div
                key={category.heading}
                className="flex flex-wrap items-center gap-2"
              >
                <SubHeading text={`${category.heading}:`} />
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Tag key={skill} text={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section>
        <MainHeading text="Learning skills" />
        {learningSkills.map((category) => (
          <div
            key={category.heading}
            className="flex flex-wrap items-center gap-2"
          >
            <SubHeading text={`${category.heading}:`} />
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <Tag key={skill} text={skill} />
              ))}
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
};

export default Skills;