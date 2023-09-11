import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/home';
import College from './pages/colleges/college';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path='/college' element={<College />} />
    </Routes>
  );
}

export default App;
