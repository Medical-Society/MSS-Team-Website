import axios from 'axios';


export async function loginAdmin(email: string, password: string) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/admins/login`, {
        email,
        password
    });
    return response.data;
}

export async function doctorResetPassword(token: string, password: string) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/doctors/reset-password`, {
        token,
        password,
    });
    return response.data;
}

export async function PatientsResetPassword(token: string, password: string) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/patients/reset-password`, {
        token,
        password,
    });
    return response.data;
}

export async function verifyEmail(token: string, userType: string) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/${userType}/verify`, {
        token
    });
    return response.data;
}