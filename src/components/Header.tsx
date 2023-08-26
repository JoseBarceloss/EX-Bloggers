import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>Bloggers</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
  );
}
