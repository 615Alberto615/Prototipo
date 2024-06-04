import axios from 'axios';
import { API_BASE_URL } from '../service/config'; 


export const fetchPeopleByRole = async (roleId, token, page = 0, size = 3) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/peopleByRole/${roleId}?getAll=true`, {
            headers: { Authorization: token },
            params: { page, size }
        });
        return response.data;
    } catch (error) {
        // Manejar los errores de manera adecuada en tu aplicación
        console.error('Error fetching data: ', error);
        throw error;
    }
};
export const fetchUserById = async (userId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/find/${userId}`, {
            headers: { Authorization: token },
        });
        console.log("Fetch user response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by ID: ', error);
        throw error;
    }
};

export const fetchPeopleById = async (userId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/findPerson/${userId}`, {
            headers: { Authorization: token },
        });
        console.log("Fetch people response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching people by ID: ', error);
        throw error;
    }
};

export const fetchPatientsByRole = async (roleId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/peopleByRole/${roleId}`, {
            headers: { Authorization: token }
        });
        return response.data.data || []; // Asegurarnos de que siempre devuelve un array
    } catch (error) {
        console.error('Error fetching patients by role: ', error);
        throw error;
    }
};

export const fetchPatientsByRole2 = async (roleId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/peopleByRole/${roleId}`, {
            headers: { Authorization: token }
        });
        return response.data; // Devolvemos directamente response.data
    } catch (error) {
        console.error('Error fetching patients by role: ', error);
        throw error;
    }
};


// Mostrar todos los usuarios para el admin
export const fetchAllUsers = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/all`, {
            headers: { Authorization: token },
        });
        console.log("Fetch all users response:", response.data);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching all users: ', error);
        throw error;
    }
};

//Actualizar el usuario por el admin
export const updateUser = async (userData, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user/updateUser`, userData, {
            headers: { Authorization: token },
        });
        console.log("Update user response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating user by admin: ', error);
        throw error;
    }
};


export const changeUserRole = async (userId, newRoleId, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user/changeRole/${userId}`, {
            rolId: newRoleId
        }, {
            headers: { Authorization: token },
        });
        console.log("Change role response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error changing user role: ', error);
        throw error;
    }
};

// Función para cambiar el estado de un usuario
export const changeUserStatus = async (userId, newStatus, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user/changeStatus/${userId}`, {
            status: newStatus
        }, {
            headers: { Authorization: token },
        });
        console.log("Change status response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error changing user status: ', error);
        throw error;
    }
};
