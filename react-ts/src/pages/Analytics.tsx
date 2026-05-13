import WeeklyComparison from "../components/WeeklyComparison";
import CategorySummary from "../components/CategorySummary";
import MonthlyTrends from "../components/MonthlyTrends";
import Sidebar from "../components/Sidebar";

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-[#0B132B] text-gray-200">
    <Sidebar/>
    <div className="flex-1 p-8 space-y-6 text-gray-200">
      <h1 className="text-2xl font-bold">Analytics</h1>

      <MonthlyTrends />
      <WeeklyComparison />
      <CategorySummary />
    </div>
    </div>
  );
}