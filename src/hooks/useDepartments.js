import { useState, useEffect } from 'react';
import universityData from '../constants/universityData.json';

import axios from 'axios';

const BASE_URL = 'https://63e0f4a959bb472a742ced69.mockapi.io';

axios.defaults.baseURL = BASE_URL;

const useDepartments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('/departments').then(({ data: department }) => {
      localStorage.setItem(
        'departments',
        JSON.stringify(
          department.map(({ name, id }) => ({
            text: name,
            relation: 'departments',
            id,
          }))
        )
      );

      const departmentsFromLS = JSON.parse(localStorage.getItem('departments'));

      departmentsFromLS
        ? setDepartments(departmentsFromLS)
        : setDepartments([]);
    });
  }, []);

  return [departments, setDepartments];
};

export default useDepartments;
