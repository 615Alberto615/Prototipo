// roleService.js
import axios from 'axios';
import { API_BASE_URL } from '../service/config'; 

export const fetchAllRoles = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rol/all`, {
            headers: { Authorization: token },
        });
        console.log("Fetch all roles response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching all roles: ', error);
        throw error;
    }
};
