import Profile from './profile';

function Notification(props) {
    return (
        <div>
            <h3>This is Notification</h3>
            <Profile
                profileFirstName = {props.notificationFirstName}
                profileLastName = {props.notificationLastName}
                profileDateOfBirth = {props.notificationDateOfBirth}
                profileGender = {props.notificationGender}
            />
        </div>
    )
}

export default Notification;
