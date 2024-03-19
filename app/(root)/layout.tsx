import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

// 17:43
function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
          {/*  */}
        </div>
      </div>
    </main>
  );
}

export default layout;
