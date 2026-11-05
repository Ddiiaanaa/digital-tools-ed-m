import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Pr1 from './pr-1/Pr1';
import Pr2 from './pr-2/Pr2';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', lineHeight: '1.4' }}>
          Освітній менеджмент: Практичні роботи
        </h1>
        
        {/* Навігаційне меню */}
        <nav style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '40px', padding: '15px', backgroundColor: 'rgba(100, 108, 255, 0.1)', borderRadius: '8px' }}>
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#646cff' }}>Головна (ПР 1)</Link>
          <Link to="/pr-2" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#646cff' }}>Практична 2</Link>
        </nav>

        {/* Зона, де змінюватимуться самі практичні роботи */}
        <Routes>
          <Route path="/" element={<Pr1 />} />
          <Route path="/pr-2" element={<Pr2 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App; 