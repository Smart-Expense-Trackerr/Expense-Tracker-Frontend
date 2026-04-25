const API_BASE_URL = 'http://localhost:5000/user';

type signupProp = {
    name: string;
    email: string;
    password: string;
}

type loginprop = {
    email: string;
    password: string;
    Date: DateConstructor;
}
    
export async function signup({ name, email, password }: signupProp) {
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
    const data = await response.json()as {
        message?: string;
        user?: any;
        token?: string;
        error?: string; 
    }
    if (!response.ok) {
    throw new Error(data.error || data.message || "Signup failed");
    }
    localStorage.setItem("token", data.token || "");
    localStorage.setItem("tokenExpiry",(Date.now() + 60 * 60 * 1000).toString());
    return data;
    
    
}

export async function login({email, password, Date}: loginprop) {
    
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    const data = await response.json()as {
        token?: string;
        error?: string;
        message?: string;
    };

    if (!response.ok) {
        throw new Error(data.error || data.message || 'Login failed');
    }
    localStorage.setItem("token", data.token || "");
    localStorage.setItem("tokenExpiry",(Date.now() + 60 * 60 * 1000).toString());
    return data;

}