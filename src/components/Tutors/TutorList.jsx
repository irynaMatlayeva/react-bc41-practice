import PT from 'prop-types';
import TutorsItem from './TutorsItem';

const TutorList = ({ tutors, deleteTutor }) => {
  return tutors.map(tutor => (
    <TutorsItem key={tutor.phone} {...tutor} deleteTutor={deleteTutor} />
  ));
};

export default TutorList;

TutorList.propTypes = {
  tutors: PT.arrayOf(PT.shape({ phone: PT.string.isRequired })),
};
