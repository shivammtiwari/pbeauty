import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParlourList from './Components/ParlourList/ParlourList';
import ParlourDetail from './Components/ParlourDetail/ParlourDetail';


function App() {
  return (
 <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:cityName" element={<ParlourList/>} />
        <Route path="/:cityName/:Id" element={<ParlourDetail/>} />

      </Routes>
 </BrowserRouter>

  );
}

export default App;
