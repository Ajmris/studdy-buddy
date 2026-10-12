import Button from '../../atoms/Button.jsx';
import {StyledAverage, StyledInfo, Wrapper} from './UsersListItem.styles.js';

const UsersListItem = ({deleteUser, userData: { average, name, attendance = '0%' }}) => (
    <Wrapper>
        <StyledAverage value={average}>{average}</StyledAverage>
        <StyledInfo>
            <p>
                {name}
                <Button onClick={() => deleteUser(name)} />
            </p>
            <p>attendance: {attendance}%</p>
        </StyledInfo>
    </Wrapper>
);
export default UsersListItem;