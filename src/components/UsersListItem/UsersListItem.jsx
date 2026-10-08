const UsersListItem = (props) => {
    return (
        <li>
            <div>{props.userData.average}</div>
            <div>
                <p>{props.userData.name}</p>
                <p>{props.userData.attendance}%</p>
            </div>
            <button>X</button>
        </li>
    );
};
export default UsersListItem;