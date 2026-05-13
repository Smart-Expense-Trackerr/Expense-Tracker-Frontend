import { useEffect, useState } from "react";
import { GetInsights } from "../api/controllerApi";
import Error from "./Modals/Error";
import Summary from "./Summary";

export default function DashboardOverview() {
  const [insight, setInsight] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchInsights = async () => {
    try {
      const data = await GetInsights();
      setInsight(data);
    } catch (error: any) {
      setError(error.message || "Failed to load insights");
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  if (!insight) {
    return <p className="text-gray-200 p-8">Loading insights...</p>;
  }

  return (
    <main className="flex-1 p-8 text-gray-200">
      <h2 className="text-2xl font-semibold mb-6">
        Dashboard Overview
      </h2>

      {/* summary cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {error && <Error title="Error" description={error} />}
        
        <div className="bg-[#1C2541] p-4 rounded-lg">
          <h3>Income</h3>
          <p>₦{insight.summary.totalIncome}</p>
        </div>

        <div className="bg-[#1C2541] p-4 rounded-lg">
          <h3>Expense</h3>
          <p>₦{insight.summary.totalExpense}</p>
        </div>

        <div className="bg-[#1C2541] p-4 rounded-lg">
          <h3>Assets</h3>
          <p>₦{insight.summary.totalAssets}</p>
        </div>

        <div className="bg-[#1C2541] p-4 rounded-lg">
          <h3>Balance</h3>
          <p>₦{insight.summary.balance}</p>
        </div>
      </div>

      {/* ratios */}
      <div className="bg-[#1C2541] p-6 rounded-lg mb-8">
        <h3 className="text-xl mb-4">Ratios</h3>
        <p>Spent: {insight.ratios.spent}</p>
        <p>Invested: {insight.ratios.invested}</p>
        <p>Saved: {insight.ratios.saved}</p>
      </div>

      {/* insights */}
      <div className="bg-[#1C2541] p-6 rounded-lg">
        <h3 className="text-xl mb-4">Insights</h3>

        <ul className="space-y-2">
        {insight.insights.map((item: { message: string; type: string }, index: number) => (
          <li
            key={index}
            className={
              item.type === "danger"
                ? "text-danger"
                : item.type === "warning"
                ? "text-warning"
                : item.type === "success"
                ? "text-success"
                : "text-blue-400"
            }
          >
            {item.message}
          </li>
        ))}
      </ul>
      </div>

      <Summary/>
    </main>
  );
}