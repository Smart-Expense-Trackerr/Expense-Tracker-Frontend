const API_BASE_URL = 'http://localhost:5000/user';
export async function signup() {
    const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
    }
    return data;
    
}