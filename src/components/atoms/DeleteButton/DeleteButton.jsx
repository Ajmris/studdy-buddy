import DeleteIcon from '../../../assets/delete-icon.svg';
import { StyledButton } from './DeleteButton.styles';

const DeleteButton = (props) => (
    <StyledButton {...props}>
        <img src={DeleteIcon} alt="Delete" />
    </StyledButton>
);

export default DeleteButton;