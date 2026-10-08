import UsersList from '../components/organisms/UsersList/UsersList'
import styled from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles.js';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f7f8fa;
`;
const Root=()=> {

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div>
          <h1>Get started</h1>
          <UsersList />
        </div>
      </Wrapper>
    </>
  )
}

export default Root