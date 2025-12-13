import myskills from "./json/skills.json";
import {Flex, Image, Space} from "antd";
import H1 from "../components/H1";

const SkillsPage = () => {


  return (
    <div id="skills" className="bg-white lg:min-h-full w-full py-2 h-screen">
      <H1 text={"my skills"} color={"black"} />
      <Flex
        wrap
        justify="center"
        align="center"
        gap={12}
        style={{
          height: "80%",
          padding: "12px 18px",
        }}
      >
        {myskills.map((skill, idx) => (
          <Flex
            key={idx}
            style={{padding: "7px"}}
          >
            <Image
              width={100}
              alt={skill.name}
              src={skill.icon}
              preview={{
                cover: (
                  <Space
                    vertical
                    align="center"
                    style={{
                      fontWeight: "700",
                      fontSize: "25px",
                    }}
                  >
                    {skill.name}
                  </Space>
                ),
                maskStyle: {background: "transparent"},
              }}
            />
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default SkillsPage;
