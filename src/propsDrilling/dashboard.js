import Detail from './detail';

function Dashboard(props) {
    return(
        <div>
            <h1>This is a Dashboard</h1>
            <Detail
                detailFirstName = {props.firstName}
                detailLastName = {props.lastName}
                detailDateOfBirth = {props.dateOfBirth}
                detailGender = {props.gender}
            />
        </div>
    )
}

export default Dashboard;