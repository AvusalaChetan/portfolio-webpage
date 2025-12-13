import {Flex, Image, Space} from "antd";
import H1 from "../components/H1";
import {useEffect, useState} from "react";

const SkillsPage = () => {
  const [mySkill, setMySkill] = useState([])
  useEffect(() => {
    const getSkill = async () => {
      const res = await fetch("/json/skills.json",{method:"GET"});
      const data = await res.json();
      setMySkill([...data])
    };
    getSkill();
  }, []);

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
        {mySkill.map((skill, idx) => (
          <Flex key={idx} style={{padding: "7px"}}>
            <Image
              width={100}
              alt={skill.name}
              src={skill.icon}
              loading="lazy"
              preview={{
                cover: (
                  <Space
                    vertical
                    align="center"
                    style={{
                      fontWeight: "700",
                      fontSize: "20px",
                      color:'black'
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
