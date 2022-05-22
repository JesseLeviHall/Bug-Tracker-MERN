import axios from "axios";

const url = "http://localhost:3500/viewbugs";

export const fetchBugs = () => axios.get(url);
export const createBug = (newBug) => axios.post(url, newBug);
//export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
//export const updatePost = (id, updatedPost) =>
//  axios.patch(`${url}/${id}`, updatedPost);
//export const deletePost = (id) => axios.delete(`${url}/${id}`);
