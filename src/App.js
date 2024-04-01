// import './App.css';
// import Greeting from './Component/Greeting';
// import Img from './Component/Img';
// import PropsCrad from "./Component/PropsCrad";
import PropsData from "./Component/PropsData";
import Destructuring from "./Component/Destructuring";

function App() {
  return (
    <div className="App">

      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>

        {PropsData.map((cvalue, index, array) => {
          console.log(cvalue, "cvalue")
          return <Destructuring key={index} name={cvalue.name} discription={cvalue.discription} coures={cvalue.coures} button={cvalue.button} image={cvalue.image} />
        })}

      </div>

      {/* <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>

        {PropsData.map((cvalue, index, array) => {
          console.log(cvalue, "cvalue")
          return <PropsCrad key={index} name={cvalue.name} discription={cvalue.discription} coures={cvalue.coures} button={cvalue.button} image={cvalue.image} />
        })}

      </div> */}


      {/* <div className="flex flex-wrap items-center justify-around mt-5"> */}
      {/* <PropsCrad/> */}

      {/* <PropsCrad name="Sahil Dudhat" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/>
        <PropsCrad name="Piyush Suhagiya" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/>
        <PropsCrad name="Jayan Dudakiya" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/>
        <PropsCrad name="Nikhil Kalsariya" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/>
        <PropsCrad name="Smit Thummar" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/>
        <PropsCrad name="Akshay Goti" coures="frontend developer" discription="The lorem text the section contain conatins header having open andclose functionality" button="View More" image="https://xsgames.co/randomusers/avatar.php?g=male"/> */}

      {/* <Img/>
        <Greeting/> */}
    </div>
  );
}

export default App;
