import './App.css';
import Banner from './pages/Home/Banner';
import Business from './pages/Home/Business';
import Slider from './pages/Home/Slider';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';


function App() {
  return (
    <div className="">
      {/* <div className='containers'>
        <Navbar></Navbar>
      </div> */}
      <Navbar></Navbar>
        <Banner></Banner>
         <Slider/>
        <Business></Business>
        <Footer></Footer>
    </div>
  );
}

export default App;