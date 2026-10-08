import {users} from '../../data/users.js';
import UsersListItem from '../UsersListItem/UsersListItem';
const UsersList = () => (
    <div>
        <ul>
            {users.map((userData) => (
                <UsersListItem userData={userData} />
            ))}
        </ul>
    </div>
);
export default UsersList;