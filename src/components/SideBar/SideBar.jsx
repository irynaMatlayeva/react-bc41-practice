//import UserImg from '../../assets/images/mock-user-ava.svg';
import { BsPersonCircle } from 'react-icons/bs';
import MenuList from 'components/Menu/MenuList';

const SideBar = () => {
  return (
    <aside>
      <div>Title</div>
      <MenuList />
      <div>
        <BsPersonCircle color="#FF6B0A" size={25} />
        Бил Гейтс
      </div>
    </aside>
  );
};
export default SideBar;
