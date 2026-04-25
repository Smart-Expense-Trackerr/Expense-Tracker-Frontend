import { useState } from "react";
import ExpenseModal from "./Modals/ExpenseModal";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const handleAddExpense = async (data: any) => {
    console.log(data);

    };
    return(
        <div>
            
        <aside className="w-64 bg-[#1C2541] p-6 flex flex-col gap-6">
            <h1 className="text-xl font-bold text-white">
            Smart Expense
            </h1>

            <nav className="flex flex-col gap-4">
            <button className="text-left hover:text-blue-400">
                Overview
            </button>

            <button className="text-left hover:text-blue-400">
                Expenses
            </button>

            <button className="text-left hover:text-blue-400">
                Analytics
            </button>
            </nav>
            <button 
            onClick={() => setOpen(true)}
            className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
            + Add Expense
            </button>
        </aside>

        <ExpenseModal 
            open={open}
            onClose={() => setOpen(false)}
            onSubmit={handleAddExpense}
            />
            
        </div>
    )
}