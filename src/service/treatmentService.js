import axios from 'axios';
import { API_BASE_URL } from '../service/config'; 


export const fetchTreatmentsByUserId = async (userId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/treatment/all/${userId}`, {
            headers: { Authorization: token }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching treatments: ', error);
        throw error;
    }
};
export const createTreatment = async (treatmentData, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/treatment/create`, treatmentData, {
            headers: { Authorization: token }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating treatment: ', error);
        throw error;
    }
};