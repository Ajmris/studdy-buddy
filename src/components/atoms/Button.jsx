import styled from 'styled-components';
import DeleteIcon from '../../assets/delete-icon.svg';
import { StyledButton } from './Button.styles.js';

const Button = () => (
    <StyledButton>
        <img src={DeleteIcon} alt="" />
    </StyledButton>
);

export default Button;