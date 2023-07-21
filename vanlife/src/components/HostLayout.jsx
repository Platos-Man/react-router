import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const style = {
    "font-weight": "bold",
    "text-decoration": "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink end style={({ isActive }) => (isActive ? style : null)} to={"/host"}>
          Dashboard
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? style : null)} to={"/host/income"}>
          Income
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? style : null)} to={"/host/vans"}>
          Vans
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? style : null)} to={"/host/reviews"}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
