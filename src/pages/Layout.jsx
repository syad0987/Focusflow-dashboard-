import Sidebar from "../components/SideBar";
import Topbar from "../components/topbar";
export default function Layout({ children }) {
  return (
    <div className="h-screen flex bg-slate-100 w-screen overflow-hidden m-0 p-0">
      <Sidebar />
      <div className="flex-1 flex  flex-col overflow-hidden ">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50 scrollbar-thin scrollbar-thumb-slate-300">
          {children}
        </main>
      </div>
    </div>
  );
}
