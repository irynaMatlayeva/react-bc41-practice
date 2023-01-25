import PT from 'prop-types';

const MenuItem = ({ name, link, image }) => {
  return (
    <li>
      <a href={link}>
        {image}
        {name}
      </a>
    </li>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  name: PT.string.isRequired,
  link: PT.string.isRequired,
  image: PT.object.isRequired,
};
