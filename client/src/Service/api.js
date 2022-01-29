import axios from "axios";

const usersUrl = "http://localhost:5000/transactions";

export const getTransactions = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/get-all-transactions`);
};

export const addTransaction = async (transaction) => {
  return await axios.post(`${usersUrl}/create`, transaction);
};

export const deleteTransaction = async (id) => {
  return await axios.post(`${usersUrl}/delete`, { _id: id });
};

export const editTransaction = async (transaction) => {
  return await axios.post(`${usersUrl}/update`, transaction);
};
