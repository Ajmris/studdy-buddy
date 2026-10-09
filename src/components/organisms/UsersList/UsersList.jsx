import React from 'react';
import {users} from '../../../data/users.js';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem.jsx';
import { Wrapper, StyledList } from './UsersList.styles.js';

class UsersList extends React.Component {
    state={
        isUsersList: true,
    }
    toggleListTitle=()=>{
        this.setState((prevState)=>({ isUsersList: !this.state.isUsersList }));
    };
    render(){
        return(
            <Wrapper>
                <h1>{this.state.isUsersList ? `User's list`:'Students list'}</h1>
                <button onClick={this.toggleListTitle}>
                    Change title
                </button>
                <StyledList>
                    {users.map((userData, i) => (
                        <UsersListItem index={i} key={userData.name} userData={userData} />
                    ))}
                </StyledList>
            </Wrapper>
        );
    }
}
export default UsersList;