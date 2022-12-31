import axios from "axios";
import { API_URL } from "./Config";

export const GetAllTrans = async () => {
  return axios.get(`${API_URL}/transaction`).then((res) => res.data);
};
export const GetUsertoUserTransactionById = async (id) => {
  return axios.get(`${API_URL}/transaction/${id}`).then((res) => res.data);
};