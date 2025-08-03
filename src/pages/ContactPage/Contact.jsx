import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import GetTouch from "../../components/GetTouch";
import Commentform from "./Commentform";

const Contact = () => {
  const [state, handleSubmit] = useForm("manonlln");
  const [isHovered, setIsHovered] = useState(false);

  if (state.succeeded) {
    return (
      <div className="text-center mt-8">
        <p className="text-2xl font-semibold text-teal-400">
          🎉 Thanks for reaching out! 🎉
        </p>
        <p className="text-gray-400 mt-2">
          Your message has been received, and I'll get back to you as soon as I
          can! 🚀
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-around gap-3.5">
<div className="w-[45vw]">
      <GetTouch/>

</div>
<div className="w-[45vw]">
  <Commentform/>
</div>
    </div>

  );
};

export default Contact;
