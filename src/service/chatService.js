// chatService.js
import axios from 'axios';
import { API_BASE_URL } from '../service/config'; 

export const startChatSession = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/chat/start`);
        return response.data;
    } catch (error) {
        console.error('Error starting chat session:', error);
        throw error;
    }
};

export const sendMessage = async (sessionId, message) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/chat/send`, { sessionId, message });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const fetchChatHistory = async (sessionId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/chat/history/${sessionId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching chat history:', error);
        throw error;
    }
};
