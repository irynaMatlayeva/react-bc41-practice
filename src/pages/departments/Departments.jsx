import { InfoForm, Button, GeneralCardList, Section  } from "components";
import FORMS from "constants/forms";

const Departments = ({
  handleDeleteCard,
  departments,
  toggleModal,
  isOpenModal,
  onEditCard,
  showForm,
  addDepartment,
  handleShowForm,
}) => {
  return (
    <Section>
      <GeneralCardList
        onDeleteCard={handleDeleteCard}
        listData={departments}
        toggleModal={toggleModal}
        isOpenModal={isOpenModal}
        onEditCard={onEditCard}
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
  );
};

export default Departments;
