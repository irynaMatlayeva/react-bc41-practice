import axios from 'axios';

const BASE_URL = 'https://63e0f4a959bb472a742ced69.mockapi.io';
// const URL = process.env.REACT_APP_URL;

// axios.defaults.baseURL = URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const postData = async (url, data) => {
  try {
    return await instance.post(`/${url}`, JSON.stringify(data));
  } catch (error) {
    return console.log(error);
  }
};

export const getData = url => {
  try {
    return instance.get(`/${url}`);
  } catch (error) {
    return console.log(error);
  }
};

export const updateData = async (url, data) => {
  try {
    return await instance.put(`/${url}`, data);
  } catch (error) {
    return console.log(error);
  }
};

export const deleteData = async url => {
  try {
    return await instance.delete(`/${url}`);
  } catch (error) {
    return console.log(error);
  }
};
