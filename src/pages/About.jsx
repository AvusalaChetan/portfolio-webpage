const About = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white/5 px-4 py-8 ">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
        About Me
      </h1>
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-base md:text-lg text-gray-800 leading-relaxed  rounded-lg bg-white/80 shadow-md p-4 md:p-8">
        <img
          src="/public/imgs/me.jpeg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-300 shadow-md mb-2"
        />
        <div className="flex items-center gap-2 text-gray-700 text-sm md:text-base font-medium mt-1">
          <span role="img" aria-label="location">
          
          </span>
          Hyderabad
        </div>
        <div className="flex flex-wrap gap-2  mt-2 text-xs md:text-sm text-blue-800 font-semibold ">
          <span className="bg-blue-100 px-2 py-1 rounded capitalize">
            malla reddy institute of technology and science
          </span>
          <span className="bg-blue-100 px-2 py-1 rounded">ECE</span>
          <span className="bg-blue-100 px-2 py-1 rounded">3rd Year</span>
        </div>
        <div className="mt-2 uppercase text-green-700 text-xs md:text-sm font-semibold">
          cGPA: 7.17/10
        </div>
      </div>

      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-base md:text-lg text-gray-800 leading-relaxed  rounded-lg bg-white/80 shadow-md p-4 md:p-8">
        <p>
          I am{" "}
          <strong>
            <em>Avusala Chetan</em>
          </strong>
          , a{" "}
          <strong>
            <em>third-year Electrical Communication Engineering </em>
          </strong>
          student in{" "}
          <strong>
            <em>Hyderabad.</em>
          </strong>{" "}
          I'm passionate about designing and building innovative web
          applications that solve complex B2B business challenges using the MERN
          stack. I combine creative problem-solving with technical expertise to
          develop intuitive solutions that streamline workflows and drive
          business value. My goal is to grow as a Full-Stack Developer and
          contribute to impactful projects.
        </p>

        <p className="mt-4 font-semibold text-blue-700">
          Let's connect and create something amazing together!
        </p>
      </div>
    </main>
  );
};

export default About;
