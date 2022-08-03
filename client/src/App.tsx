import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
