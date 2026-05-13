import { useEffect, useState } from "react";
import { GetMonthlyTrends } from "../api/controllerApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyTrends() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchTrends = async () => {
      const res = await GetMonthlyTrends();
      setData(res);
    };

    fetchTrends();
  }, []);

  return (
    <div className="bg-[#1C2541] p-6 mt-8 rounded-lg text-white">
      <h2 className="text-xl mb-4">Monthly Overview</h2>

      <div className="w-full h-70">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="totalIncome" fill="#22c55e" name="Income" />
            <Bar dataKey="totalExpense" fill="#ef4444" name="Expense" />
            <Bar dataKey="totalAssets" fill="#3b82f6" name="Assets" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}