import styles from './UsersListItem.module.scss';
import styled from 'styled-components';
import deleteIcon from '../../../assets/delete-icon.svg';
import Button from '../../atoms/Button.jsx';

const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        background-color: lightgray;
    }
`;

const UsersListItem = (props) => {
    return (
        <Wrapper className={styles.user}>
            <div>{props.userData.average}</div>
            <div>
                <p>{props.userData.name}</p>
                <p>{props.userData.attendance}%</p>
            </div>
            <Button>
                <img src={deleteIcon} alt="Delete" />
            </Button>
            <Button secondary>+</Button>
        </Wrapper>
    );
};
export default UsersListItem;