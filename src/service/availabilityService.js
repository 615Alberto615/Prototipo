import axios from 'axios';
import { API_BASE_URL } from '../service/config'; 


export const getAllAvailabilities = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/availability/grouped-by-user`, {
            headers: {
                'Authorization': `Bearer ${token}`,  // Asegúrate de incluir 'Bearer ' antes del token
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
export const createAvailability = async (availabilityData, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/availability/create`, availabilityData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const updateAvailability = async (availabilityId, updatedAvailability, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/availability/update/${availabilityId}`, updatedAvailability, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json' // Asegurar el tipo de contenido
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const updateAvailabilityStatus = async (availabilityId, newStatus, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/availability/updateStatus/${availabilityId}?newStatus=${newStatus}`, null, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json' // Asegurar el tipo de contenido

            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};



export const getAvailabilitiesByUserId = async (userId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/availability/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,  // Asegúrate de incluir 'Bearer ' antes del token
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // Aquí puedes manejar el error 401 de manera específica
            throw new Error('Token inválido o expirado');
        }
        throw error;  // Lanzar el error para que pueda ser manejado en el componente
    }
};

export const getAvailabilityById = async (availabilityId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/availability/${availabilityId}`, {
            headers: {
                'Authorization': token,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const deleteAvailability = async (availabilityId, token) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/availability/delete/${availabilityId}`, {
            headers: {
                'Authorization': token,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getActiveAvailabilities = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/availability/active`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
