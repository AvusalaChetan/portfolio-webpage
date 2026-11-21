import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/main/ProfileCard";
import TabContent from "../../components/main/TabContent";

const MainLayout = () => {
  return (
    <main className="layout min-h-screen w-full overflow-visible p-4 bg-(--bg) lg:h-screen lg:overflow-hidden">
      <aside className="h-auto min-w-0 lg:h-full lg:min-h-0 bg-(--bg)">
        <ProfileCard />
      </aside>

      <section className="min-w-0 flex flex-col gap-2 lg:h-full lg:min-h-0">
        <Navbar />
        <div className="overflow-x-hidden border border-(--border) bg-(--bg) lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
          <TabContent />
        </div>
      </section>
    </main>
  );
};

export default MainLayout;