import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { ErrMessage } from './TutorForm.styled';
import { Button } from 'components';

const InfoForm = ({ onSubmit, title, placeholder }) => {
  const initialValues = { name: '' };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log('🚀 ~ values', values);
    onSubmit(values.name);
    resetForm();
    setSubmitting(false);
  };

  const validationSchemaForm = object().shape({
    name: string().min(2, 'Введіть мінімальну кількість символів'),
  });
  return (
    <Formik
      validationSchema={validationSchemaForm}
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
    >
      {({
        values,

        handleChange,
        handleBlur,
        handleSubmit,

        /* and other goodies */
      }) => (
        <Form>
          <div>
            <h3>{title}</h3>
            <Field
              type="text"
              id={placeholder}
              name="name"
              placeholder={placeholder}
              value={values.name || ''}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <ErrMessage component="div" name="name" />
          </div>

          <Button text="add" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default InfoForm;
