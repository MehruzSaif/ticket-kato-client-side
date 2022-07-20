import './App.css';
import Business from './pages/Home/Business'; 
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className='mt-4'>
        <Business></Business>  
        <Footer></Footer> 
      </div>
    </div>
  );
}

export default App;