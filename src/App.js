import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import Navbar from './components/Navbar';
import Pollution from './components/PollutionDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/pollution/:lat/:lon/:index" element={<Pollution />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
