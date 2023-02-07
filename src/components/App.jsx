import { useState } from 'react';

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
import useTutors from 'hooks/useTutors';
import useCities from 'hooks/useCities';
import useDepartments from 'hooks/useDepartments';
import {
  postDepartment,
  deleteDepartment,
  updateDepartment,
} from '../api/departments';
import { postCity, deleteCity, updateCity } from '../api/citiesApi';

const App = () => {
  const [tutors, setTutors] = useTutors();

  const [cities, setCities] = useCities();

  const [departments, setDepartments] = useDepartments();

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
    postCity({ text: name }).then(({ data }) => {
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
    postDepartment({ name }).then(({ data: { id, name } }) => {
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
      deleteCity(id).then(res => {
        const resId = res.data.id;
        const newCityArr = cities.filter(({ id }) => resId !== id);
        setCities(newCityArr);
      });
    } else {
      deleteDepartment(id).then(res => {
        const resId = res.data.id;
        const newDepartmentsArr = departments.filter(({ id }) => resId !== id);

        setDepartments(newDepartmentsArr);
      });
    }
  };

  const toggleModal = action => {
    setIsModalOpen(isModalOpen === action ? null : action);
  };

  const handleEditCard = data => {
    const { id, name, relation } = data;

    if (relation === 'cities') {
      updateCity(id, { id, text: name }).then(res => {
        const resId = res.data.id;

        const findIndexCity = cities.findIndex(item => item.id === resId);

        setCities(prevState => [
          ...prevState.slice(0, findIndexCity),
          { id: resId, text: res.data.text, relation },
          ...prevState.slice(findIndexCity + 1),
        ]);
      });
    } else {
      updateDepartment(id, { id, name }).then(res => {
        const resId = res.data.id;

        const findIndexDepartments = departments.findIndex(
          item => item.id === resId
        );
        setDepartments(prevState => [
          ...prevState.slice(0, findIndexDepartments),
          { id: resId, text: res.data.name, relation },
          ...prevState.slice(findIndexDepartments + 1),
        ]);
      });
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
