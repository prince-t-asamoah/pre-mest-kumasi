
// import MyFirstComponent from "./components/myFirstComponent";
// import MySecondComponent from "./components/mySecondCompoent";
// import MyThirdComponent from "./components/myThirdComponent";
// import MyFourthComponent from "./components/myFourthComponent";
// import MyFifthComponent from "./components/myFifthComponent";
// import MySixthComponent from "./components/mySixthComponent";
// import MyEightComponent from "./components/myEightComponent";
// import MySeventhComponent from "./components/mySeventhComponent";
// import MyNinthComponent from "./components/myNinthComponent";
// import MyTenthComponent from "./components/myTenthComponent";

// import ChildComponent from './propsComponents/childComponents';
// import ParentComponent from './propsComponents/parentComponent';
// import MasterComponent from './propsComponents/masterComponent';
import Dashboard from './propsDrilling/dashboard';
import Profile from './propsDrilling/profile';

function App() {
  return (
    <div>
      {/* <MyFirstComponent/>
      <MySecondComponent/>
      <MyThirdComponent/>
      <MyFourthComponent/>
      <MyFifthComponent/>
      <MySixthComponent/>
      <MySeventhComponent/>
      <MyEightComponent/>
      <MyNinthComponent/>
      <MyTenthComponent/> */}
      {/* <ParentComponent
        name='PRINCE TWUMASI ASAMOAH'
        gender='Male'
        age='27'
        email='asamoahpy@gmail.com'
      />
      <MasterComponent/>
      <ChildComponent/> */}

      <Dashboard
        firstName='PRINCE TWUMASI' lastName='ASAMOAH' dateOfBirth='27/05/1993' gender='Male'
      />
      {/* <Profile/> */}
    </div>
  );
};

export default App;
