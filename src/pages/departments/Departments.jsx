import { InfoForm, Button, GeneralCardList, Section } from 'components';
import FORMS from 'constants/forms';
import { addDepartmentsOperation, fetchDepartments } from 'store/department/departmentOperation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { departmentsSelector } from 'store/department/selectors';


const Departments = ({
  handleDeleteCard,
  toggleModal,
  isOpenModal,
  onEditCard,
  showForm,
  addDepartment,
  handleShowForm,
}) => {

  const dispatch = useDispatch();
  const departments = useSelector(departmentsSelector);

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);


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
          onSubmit={addDepartmentsOperation}
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
