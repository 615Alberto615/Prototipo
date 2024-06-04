import axios from 'axios';
import { API_BASE_URL } from '../service/config'; 


export const createQuote = async (quoteData, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/quote/create`, quoteData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating quote: ', error);
        throw error;
    }
};

export const fetchQuotesByTherapist = async (therapistId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/quote/by-therapist/${therapistId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching quotes:", error);
        throw error;
    }
};


// Conseguir el historial clínico del terapeuta con estado false
export const fetchHistorialByTherapist = async (therapistId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/quote/therapist/historial/${therapistId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching patient history:", error);
        throw error;
    }
};
