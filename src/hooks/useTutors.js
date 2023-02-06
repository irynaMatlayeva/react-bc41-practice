import { useState, useEffect } from 'react';
import universityData from '../constants/universityData.json';

const useTutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    localStorage.setItem('tutors', JSON.stringify(universityData.tutors));

    const tutorFromLS = JSON.parse(localStorage.getItem('tutors'));

    tutorFromLS ? setTutors(tutorFromLS) : setTutors([]);
  }, []);

  return [tutors, setTutors];
};

export default useTutors;
