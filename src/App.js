import './App.css';
import Home from './pages/Home/Home';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;