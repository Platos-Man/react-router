import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const style = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink end style={({ isActive }) => (isActive ? style : null)} to={"."}>
          Dashboard
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? style : null)} to={"income"}>
          Income
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? style : null)} to={"vans"}>
          Vans
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? style : null)} to={"reviews"}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
