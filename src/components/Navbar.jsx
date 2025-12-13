import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {HoverBehaviour} from "../animations/Cursor";
import {MdOutlineFileDownload} from "react-icons/md";
import {FiMenu, FiX} from "react-icons/fi";
import {
  Anchor,
  Typography,
  Dropdown,
  Button,
  ConfigProvider,
  Menu,
  Flex,
} from "antd";
import {motion} from "framer-motion";
import TextBasedAnimation from "../animations/TextBasedAnimation";
import styles from "./Navbar.module.css";

const dropdown = [
  {
    key: "linkedin",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/avusala-chetan-73a697312"
      >
        LinkedIn
      </a>
    ),
  },
  {
    key: "github",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/AvusalaChetan"
      >
        GitHub
      </a>
    ),
  },
];

const navRought = [
  {text: "home", to: "#home"},
  {text: "about", to: "#about"},
  {text: "skills", to: "#skills"},
  {text: "projects", to: "#projects"},
];

const roughtActiveClass = {
  "#home": "text-[24px] text-blue-500 border-b-4 font-semibold capitalize",
  "#about": "text-[24px] text-black border-b-4 font-semibold capitalize",
  "#skills": "text-[24px] text-yellow-500 border-b-4 font-semibold capitalize",
  "#projects":
    "text-[24px] text-purple-500 border-b-4 font-semibold capitalize",
};

const Navbar = () => {
  const {hash} = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const downloadResume = () => {};

  useEffect(() => {
    setTimeout(() => {
      if (!hash) return;
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({behavior: "smooth", block: "start"});
      } else {
        window.scrollTo({top: 0, behavior: "smooth"});
      }
    }, 150);
  }, [hash]);

  return (
    <>
      <div
        className={`${styles.navbar} max-w-7xl bg-white mx-auto my-3 border  flex items-center justify-between h-16  rounded-2xl px-12`}
      >
        <HoverBehaviour scale={3} border={"1px outset red"}>
          <Typography.Title level={2}>
            <a href="/">
              <TextBasedAnimation
                text={"Portfolio"}
                textColor={"text-purple-800!"}
                className={
                  " md:text-2xl font-bold  mt-3  flex items-center justify-center "
                }
              />
            </a>
          </Typography.Title>
        </HoverBehaviour>

        {/* Desktop nav */}
        <motion.div
          initial={{opacity: 0, y: 30, scale: 0.95}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.7, ease: "easeOut", delay: 0.2}}
        >
          <nav className="hidden md:flex items-center gap-6">
            <HoverBehaviour scale={1.2}>
              <Anchor
                style={{
                  fontSize: "18px",
                  textTransform: "capitalize",
                  color: "#9333ea",
                }}
                direction="horizontal"
                items={[
                  {key: "home", title: "home", href: "#home"},
                  {key: "about", title: "about", href: "#about"},
                  {key: "skills", title: "skills", href: "#skills"},
                  {key: "projects", title: "projects", href: "#projects"},
                ]}
              />
            </HoverBehaviour>
            <Dropdown menu={{items: dropdown}}>connect</Dropdown>
            <Button
              onClick={downloadResume}
              type="dashed"
              icon={<MdOutlineFileDownload />}
              className="hover:border-black! hover:text-black!"
              onMouseEnter={() => {
                const cursor = document.getElementById("cursor");
                if (cursor) cursor.style.opacity = "0";
              }}
              onMouseLeave={() => {
                const cursor = document.getElementById("cursor");
                if (cursor) cursor.style.opacity = "1";
              }}
            >
              Resume
            </Button>
          </nav>
        </motion.div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3 mr-2">
          <Button
            variant="filled"
            color="purple"
            onClick={() => setMobileOpen((prev) => !prev)}
            style={{backgroundColor: "none"}}
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && <MobileNavbar hash={hash} setMobileOpen={setMobileOpen} />}
    </>
  );
};

const MobileNavbar = ({hash, setMobileOpen}) => {
  const menuItems = navRought.map((item) => ({
    key: item.to,
    label: (
      <a
        href={item.to}
        onClick={() => setMobileOpen(false)}
        className="capitalize"
      >
        {item.text}
      </a>
    ),
  }));

  return (
    <div
      className="md:hidden fixed inset-0 bg-black/40 z-50"
      onClick={() => setMobileOpen(false)}
    >
      <div
        className="absolute right-0 top-0 w-72 h-full bg-white shadow-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <Flex justify="space-around" align="center">
          <Typography.Title level={2}>Menu</Typography.Title>
          <Button
            icon={<FiX />}
            variant="filled"
            color="purple"
            onClick={() => setMobileOpen(false)}
            type="dashed"
            className="p-1"
          />
        </Flex>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemColor: "purple",
                itemSelectedColor: "white",
                itemSelectedBg: "purple",
                itemHoverColor: "purple",
                itemHoverBg: "#f3e8ff",
              },
            },
          }}
        >
          <Menu
            selectedKeys={[hash || "#home"]}
            mode="inline"
            items={menuItems}
            style={{
              border: "none",
              fontSize: "16px",
            }}
          />
          <Dropdown menu={{items: dropdown}}>
            <Button type="text" style={{color: "purple"}}>
              connect
            </Button>
          </Dropdown>

          <div className="p-4 border-t mt-auto">
            <Button
              variant="filled"
              color="purple"
              icon={<MdOutlineFileDownload />}
              block
              size="large"
            >
              Resume
            </Button>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Navbar;
