import PT from 'prop-types';
import { Paper } from 'components';
import { Container, ColumnItem } from './TutorsItem.styled';

const TutorsItem = ({
  lastName,
  firstName,
  patronymic,
  phone,
  email,
  city,
  options,
  deleteTutor,
}) => {
  return (
    <Paper>
      <Container>
        <ColumnItem>
          <span>{lastName}</span>
          <span>{firstName}</span>
          <span>{patronymic}</span>
        </ColumnItem>
        <ColumnItem>
          <span>{phone}</span>
          <span>{email}</span>
          <span>{city}</span>
        </ColumnItem>
        <ColumnItem>
          <p>{options}</p>
        </ColumnItem>
        <ColumnItem>
          <button type="button" onClick={() => deleteTutor(firstName)}>
            Delete
          </button>
        </ColumnItem>
      </Container>
    </Paper>
  );
};

export default TutorsItem;

TutorsItem.propTypes = {
  lastName: PT.string.isRequired,
  firstName: PT.string.isRequired,
  patronymic: PT.string.isRequired,
  phone: PT.string.isRequired,
  email: PT.string.isRequired,
  city: PT.string.isRequired,
  options: PT.string,
};
