import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3500" });

export const fetchBugs = async () => {
  const response = await API.get("/viewbugs");
  return response.data;
};

export const createBug = async (newBug) => {
  const response = await API.post("/viewbugs", newBug);
  return response.data;
};

export const deleteBug = async (id) => {
  const response = await axios.delete(`/viewbugs/${id}`);
  return response.data;
};

export const markComplete = async (id) => {
  const response = await axios.patch(`/viewbugs/${id}/markComplete`);
  return response.data;
};

export const updateBug = async (id, updatedBug) => {
  const response = await axios.patch(`/viewbugs/${id}`, updatedBug);
  return response.data;
};
