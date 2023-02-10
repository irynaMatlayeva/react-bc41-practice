import PT from 'prop-types';
import { useSelector } from 'react-redux';
import TutorsItem from './TutorsItem';

const TutorList = () => {
  const tutors = useSelector(state => state.tutors);

  return tutors.map(tutor => <TutorsItem key={tutor.phone} {...tutor} />);
};

export default TutorList;

TutorList.propTypes = {
  tutors: PT.arrayOf(PT.shape({ phone: PT.string.isRequired })),
};
