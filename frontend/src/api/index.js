import axios from "axios";

const url = "http://localhost:3500/viewbugs";

export const fetchBugs = async () => {
  const response = await axios.get(url);
  console.log(response);
  return response;
};

export const createBug = (newBug) => axios.post(url, newBug);
export const markComplete = (id) => axios.patch(`${url}/${id}/markComplete`);
export const updateBug = (id, updatedBug) =>
  axios.patch(`${url}/${id}`, updatedBug);
export const deleteBug = (id) => axios.delete(`${url}/${id}`);
