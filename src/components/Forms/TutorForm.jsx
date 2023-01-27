import { Formik, Form, Field } from 'formik';


const fieldsData = [
  { name: 'lastName', label: 'Прізвище' },
  { name: 'firstName', label: 'Імʼя' },
  { name: 'patronymic', label: 'По-батькові' },
  { name: 'phone', label: 'Телефон' },
  { name: 'email', label: 'Емеіл' },
  { name: 'city', label: 'Місто' },
];

const TutorForm = () => {
  const initialValues = { 
    firstName: '',
    lastName: '',
    patronymic:'',
    phone: '',
    email: '',
    city: '',
 };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
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
                <Field
                  type="text"
                  id={name}
                  name={name}
                  placeholder={label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[name] || ''}
                />
              </div>
            );
          })}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default TutorForm;
