import H1 from "../components/H1";
import Card from "../components/Card";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full bg-black text-white py-12">
        <H1 text={"my Projects"} color={"white"} />
      <div className="max-w-[1200px] mx-auto px-4">
          <Card />
      </div>
    </section>
  );
};

export default Projects;
