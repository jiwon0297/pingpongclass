import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import DashBoard from '@pages/DashBoard';
import Style from '@pages/Style';
import Login from '@pages/Login';
import OpenVidu from './openvidu/App';
import '@src/App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/style" element={<Style />} />
          <Route path="/class" element={<OpenVidu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
