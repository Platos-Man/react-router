import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        #VANLIFE
      </Link>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"/host"}>
          Host
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"/about"}>
          About
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"/vans"}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
