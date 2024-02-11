import axios from 'axios';

const baseURL = 'https://medicalsociety.onrender.com/api/v1/admins';

export async function loginAdmin(email: string, password: string) {
    const response = await axios.post(`${baseURL}/login`, {
        email,
        password
    });
    return response.data;
}