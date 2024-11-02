import './App.css';
import Accordian from './components/accordian';
import Random from './components/colour-gen';
import Rating from './components/star-rating';
import Slider from './components/image-slider';
import LoadProducts from './components/Load-more-button';
import Tree from './components/Tree'
import menus from './data'
import Qr from './components/qr-code'
import Theme from './components/Theme-switch';

function App() {
  const stars=5;
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <Random/> */}
      {/* <Rating noOfStars={stars}/> */}
      {/* <Slider url={'https://picsum.photos/v2/list'}  limit={"4"} page={'1'} /> */}
      {/* <LoadProducts/> */}
      {/* <Tree menus={menus}/> */}
      {/* <Qr/> */}
      <Theme/>
    </div>
  );
}

export default App;
