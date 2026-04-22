import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const submitLead = (data) => api.post('/leads', data);
export const getLeads = (params) => api.get('/leads', { params });
export const exportLeads = () => api.get('/leads/export', { responseType: 'blob' });
export const deleteLead = (id) => api.delete(`/leads/${id}`);
export const adminLogin = (data) => api.post('/auth/login', data);
export const verifyToken = () => api.get('/auth/verify');

export default api;
