import './App.css';
import Banner from './pages/Home/Banner';
import Slider from './pages/Home/Slider';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';
import Reviews from './pages/Home/Reviews'
import Business from './pages/Home/Business';


function App() {
  return (
    <div className="">
      {/* <div className='containers'>
        <Navbar></Navbar>
      </div> */}
      <Navbar></Navbar>
        <Banner></Banner>
        <Slider></Slider>
        <Business></Business>
        <Reviews></Reviews>
        <Footer></Footer>
    </div>
  );
}

export default App;