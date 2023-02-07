import { useState, useEffect } from 'react';
import { getDepartments } from '../api/departments';
import universityData from '../constants/universityData.json';

const useDepartments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartments().then(({ data: department }) => {
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
