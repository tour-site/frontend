// 📁 src/api/adminApi.js
import axiosInstance from './axiosInstance';

export const fetchAllMembers = () => axiosInstance.get('/api/admin/members');

export const updateMember = (id, data) =>
  axiosInstance.put(`/api/admin/members/${id}`, data);


export const fetchDailySignupStats = () =>
  axiosInstance.get('/api/admin/members/stats/daily');