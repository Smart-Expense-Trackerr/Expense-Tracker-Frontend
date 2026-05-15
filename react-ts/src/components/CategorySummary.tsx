import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { GetCategorySummary } from "../api/controllerApi";
import Error from "./Modals/Error";

export default function CategorySummary() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

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
    <div className="bg-[#1C2541] p-6 w-full rounded-lg mt-8 text-gray-200">
        {error && <Error title="Error" description={error} />}

      <h2 className="text-xl mb-4">
        Category Breakdown
      </h2>
     <div className="w-full h-75">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            nameKey="category"
            fill="#3B82F6"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={
              !isMobile
                ? ({ payload }) =>
                    `${payload.category} (${payload.percentage})`
                : false
            }
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

    {isMobile && (
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-sm border-b border-gray-600 pb-1"
          >
            <span>{item.category}</span>
            <span>{item.percentage}</span>
          </div>
        ))}
      </div>
    )}
      
    </div>
  );
}