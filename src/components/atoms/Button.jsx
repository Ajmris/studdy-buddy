import DeleteIcon from '../../assets/delete-icon.svg';
import { StyledButton } from './Button.styles';

const Button = (props) => (
    <StyledButton {...props}>
        <img src={DeleteIcon} alt="Delete" />
    </StyledButton>
);

export default Button;