import universityData from '../../constants/universityData.json';
import tutorIcon from '../../assets/images/teachers-emoji.png';
import FORMS from '../../constants/forms';

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

const University = ({
  onEdit,
  onDelete,

  showForm,

  handleShowForm,
  onDeleteCard,
  listData,
  toggleModal,
  isOpenModal,
  onEditCard,
  addCity,
}) => {
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
          onDeleteCard={onDeleteCard}
          listData={listData}
          toggleModal={toggleModal}
          isOpenModal={isOpenModal}
          onEditCard={onEditCard}
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
    </>
  );
};

export default University;
