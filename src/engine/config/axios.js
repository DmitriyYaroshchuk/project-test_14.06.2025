import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const api = Object.freeze({
    getDestinations(params) {
        return axiosConfig.get('destinations', { params });
    },
    getHotels(params) {
        return axiosConfig.get('hotels', { params });
    }
})