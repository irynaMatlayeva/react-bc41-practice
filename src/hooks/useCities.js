import { useState, useEffect } from 'react';
import universityData from '../constants/universityData.json';
import axios from 'axios';

const BASE_URL = 'https://63e0f4a959bb472a742ced69.mockapi.io';

axios.defaults.baseURL = BASE_URL;

const useCities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('/cities').then(({ data: cities }) => {
      localStorage.setItem(
        'cities',
        JSON.stringify(
          cities.map(({ text, id }) => ({
            text,
            relation: 'cities',
            id,
          }))
        )
      );
      const citiesFromLS = JSON.parse(localStorage.getItem('cities'));

      citiesFromLS ? setCities(citiesFromLS) : setCities([]);
    });
  }, []);

  return [cities, setCities];
};

export default useCities;
