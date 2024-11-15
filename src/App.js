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
import Scroll from './components/Scroll-indicator'
import Parent from './components/PropsPassing/Parent';
import TabTest from './components/Tabs/tab-test';
import Modal from './components/Modal-Popup';
import Stateuse from './components/useStatehook';
import Effectuse from './components/useEffect/index'
import Ref from './components/useRef'
import Memo from './components/useMemo/index,';
import Callback from './components/useCallback';
import Profile from './components/contextFooter/profile';
import File from './components/contextFooter/App'
import Reducer from './components/Usereducer';
import Layout from './components/useLayoutEffect';
import Github from './components/GithubProfile_Finder';
import Autoapi from './components/AutoComplete-API';


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
      {/* <Theme/> */}
      {/* <Scroll url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <TabTest/> */}
      {/* <Parent/> */}
      {/* <Modal/> */}
      {/* <Stateuse/> */}
      {/* <Effectuse/> */}
      {/* <Ref/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      {/* <File/> */}
      {/* <Reducer/> */}
      {/* <Layout/> */}
      {/* <Github/> */}
      <Autoapi/>
      
    </div>
  );
}

export default App;
