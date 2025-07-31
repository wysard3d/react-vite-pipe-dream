import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './pages/Welcome';
import GameBoard from './pages/GameBoard';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Welcome</Link></li>
          <li><Link to="/board">Game Board</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/board" element={<GameBoard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
