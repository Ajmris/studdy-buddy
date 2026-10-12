import React from 'react';
import {users} from '../../../data/users.js';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem.jsx';
import { Wrapper, StyledList } from './UsersList.styles.js';

class UsersList extends React.Component {
    state={
        users: users,
    }
    toggleListTitle=()=>{
        this.setState((prevState)=>({ isUsersList: !this.state.isUsersList }));
    };
    deleteUser=(name)=>{
        const fillteredUsers = this.state.users.filter(user=> user.name !== name);
        this.setState({users: fillteredUsers});
    };
    render(){
        // destrukturyzacja
        const {isUsersList} = this.state;
        return(
            <Wrapper>
                <h1>{isUsersList ? `User's list`:'Students list'}</h1>
                <button onClick={this.toggleListTitle}>
                    Change title
                </button>
                <StyledList>
                    {this.state.users.map((userData) => (
                        <UsersListItem deleteUser={this.deleteUser} key={userData.name} userData={userData} />
                    ))}
                </StyledList>
            </Wrapper>
        );
    }
}
export default UsersList;