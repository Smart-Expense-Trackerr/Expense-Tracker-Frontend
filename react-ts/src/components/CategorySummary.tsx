import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { GetCategorySummary } from "../api/controllerApi";
import Error from "./Modals/Error";

export default function CategorySummary() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const result = await GetCategorySummary();
      setData(result);
    } catch (error: any) {
      setError(error.message || "Failed to load category summary");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <div className="bg-[#1C2541] p-6 rounded-lg mt-8 text-white">
        {error && <Error title="Error" description={error} />}

        <h2 className="text-xl mb-4">Category Breakdown</h2>
        <div>No expense data yet</div>
      </div>
    );
  }

  return (
    <div className="bg-[#1C2541] p-6 rounded-lg mt-8 text-gray-200">
        {error && <Error title="Error" description={error} />}

      <h2 className="text-xl mb-4">
        Category Breakdown
      </h2>
      <PieChart width={600} height={300}>
        <Pie
          data={data}
          dataKey="total"
          nameKey="category"
          fill="#3B82F6"
          cx="50%"
          cy="50%"
          outerRadius={100}
        label={({ payload }) =>
            `${payload.category} (${payload.percentage})`
        }
        >
        </Pie>
        <Tooltip />
      </PieChart>
      
    </div>
  );
}