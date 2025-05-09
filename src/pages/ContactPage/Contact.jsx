import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'motion/react';
import './Contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm("manonlln");
   
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
    <section
    id='sec'
    className="min-h-screen bg-neutral-900 text-white py-20 px-4">
  <div id='sec' className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-5xl font-bold mb-4">
      Get in <span className="text-teal-400">Touch</span>
    </h2>
    <p className="text-gray-400">
      Feel free to reach out for collaborations or just a friendly hello 👋
    </p>
  </div>

  <div 
  id='form-container'
  className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-gray-700">
    <form onSubmit={handleSubmit} className="space-y-6">
    <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <ValidationError
          prefix="name"
          field="name"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message or give your feedback "
          rows="5"
          required
          className="w-full p-3 bg-gray-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Submit Button */}
      <motion.button
      id="contact-btn"
      disabled={state.submitting}
      initial={{ y: 0, scale: 1, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
      whileHover={{
        y: -3,
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
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
      }}
    >
      <motion.div
        className="svg-wrapper"
        whileHover={{ backgroundColor: "rgba(23, 95, 119, 0.452)" }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          marginRight: "0.5em",
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="white"
          whileHover={{ rotate: 45 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          />
        </motion.svg>
      </motion.div>
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
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

export default Contact;
