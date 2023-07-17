import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link className="logo" to={"/"}>
        #VANLIFE
      </Link>
      <nav>
        <Link to={"/about"}>About</Link>
        <Link to={"/vans"}>Vans</Link>
      </nav>
    </>
  );
};

export default NavBar;
