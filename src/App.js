import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Greet from './pages/Greet';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greetings" element={<Greet />} />
    </Routes>
  </Router>
);

export default App;
