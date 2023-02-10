import axios from 'axios';

const URL_TUTORS = 'tutors';
const axiosDB = axios.create({
  baseURL: 'https://63a99dbd594f75dc1dbb0bc9.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});
export const fetchTutors = () => {
  return axiosDB.get(`/${URL_TUTORS}`);
};
export const createTutor = data => {
  return axiosDB.post(`/${URL_TUTORS}`, JSON.stringify(data));
};
export const deleteTutor = id => {
  return axiosDB.delete(`/${URL_TUTORS}/${id}`);
};
