import PT from 'prop-types';
import { BsPlusCircleFill } from 'react-icons/bs';
import { ButtonEl } from './Button.styled';

const Button = ({
  icon,
  text,
  type = 'button',
  action,
  styles,
  ...restProps
}) => {
  return (
    <ButtonEl className={styles} type={type} onClick={action} {...restProps}>
      {icon && <BsPlusCircleFill />}
      {text}
    </ButtonEl>
  );
};

export default Button;

Button.propTypes = {
  icon: PT.bool,
  text: PT.string.isRequired,
  type: PT.string,
  action: PT.func,
  styles: PT.string,
  restProps: PT.any,
};
