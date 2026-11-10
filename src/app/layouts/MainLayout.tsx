import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/mainComponents/ProfileCard";
import TabContent from "../../components/mainComponents/TabContent";

const MainLayout = () => {
  return (
    <main className="layout p-4 bg-gray-400/40 h-screen w-screen">
      <aside className="h-full">
        <ProfileCard />
      </aside>
      <section className="h-full flex flex-col gap-2">
        <Navbar />
        <TabContent />
      </section>
    </main>
  );
};

export default MainLayout;
