import './App.css';
import Accordian from './components/accordian';
import Random from './components/colour-gen';
import Rating from './components/star-rating';
import Slider from './components/image-slider';
import LoadProducts from './components/Load-more-button';

function App() {
  const stars=5;
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <Random/> */}
      {/* <Rating noOfStars={stars}/> */}
      {/* <Slider url={'https://picsum.photos/v2/list'}  limit={"4"} page={'1'} /> */}
      <LoadProducts/>
    </div>
  );
}

export default App;
