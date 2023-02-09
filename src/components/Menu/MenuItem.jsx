import PT from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ name, link, image }) => {
  return (
    <li>
      <NavLink to={link}>
        {image}
        {name}
      </NavLink >
    </li>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  name: PT.string.isRequired,
  link: PT.string.isRequired,
  image: PT.object.isRequired,
};
