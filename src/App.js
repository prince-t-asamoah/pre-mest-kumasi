
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

import ChildComponent from './propsComponents/childComponents';
import ParentComponent from './propsComponents/parentComponent';
import MasterComponent from './propsComponents/masterComponent';


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
      <ParentComponent
        name='PRINCE TWUMASI ASAMOAH'
        gender='Male'
        age='27'
        email='asamoahpy@gmail.com'
      />
      <MasterComponent/>
      <ChildComponent/>
    </div>
  );
};

export default App;
