import universityData from '../../constants/universityData.json';
import tutorIcon from '../../assets/images/teachers-emoji.png';
import FORMS from '../../constants/forms';
import {
  addCityOperation,
  fetchCities,
} from '../../store/cities/citiesOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  TutorForm,
  GeneralCardList,
  Section,
  UniversityCard,
  Paper,
  TutorList,
  Button,
  InfoForm,
} from 'components';
import { useEffect } from 'react';

const University = ({
  onEdit,
  onDelete,
  showForm,
  handleShowForm,
  toggleModal,
  isOpenModal,
  onEditCard,
}) => {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cities.cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <>
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
        <TutorList />
        {showForm === FORMS.TUTOR_FORM && <TutorForm />}
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
          listData={cities}
          toggleModal={toggleModal}
          isOpenModal={isOpenModal}
          onEditCard={onEditCard}
        />
        {showForm === FORMS.CITY_FORM && (
          <InfoForm
            onSubmit={addCityOperation}
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
    </>
  );
};

export default University;
