import deleteIcon from '../../../assets/delete-icon.svg';
import Button from '../../atoms/Button.jsx';
import Wrapper from './UsersListItem.styles.js';
const UsersListItem = ({ userData: { average, name, attendance = '0' }}) => (
    <Wrapper>
        <div>{average}</div>
        <div>
            <p>{name}</p>
            <p>{attendance}%</p>
        </div>
        <Button>
            <img src={deleteIcon} alt="Delete" />
        </Button>
    </Wrapper>
);
export default UsersListItem;