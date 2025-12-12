import {
  Flex,
  Typography,
  ConfigProvider,
  Space,
  Card,
  Divider,
  Tag,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const ContactCard = () => {
  const myContactInfo = {
    name: "Avusala chetan",
    email: ["avusalachetan@gmail.com", "chetanAvsala@gmail.com"],
    mobileNumber: "+91 6303689310",
    apps: [
      {gitHub: "https://github.com/AvusalaChetan"},
      {linkedin: "https://www.linkedin.com/in/avusala-chetan-73a697312/"},
    ],
    availability: "Open to opportunities",
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Typography: {
              colorText: "white",
              colorTextHeading: "white",
            },
            Card: {
              colorBgContainer: "#000",
              colorBorder: "#333",
            },
          },
        }}
      >
        <Card style={{width: "75%"}}>
          <Space direction="vertical" size="large" style={{width: "100%"}}>
            <Typography.Title
              level={2}
              style={{textAlign: "center", margin: 0}}
            >
              Contact Me
            </Typography.Title>

            <Divider style={{borderColor: "#444", margin: "12px 0 3px"}} />

            <Space direction="vertical" size="middle" style={{width: "100%"}}>
              <Typography.Title level={4}>Name</Typography.Title>
              <Typography.Paragraph copyable>
                {myContactInfo.name}
              </Typography.Paragraph>
              <Divider style={{borderColor: "#444", margin: "0px 0"}} />

              <Flex
                justify="space-between"
                gap={12}
                wrap
              >
                <div className="border w-full md:w-[45%] ">
                  <Typography.Title level={4}>
                    <MailOutlined /> Email
                  </Typography.Title>

                  <Flex justify="flex-start" wrap>
                    {myContactInfo.email.map((email, index) => (
                      <Typography.Paragraph key={index} copyable>
                        {email}
                      </Typography.Paragraph>
                    ))}
                  </Flex>
                </div>
                <Divider
                  style={{borderColor: "#444", margin: "0px 0"}}
                  vertical
                />

                <div className="border w-full md:w-[45%]">
                  <Typography.Title level={4}>
                    <PhoneOutlined /> Mobile:
                  </Typography.Title>
                  <Typography.Paragraph copyable style={{marginLeft: "40px"}}>
                    {myContactInfo.mobileNumber}
                  </Typography.Paragraph>
                </div>
              </Flex>

              <Divider style={{borderColor: "#444", margin: "0px 0"}} />

              <Typography.Title level={4}>Social Links</Typography.Title>
              <Space wrap>
                {myContactInfo.apps.map((app, index) =>
                  app.gitHub ? (
                    <Typography.Link
                      key={index}
                      href={app.gitHub}
                      target="_blank"
                      copyable
                    >
                      <GithubOutlined /> GitHub
                    </Typography.Link>
                  ) : (
                    <Typography.Link
                      key={index}
                      href={app.linkedin}
                      target="_blank"
                      copyable
                    >
                      <LinkedinOutlined /> LinkedIn
                    </Typography.Link>
                  )
                )}
              </Space>

              <Divider style={{borderColor: "#444", margin: "12px 0"}} />

              <Flex justify="center">
                <Tag
                  color="purple"
                  style={{fontSize: 14, padding: "4px 12px", font: "bolder"}}
                >
                  {myContactInfo.availability}
                </Tag>
              </Flex>
            </Space>
          </Space>
        </Card>
      </ConfigProvider>
    </Flex>
  );
};

export default ContactCard;
