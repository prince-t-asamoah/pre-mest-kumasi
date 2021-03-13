import Notification from './notification';

function Detail(props) {
    return (
        <div>
            <h2>This is a Detail</h2>
            <Notification
                notificationFirstName = {props.detailFirstName}
                notificationLastName = {props.detailLastName}
                notificationDateOfBirth = {props.detailDateOfBirth}
                notificationGender = {props.detailGender}
            />
        </div>
    );
};

export default Detail;