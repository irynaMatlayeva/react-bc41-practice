import PT from 'prop-types';
const Main = ({ children }) => <main>{children}</main>;

export default Main;

Main.propTypes = {
  children: PT.node.isRequired,
};
