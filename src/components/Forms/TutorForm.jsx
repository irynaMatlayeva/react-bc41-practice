import { Formik, Form } from 'formik';
import { FieldStyled, ErrMessage } from './TutorForm.styled';
import { object, string } from 'yup';
import { Button } from 'components';
import { createTutorsAction } from '../../store/tutors/actions';
import { useDispatch } from 'react-redux';

const fieldsData = [
  { name: 'lastName', label: 'Прізвище' },
  { name: 'firstName', label: 'Імʼя' },
  { name: 'patronymic', label: 'По-батькові' },
  { name: 'phone', label: 'Телефон' },
  { name: 'email', label: 'Емеіл' },
  { name: 'city', label: 'Місто' },
];

const validationSchemaForm = object().shape({
  firstName: string().required('Заповніть це поле'),
  lastName: string()
    .min(2, 'Введіть мінімальну кількість символів')
    .max(9, 'Ви ввели забагато символів')
    .required(),
  patronymic: string().required(),
  phone: string().required(),
  email: string().required(),
  city: string().required(),
});

const TutorForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',
  };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    //  console.log('🚀 ~ values', values);
    dispatch(createTutorsAction(values));
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={validationSchemaForm}
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form>
          <h3>Добавление преподавателя</h3>
          {fieldsData.map(({ name, label }) => {
            return (
              <div key={name}>
                <FieldStyled
                  type="text"
                  id={name}
                  name={name}
                  placeholder={label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[name] || ''}
                />
                <ErrMessage component="div" name={name} />
              </div>
            );
          })}

          <Button text="add" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default TutorForm;
