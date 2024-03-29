// import './App.css';
// import Greeting from './Component/Greeting';
// import Img from './Component/Img';
import PropsCrad from "./Component/PropsCrad";

function App() {
  return (
    <div className="App">
    <div className="flex flex-wrap items-center justify-around mt-5">
      {/* <PropsCrad/> */}

      <PropsCrad name="Sahil Dudhat" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/>
      <PropsCrad name="Piyush Suhagiya" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/>
      <PropsCrad name="Jayan Dudakiya" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/>
      <PropsCrad name="Nikhil Kalsariya" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/>
      <PropsCrad name="manshi vaghasiya" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=female"/>
      <PropsCrad name="Keni Kakadiya" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=female"/>

      {/* <Img/>
      <Greeting/> */}
    </div>
    </div>
  );
}

export default App;
