import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import  { useState } from "react";

const GetTouch = () => {
      const [state, handleSubmit] = useForm("manonlln");
        const [isHovered, setIsHovered] = useState(false);
  if (state.succeeded) {
    return (
      <div className="text-center mt-8" id='container'>
        <p className="text-2xl font-semibold text-teal-400">
          🎉 Thanks for reaching out! 🎉
        </p>
        <p className="text-gray-400 mt-2">
          Your message has been received, and I'll get back to you as soon as I can! 🚀
        </p>
        <p className="text-gray-400 mt-2">
          Looking forward to connecting with you! 🌟
        </p>
      </div>
    );
  }

  return (
   <section className="min-h-screen  flex items-center justify-center py-16 px-4">
         <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-gray-700 rounded-3xl p-10 shadow-xl">
           <h2 className="text-4xl font-bold text-white mb-1">
             Get in <span className="text-purple-400">Touch</span>
           </h2>
           <p className="text-gray-400 mb-8">
             Have something to discuss? Send me a message and let's talk.
           </p>
   
           <form onSubmit={handleSubmit} className="space-y-6">
             {/* Name */}
             <div>
               <label className="block text-sm font-medium text-gray-300 mb-2">
                 Name
               </label>
               <input
                 type="text"
                 name="name"
                 required
                 placeholder="Enter your name"
                 className="w-full p-3 bg-white/10 border-l-10 border-purple-700 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-100"
               />
               <ValidationError
                 prefix="name"
                 field="name"
                 errors={state.errors}
                 className="text-red-500 text-sm mt-1"
               />
             </div>
   
             {/* Email */}
             <div>
               <label className="block text-sm font-medium text-gray-300 mb-2">
                 Email
               </label>
               <input
                 type="email"
                 name="email"
                 required
                 placeholder="Enter your email"
                 className="w-full p-3 bg-white/10  border-l-10 border-purple-700 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-100"
               />
               <ValidationError
                 prefix="email"
                 field="email"
                 errors={state.errors}
                 className="text-red-500 text-sm mt-1"
               />
             </div>
   
             {/* Mobile */}
             <div>
               <label className="block text-sm font-medium text-gray-300 mb-2">
                 Mobile Number
               </label>
               <input
                 type="number"
                 name="number"
                 required
                 placeholder="Enter your mobile number"
                 className="w-full p-3 bg-white/10 border-l-10 border-purple-700 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-100"
               />
               <ValidationError
                 prefix="number"
                 field="number"
                 errors={state.errors}
                 className="text-red-500 text-sm mt-1"
               />
             </div>
   
             {/* Message */}
             <div>
               <label className="block text-sm font-medium text-gray-300 mb-2">
                 Message
               </label>
               <textarea
                 name="message"
                 rows="5"
                 required
                 placeholder="Enter your message"
                 className="w-full p-3 bg-white/10  placeholder-gray-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-100"
               ></textarea>
               <ValidationError
                 prefix="message"
                 field="message"
                 errors={state.errors}
                 className="text-red-500 text-sm mt-1"
               />
             </div>
   
   
             {/* Submit Button */}
             <motion.button
               type="submit"
               id="contact-btn"
               disabled={state.submitting}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               initial={{ y: 0, scale: 1, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
               animate={{
                 y: isHovered ? -3 : 0,
                 boxShadow: isHovered 
                   ? "0px 8px 15px rgba(0, 0, 0, 0.3)" 
                   : "0px 5px 10px rgba(0, 0, 0, 0.2)",
               }}
               whileTap={{
                 scale: 0.95,
                 boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
               }}
               style={{
                 fontFamily: "inherit",
                 fontSize: "18px",
                 background: "linear-gradient(to bottom, #4dc7d9 0%,#66a6ff 100%)",
                 color: "white",
                 padding: "0.8em 1.2em",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 border: "none",
                 borderRadius: "25px",
                 cursor: "pointer",
                 width: "100%",
               }}
             >
               <motion.div
                 className="svg-wrapper"
                 animate={{
                   backgroundColor: isHovered 
                     ? "rgba(23, 95, 119, 0.452)" 
                     : "rgba(255, 255, 255, 0.2)"
                 }}
                 style={{
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   width: "30px",
                   height: "30px",
                   borderRadius: "50%",
                   marginRight: "0.5em",
                 }}
               >
                 <motion.svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   width="18"
                   height="18"
                   fill="white"
                   animate={{ rotate: isHovered ? 45 : 0 }}
                   transition={{ type: "spring", stiffness: 300 }}
                   id='arrow'
                 >
                   <path fill="none" d="M0 0h24v24H0z" />
                   <path
                     fill="currentColor"
                     d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                   />
                 </motion.svg>
               </motion.div>
               <motion.span
                 animate={{ x: isHovered ? 4 : 0 }}
                 style={{ display: "block" }}
               
               >
                 Send
               </motion.span>
             </motion.button>
           </form>
         </div>
       </section>
  );
};

export default GetTouch;
