import {users} from '../../../data/users.js';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #302574;
    width: 100%;
    max-width: 500px;
    border-radius: 25px;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0px 5px 14px -10px;
    `;
    const StyledList= styled.ul`
        list-style: none;
        margin: 0;
        padding: 0;
    `;

const UsersList = () => (
    <Wrapper>
        <StyledList>
            {users.map((userData) => (
                <UsersListItem userData={userData} />
            ))}
        </StyledList>
    </Wrapper>
);
export default UsersList;