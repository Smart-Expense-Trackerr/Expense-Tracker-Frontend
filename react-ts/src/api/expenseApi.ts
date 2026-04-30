const API_BASE_URL = 'http://localhost:5000/expense';

type expenseProp = {
    type: "income" | "expense" | "asset";
    amount: number;
    category: "food" | "transport" | "bills" | "airtime" | "shopping" | "others";
    description?: string;
    currency: "NGN" | "USD" | "EUR";
}

export async function expenseForm({  }: expenseProp) {
    const response = await fetch(`${API_BASE_URL}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            
        })
    })
    const data = await response.json()as {
        message?: string;
        error?: string; 
    }
    if (!response.ok) {
    throw new Error(data.error || data.message || "Failed to create expense");
    }
    return data;
    
    
}