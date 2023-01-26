import { Paper } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';

const GeneralCardItem = ({ text, isOpenDown }) => {
  return (
    <Paper>
      <li>
        <span>{text}</span>
        <button onClick={isOpenDown}>
          <BsThreeDotsVertical />
        </button>
      </li>
    </Paper>
  );
};

export default GeneralCardItem;
