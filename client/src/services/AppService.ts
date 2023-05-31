import axios from "axios";

const API = axios.create({
  baseURL: `https://hostshare.onrender.com`,
  //   baseURL: `http://localhost:5000`,
});

export const getcategoriesApi = async () => {
  const {data} = await API.get("/categories/all");

  return data;
};
export const getdataApi = async () => {
  const {data} = await API.get("/data/all");

  return data;
};
export const getimagesApi = async () => {
  const {data} = await API.get("/images/all");

  return data;
};
