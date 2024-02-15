import axios from 'axios';

const baseURL = 'https://medicalsociety.onrender.com/api/v1';

export async function loginAdmin(email: string, password: string) {
    const response = await axios.post(`${baseURL}/admins/login`, {
        email,
        password
    });
    return response.data;
}

export async function doctorResetPassword(token: string, password: string) {
    const response = await axios.post(`${baseURL}/doctors/reset-password`, {
        token,
        password,
    });
    return response.data;
}

export async function PatientsResetPassword(token: string, password: string) {
    const response = await axios.post(`${baseURL}/patients/reset-password`, {
        token,
        password,
    });
    return response.data;
}