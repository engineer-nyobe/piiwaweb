import axios from "axios";
import { API_URL } from "./Config";

export const GetServicePoint = async () => {
  return axios.get(`${API_URL}/servicepoint`).then((res) => res.data);
};
export const CreateServicePoint = async (spdata) => {
  return axios.post(`${API_URL}/servicepoint`, spdata);
};
export const GetSpById = async (id) => {
  return axios.get(`${API_URL}/servicepoint/${id}`).then((res) => res.data);
};
export const GetSessionbyId = async (id) => {
  return axios.get(`${API_URL}/session/${id}`).then((res) => res.data);
};