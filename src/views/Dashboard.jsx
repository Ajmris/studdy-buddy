import React, {useEffect, useState} from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import StudentsList from '../components/organisms/StudentsList/StudentsList';
import { TitleWrapper, GroupWrapper, Wrapper } from './Dashboard.styles';
import { Title } from '../components/atoms/Title/Title';
import { useStudents } from '../hooks/useStudents';

const Dashboard = () => {
  const { id } = useParams();
  const {getGroups}=useStudents();
  const [groups, setGroups] = useState([]);
  
  useEffect(()=>{
    (async ()=>{
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups])

  if (!id && groups.length > 0) {
    return <Navigate to={`/group/${groups[0]}`} replace />;
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups?.map(group => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;