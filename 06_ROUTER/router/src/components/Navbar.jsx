// 2 - Links com react router
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      {/*<Link to="/">Home</Link>
      <Link to="/About">Sobre</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
