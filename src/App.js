import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Homepage from './home-page/Homepage';
import Homepage2 from './homepage2/Homepage2';
import Homepage3 from './homepage3/Homepage3';
import Homepage4 from './homepage3/homepage4/Homepage4';

function App() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <Homepage/>
    </div>
    <Homepage2/>
    <div>
      <Homepage3/>
    </div>
    <div>
      <Homepage4/>
    </div>
    </>
  );
}

export default App;
