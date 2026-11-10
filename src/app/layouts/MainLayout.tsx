import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/main/ProfileCard";
import TabContent from "../../components/main/TabContent";

const MainLayout = () => {
  return (
    <main className="layout p-4 bg-gray-400/40 h-screen w-full overflow-hidden">
      <aside className="h-full min-h-0 min-w-0">
        <ProfileCard />
      </aside>

      <section className="h-full min-h-0 min-w-0 flex flex-col gap-2">
        <Navbar />
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-white border border-gray-400">
          <TabContent />
        </div>
      </section>
    </main>
  );
};

export default MainLayout;
