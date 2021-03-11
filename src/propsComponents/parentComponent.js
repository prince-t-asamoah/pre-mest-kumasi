import ChildComponent from './childComponents'

function ParentComponent(props) {
    return(
        <div>
            <h1>Parent Component</h1>
            <ChildComponent
                childName = {props.name}
                childGender = {props.gender}
                childAge = {props.age}
                childEmail = {props.email}
            />
        </div> 
    );
};
export default ParentComponent;