import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Trump_Vance from './Components/Trump_Vance';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Layout/>} path="/" exact/>
        <Route element={<Trump_Vance/>} path="/tv" exact/>
      </Routes>

    </div>
  );
}

export default App;
