import axios from "axios";

const BASE_URL = "https://tcmj4fgxbj.execute-api.us-east-1.amazonaws.com";

export const get = async (path: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${path}`);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error calculating area:", error);
    throw error;
  }
};

export const put = async (path: string, body: any) => {
  try {
    const response = await axios.put(`${BASE_URL}/${path}`, body);
    return response.data;
  } catch (error) {
    console.error("Error in PUT request:", error);
    throw error;
  }
};

export const post = async (path: string, body: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/${path}`, body);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};

export const patch = async (path: string, body: any) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${path}`, body);
    return response.data;
  } catch (error) {
    console.error("Error in PATCH request:", error);
    throw error;
  }
};

export const del = async (path: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${path}`);
    return response.data;
  } catch (error) {
    console.error("Error in DELETE request:", error);
    throw error;
  }
};

const API = {
  get,
  put,
  post, 
  del,
  patch
};

export default API;
