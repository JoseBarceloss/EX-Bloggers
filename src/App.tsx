import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { About, NotFound, Posts, Users } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Users /> } />
        <Route path="/posts/:id" element={ <Posts /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
