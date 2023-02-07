import { useState, useEffect } from 'react';
import universityData from '../constants/universityData.json';
import { getCities } from '../api/citiesApi';

const useCities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities().then(({ data: cities }) => {
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
