import './App.css';
import Business from './pages/Home/Business';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Business></Business>
      <Footer></Footer>
    </div>
  );
}

export default App;