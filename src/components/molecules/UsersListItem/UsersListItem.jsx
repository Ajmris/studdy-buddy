import Button from '../../atoms/Button.jsx';
import {StyledAverage, StyledInfo, Wrapper} from './UsersListItem.styles.js';

const showIndex=(index) => alert(`This is the index of the student #${index+1}`);

const UsersListItem = ({index, userData: { average, name, attendance = '0%' }}) => (
    <Wrapper>
        <StyledAverage value={average}>{average}</StyledAverage>
        <StyledInfo>
            <p>
                {name}
                <Button onClick={() => showIndex(index)} />
            </p>
            <p>attendance: {attendance}%</p>
        </StyledInfo>
    </Wrapper>
);
export default UsersListItem;