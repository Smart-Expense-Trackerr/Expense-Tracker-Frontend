import DashboardOverview from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0B132B] text-gray-200">
        <Sidebar />

        <DashboardOverview/>
    </div>
  );
}