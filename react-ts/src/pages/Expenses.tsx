import { useEffect, useState } from "react";
import { GetExpenses, DeleteExpense } from "../api/expenseApi";

export default function Expenses() {
  const [expenses, setExpenses] = useState<any[]>([]);

  const fetchExpenses = async () => {
    const data = await GetExpenses();
    console.log(data)
    setExpenses(data.expenses);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id: string) => {
    await DeleteExpense(id);
    fetchExpenses();
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl mb-4">All Expenses</h2>

      <div className="space-y-3">
        {expenses.length === 0 ? (
            <p>No expenses yet</p>
            ) : (
        expenses.map((exp) => (
          <div
            key={exp._id}
            className="bg-[#1C2541] p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                {exp.type} - {exp.amount}
              </p>
              <p className="text-sm text-gray-400">
                {exp.category} • {exp.description}
              </p>
            </div>
    
            <div className="flex gap-2">
              <button className="bg-yellow-500 px-3 py-1 rounded">
                Edit
              </button>

              <button
                onClick={() => handleDelete(exp._id)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
     )}
       
      </div>
    </div>
  );
}