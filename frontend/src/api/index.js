import axios from "axios";

const url = "http://localhost:3500/viewbugs";

export const fetchBugs = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const createBug = async (newBug) => {
  const response = await axios.post(url, newBug);
  return response.data;
};

export const deleteBug = async (id) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};

export const markComplete = async (id) => {
  const response = await axios.patch(`${url}/${id}/markComplete`);
  return response.data;
};

export const updateBug = async (id, updatedBug) => {
  const response = await axios.patch(`${url}/${id}`, updatedBug);
  return response.data;
};
