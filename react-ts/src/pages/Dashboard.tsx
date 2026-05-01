import DashboardOverview from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0B132B] text-gray-200">
        <Sidebar />
        <DashboardOverview/>
        
          <main>
          <Outlet/>
        </main>
    </div>
  );
}