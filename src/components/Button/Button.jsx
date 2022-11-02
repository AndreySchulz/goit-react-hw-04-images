import PropTypes from 'prop-types';
import { MainButton } from './Button.styled';
const Button = ({ updatePage }) => {
  return (
    <MainButton type="button" onClick={updatePage}>
      Load more
    </MainButton>
  );
};

export default Button;

Button.propTypes = {
  updatePage: PropTypes.func.isRequired,
};
