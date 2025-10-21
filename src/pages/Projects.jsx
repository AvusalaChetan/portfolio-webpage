import H1 from "../components/H1";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen w-full bg-black text-white">
      <H1 text={"my Projects"} color={"white"} />
      <div className=" w-[95%] min-h-[80vh] p-2 mt-3 mx-auto">
        <Card />
      </div>
    </div>
  );
};

export default Projects;
