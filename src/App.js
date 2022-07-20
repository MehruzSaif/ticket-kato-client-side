import './App.css';
import Banner from './pages/Home/Banner';
import Slider from './pages/Home/Slider';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';
import Reviews from './pages/Home/Reviews'

function App() {
  return (
    <div className="">
      <div className='container'>
        <Navbar></Navbar>
      </div>
      <div className='mt-4'>
        <Banner></Banner>
        <Slider></Slider>
        <Reviews></Reviews>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;