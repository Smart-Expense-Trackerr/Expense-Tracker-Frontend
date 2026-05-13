import { useEffect, useState } from "react";
import { GetWeeklyComparison } from "../api/controllerApi";

export default function WeeklyComparison() {
  const [weekly, setWeekly] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetWeeklyComparison();
      setWeekly(data);
    };

    fetchData();
  }, []);

  if (!weekly) return <p>Loading...</p>;

  const color =
    weekly.thisWeek > weekly.lastWeek
      ? "text-warning"
      : weekly.thisWeek < weekly.lastWeek
      ? "text-success"
      : "text-warning";

  return (
    <div className="bg-[#1C2541] p-6 mt-8 rounded-lg text-white">
      <h2 className="text-xl mb-4">Weekly Comparison</h2>

      <div className="space-y-2">
        <p>This Week: ₦{weekly.thisWeek}</p>
        <p>Last Week: ₦{weekly.lastWeek}</p>

        <p className={`font-semibold ${color}`}>
          {weekly.message}
        </p>
      </div>
    </div>
  );
}