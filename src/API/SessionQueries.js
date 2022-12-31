import axios from "axios";
import { API_URL } from "./Config";

export const CloseSession = async (id,end) => {
  return axios.put(`${API_URL}/session/${id}`, end);
};
export const CreateSession = async (sessiondata) => {
  return axios.post(`${API_URL}/session`, sessiondata);
};