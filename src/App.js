import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import Random from './components/colour-gen';
import Rating from './components/star-rating';

function App() {
  const stars=5;
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <Random/> */}
      <Rating noOfStars={stars}/>
    </div>
  );
}

export default App;
