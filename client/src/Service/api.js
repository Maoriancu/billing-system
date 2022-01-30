import axios from "axios";

const transactionsUrl = "http://localhost:5000/transactions";

export const getTransactions = async (id) => {
  id = id || "";
  return await axios.get(`${transactionsUrl}/get-all-transactions`);
};

export const addTransaction = async (transaction) => {
  return await axios.post(`${transactionsUrl}/create`, transaction);
};

export const deleteTransaction = async (id) => {
  return await axios.post(`${transactionsUrl}/delete`, { _id: id });
};

export const editTransaction = async (transaction) => {
  return await axios.post(`${transactionsUrl}/update`, transaction);
};
