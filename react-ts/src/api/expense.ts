// const API_BASE_URL = 'http://localhost:5000/expense';

// type expenseProp = {

// }

// export async function expenseForm({  }: expenseProp) {
//     const response = await fetch(`${API_BASE_URL}/signup`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name,
//             email,
//             password
//         })
//     })
//     const data = await response.json()as {
//         message?: string;
//         user?: any;
//         token?: string;
//         error?: string; 
//     }
//     if (!response.ok) {
//     throw new Error(data.error || data.message || "Signup failed");
//     }
//     localStorage.setItem("token", data.token || "");
//     localStorage.setItem("tokenExpiry",(Date.now() + 60 * 60 * 1000).toString());
//     return data;
    
    
// }