import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3500" });

//Bugs

export const fetchBugs = async () => {
  const response = await API.get("/viewbugs");
  return response.data;
};

export const fetchUserBugs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await API.get(config);
  return response.data;
};

export const fetchBug = async (id) => {
  const response = await API.get(`/viewbugs/${id}`);
  return response.data;
};

export const createBug = async (newBug) => {
  const response = await API.post("/viewbugs", newBug);
  return response.data;
};

export const deleteBug = async (id) => {
  const response = await API.delete(`/viewbugs/${id}`);
  return response.data;
};

export const markComplete = async (id) => {
  const response = await API.put(`/markcomplete/${id}/markComplete`);
  return response.data;
};

export const updateBug = async (updatedBug) => {
  const id = updatedBug.id;
  const response = await API.patch(`/viewbugs/${id}`, updatedBug);
  return response.data;
};

//auth and users

export const registerUser = async (newUser) => {
  const response = await API.post("/user/register", newUser);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const userLogin = async (userData) => {
  const response = await API.post("/user/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const userLogOut = () => {
  localStorage.removeItem("user");
};
