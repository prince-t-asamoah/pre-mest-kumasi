
function Profile(props) {
    return (
        <div>
            <h4>This is a Profile</h4>
            <p>First name: {props.profileFirstName}</p>
            <p>Last name: {props.profileLastName}</p>
            <p>Date of birth: {props.profileDateOfBirth}</p>
            <p>Gender: {props.profileGender}</p>
        </div>
        
    );
};

export default Profile;