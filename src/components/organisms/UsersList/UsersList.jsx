import {users} from '../../../data/users.js';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem.jsx';
import { Wrapper, StyledList } from './UsersList.styles.js';

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