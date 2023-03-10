import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { ErrMessage } from './TutorForm.styled';
import { Button } from 'components';
import { useDispatch } from 'react-redux';

const InfoForm = ({
  onSubmit,
  title,
  placeholder,
  idItem,
  relation,
  textItem,
  toggleModal,
}) => {
  const dispatch = useDispatch();

  const initialValues = { name: textItem || '' };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const data = idItem
      ? { id: idItem, relation, text: values.name }
      : values.name;
    dispatch(onSubmit(data));
    toggleModal();
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

          <Button text={idItem ? 'save' : 'add'} type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default InfoForm;
