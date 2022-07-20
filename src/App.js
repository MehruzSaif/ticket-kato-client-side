import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <h2 className='text-center'>Ticket Kato</h2>
      <Home></Home>
    </div>
  );
}

export default App;