import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { UserShape } from '../../../types';
import { Title } from '../../atoms/Title/Title';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;