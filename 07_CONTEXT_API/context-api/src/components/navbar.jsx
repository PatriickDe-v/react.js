import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">Sobre</Link>
      <Link to="/Products">Produtos</Link>
    </nav>
  );
};

export default Navbar;
