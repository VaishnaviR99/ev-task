import axios from 'axios';

const API_URL = 'https://tm-1-rxtw.onrender.com/api/tasks';

// Create axios instance with auth header
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export const taskService = {
  async getAllTasks() {
    const response = await axiosInstance.get(API_URL);
    return response.data;
  },

  async createTask(taskData) {
    const response = await axiosInstance.post(API_URL, taskData);
    return response.data;
  },

  async updateTask(id, taskData) {
    const response = await axiosInstance.put(`${API_URL}/${id}`, taskData);
    return response.data;
  },

  async deleteTask(id) {
    await axiosInstance.delete(`${API_URL}/${id}`);
  }
};