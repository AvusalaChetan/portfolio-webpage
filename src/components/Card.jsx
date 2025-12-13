import {useEffect, useState} from "react";

const Card = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/json/projects.json");
        const data = await res.json();
        setProject([...data]);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {project.map((item, idx) => (
        <div
          key={idx}
          className="w-full sm:w-[350px] md:w-[320px] lg:w-[350px] xl:w-[350px] bg-white/10 shadow-lg rounded-3xl overflow-hidden transition-transform hover:scale-105 backdrop-blur-md flex flex-col"
        >
          <div className="relative">
            <img
              className="w-full h-48 object-contain object-center mx-auto"
              src={item.projectImage}
              alt={item.projectName}
            />
            <div className="absolute top-2 right-2 flex gap-2">
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white rounded-full w-[30px] h-[30px] p-1 transition flex items-center justify-center"
                  title="GitHub"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                  </svg>
                </a>
              )}
              {item.projectUrl && (
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white rounded-full w-[30px] h-[30px] p-1 hover:scale-105 transition flex items-center justify-center"
                  title="Live Demo"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 3v2h3.59L7 15.59 8.41 17 19 6.41V10h2V3z" />
                    <path d="M5 5v14h14v-7h-2v5H7V7h5V5z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-center text-white mb-2 capitalize tracking-wide">
              {item.projectName}
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              {item.projectDiscreption}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.TechUse.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
