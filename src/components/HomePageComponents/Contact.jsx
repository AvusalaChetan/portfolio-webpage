import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Contact = () => {
 const connectArr = [
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/your-profile",
        icon: <FaLinkedinIn />,
      },
      {
        title: "GitHub",
        link: "https://github.com/your-username",
        icon: <FaGithub />,
      },
    ];


  const [contact] = useState(connectArr);
  
  useGSAP(() => {
    gsap.from(".icons", {
      y: -300,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
      stagger: 0.1,
    });
  }, []);

  return (
    <div className=" contact overflow-hidden  w-full h-[50%] flex  items-center flex-col gap-1.5 py-4">
      {contact.map(item => (
        <Link
          key={item.title}
          to={item.link}
          target="_blank"
          className=" icons text-2xl mt-3"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Contact;
