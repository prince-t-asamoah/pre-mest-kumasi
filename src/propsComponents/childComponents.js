
function ChildComponent(props) {
    return(
        <div>
            <h2>Child Component</h2>
            <h1>Name: {props.childName}</h1>
            <h1>Gender: {props.childGender}</h1>
            <h1>Age: {props.childAge}</h1>
            <h1>Email: {props.childEmail}</h1>
        </div>
    );
};
export default ChildComponent;