<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
>>>>>>> 566e86fc1ba92ae3e4f9c221216d8249d721dbab
