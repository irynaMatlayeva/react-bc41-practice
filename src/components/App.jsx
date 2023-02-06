import {
  SideBar,
  Main,
  Paper,
  UniversityCard,
  TutorList,
  Section,
  GeneralCardList,
  Button,
  TutorForm,
  InfoForm,
} from '../components';
import universityData from '../constants/universityData.json';
import tutorIcon from '../assets/images/teachers-emoji.png';
import FORMS from '../constants/forms';
import { useState } from 'react';
import useTutors from 'hooks/useTutors';
import useCities from 'hooks/useCities';
import useDepartments from 'hooks/useDepartments';
import axios from 'axios';

const BASE_URL = 'https://63e0f4a959bb472a742ced69.mockapi.io';

axios.defaults.baseURL = BASE_URL;

const App = () => {
  const [tutors, setTutors] = useTutors();

  const [cities, setCities] = useCities();

  //   console.log(cities);

  const [departments, setDepartments] = useDepartments();
  //   console.log(departments);

  const [showForm, setShowForm] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(null);

  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  const addTutor = tutor => {
    setTutors([...tutors, tutor]);
    setShowForm(null);
  };

  const deleteTutor = name => {
    setTutors([...tutors.filter(({ firstName }) => firstName !== name)]);
  };

  const handleShowForm = name => {
    setShowForm(showForm === name ? null : name);
  };

  const addCity = name => {
    axios.post('/cities', { text: name }).then(({ data }) => {
      if (cities.some(city => city.text.toLowerCase() === name.toLowerCase())) {
        alert('This city exist');
      } else {
        const newCity = { ...data, relation: 'cities' };

        setCities([...cities, newCity]);
        setShowForm(null);
      }
    });
  };

  const addDepartment = name => {
    axios.post('/departments', { name }).then(({ data: { id, name } }) => {
      if (
        departments.some(
          department => department.text.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert('This department exist');
      } else {
        const newDepartment = { text: name, id, relation: 'departments' };

        setDepartments([...departments, newDepartment]);
        setShowForm(null);
      }
    });
  };

  const handleDeleteCard = (id, relation) => {
    if (relation === 'cities') {
      const newCityArr = cities.filter(({ text }) => text !== id);
      setCities(newCityArr);
    } else {
      const newDepartmentsArr = departments.filter(({ text }) => text !== id);
      setDepartments(newDepartmentsArr);
    }
  };

  const toggleModal = action => {
    setIsModalOpen(isModalOpen === action ? null : action);
  };

  const handleEditCard = data => {
    const { id, name, relation } = data;

    if (relation === 'cities') {
      const findIndexCity = cities.findIndex(item => item.text === id);
      setCities(prevState => [
        ...prevState.slice(0, findIndexCity),
        { text: name, relation },
        ...prevState.slice(findIndexCity + 1),
      ]);
    } else {
      const findIndexDepartments = departments.findIndex(
        item => item.text === id
      );
      setDepartments(prevState => [
        ...prevState.slice(0, findIndexDepartments),
        { text: name, relation },
        ...prevState.slice(findIndexDepartments + 1),
      ]);
    }
  };

  return (
    <div className="app">
      <SideBar></SideBar>
      <Main>
        <Section isRightPosition isRow title="Информация о университете">
          <UniversityCard
            name={universityData.name}
            onEdit={onEdit}
            onDelete={onDelete}
          />
          <Paper>
            <span>{universityData.description}</span>
          </Paper>
        </Section>

        <Section image={tutorIcon} title="Преподаватели">
          <TutorList deleteTutor={deleteTutor} tutors={tutors} />
          {showForm === FORMS.TUTOR_FORM && <TutorForm addTutor={addTutor} />}
          <Button
            action={() => handleShowForm(FORMS.TUTOR_FORM)}
            text={
              showForm === FORMS.TUTOR_FORM
                ? 'Закрити форму'
                : 'Добавить преподавателя'
            }
            icon
          />
        </Section>
        <Section>
          <GeneralCardList
            onDeleteCard={handleDeleteCard}
            listData={cities}
            toggleModal={toggleModal}
            isOpenModal={isModalOpen}
            onEditCard={handleEditCard}
          />
          {showForm === FORMS.CITY_FORM && (
            <InfoForm
              onSubmit={addCity}
              title="Добавление города"
              placeholder="Город"
            />
          )}
          <Button
            action={() => handleShowForm(FORMS.CITY_FORM)}
            text={
              showForm === FORMS.CITY_FORM ? 'Закрити форму' : 'Добавить город'
            }
            icon
          />
        </Section>

        <Section>
          <GeneralCardList
            onDeleteCard={handleDeleteCard}
            listData={departments}
            toggleModal={toggleModal}
            isOpenModal={isModalOpen}
            onEditCard={handleEditCard}
          />
          {showForm === FORMS.DEPARTMENTS_FORM && (
            <InfoForm
              onSubmit={addDepartment}
              title="Добавление филиала"
              placeholder="Филиал"
            />
          )}
          <Button
            action={() => handleShowForm(FORMS.DEPARTMENTS_FORM)}
            text={
              showForm === FORMS.DEPARTMENTS_FORM
                ? 'Закрити форму'
                : 'Добавить факультет'
            }
            icon
          />
        </Section>
      </Main>
    </div>
  );
};

export default App;
