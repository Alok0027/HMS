import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/ui/sidebar";
import { Navigation } from "@/components/ui/navigation";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navigation />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
