import axios from "axios";
import { API_URL } from "./Config";

export const GetAllUsers = async () => {
  return axios.get(`${API_URL}/webusers`).then((res) => res.data);
};
export const GetUserById = async (id) => {
  return axios.get(`${API_URL}/webusers/${id}`).then((res) => res.data);
};
export const GetUpdatingUser = async (id) => {
  return axios
    .get(`${API_URL}/webusers/updating/${id}`)
    .then((res) => res.data);
};

export const CreateUser = (userData) => axios.post(`${API_URL}/webusers`, userData);
export const UpdateUserData = (id, userData) =>
  axios.put(`${API_URL}/webusers/${id}`, userData);


/*
export const CountUsers = async () => {
  return axios.get(`${API_URL}/users/number`).then((res) => res.data);
};

*/
