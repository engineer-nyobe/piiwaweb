import axios from "axios";
import { API_URL } from "./Config";

export const GetAllUsers = async () => {
  return axios.get(`${API_URL}/users`).then((res) => res.data);
};
export const GetUserById = async ({id}) => {
  return axios.get(`${API_URL}/users/${id}`).then((res) => res.data);
};
export const CountUsers = async () => {
  return axios.get(`${API_URL}/users/number`).then((res) => res.data);
};
