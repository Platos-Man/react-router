import { Link, NavLink } from "react-router-dom";
import imageUrl from "../assets/images/avatar-icon.png";

const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        #VANLIFE
      </Link>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"host"}>
          Host
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"about"}>
          About
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"vans"}>
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
