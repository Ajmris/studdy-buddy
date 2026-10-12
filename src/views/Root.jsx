import UsersList from '../components/organisms/UsersList/UsersList'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles.js';
import { theme } from '../assets/styles/theme.js';
import { Wrapper } from './Root.styles.js';

const Root=()=> (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
        {/* propsy */}
        <UsersList title="Users List" />
    </Wrapper>
  </ThemeProvider>
)

export default Root;