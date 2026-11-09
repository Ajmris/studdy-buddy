import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import { Link, useParams } from 'react-router-dom';
import UsersList from '../components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  // 1. Pobieramy listę wszystkich grup do nawigacji (endpoint to po prostu /groups)
  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  // 2. Pobieramy studentów dla wybranej grupy (z adresu URL lub bierzemy pierwszą grupę z listy)
  useEffect(() => {
    const currentGroup = id || groups[0];
    
    // Jeśli nie mamy jeszcze ID ani załadowanych grup, nie wykonujemy zapytania
    if (!currentGroup) return;

    axios
      .get(`/students/${currentGroup}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {/* Skoro group to string (np. 'A'), wyświetlamy bezpośrednio group, a nie group.name */}
            {group}
          </Link>
        ))}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;