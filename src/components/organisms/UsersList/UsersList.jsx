import React, {useState, useEffect} from 'react';
import {users as usersData} from '../../../data/users.js';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem.jsx';
import { Wrapper, StyledList } from './UsersList.styles.js';

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usersData){
                resolve([...usersData]);
            }else{
                reject('Error: No users found');
            }
        }, 2000);
    });
};

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState([]);

    useEffect(() => {
        setLoadingState(true);
        mockAPI()
            .then((data) => {
                setUsers(data);
                setLoadingState(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        console.log('Loading state changed');
    }, [isLoading]);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name);
        setUsers(filteredUsers);
    };
    return(
            <Wrapper>
                <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
                <StyledList>
                    {users.map((userData) => (
                        <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
                    ))}
                </StyledList>
            </Wrapper>
        );
}

export default UsersList;