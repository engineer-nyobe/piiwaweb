import axios from "axios";
import { API_URL } from "./Config";

export const CreateAccount = (ownerid) =>
  axios.post(`${API_URL}/account`, ownerid);

export const GetAccountById = async (id) => {
  return axios.get(`${API_URL}/account/${id}`).then((res) => res.data);
};

export const UpdateAmountAccount = (id, amount) =>
  axios.put(`${API_URL}/account/amount/${id}`, amount);

export const UpdateTypeAccount = (id, type) =>
  axios.put(`${API_URL}/account/type/${id}`, type);
