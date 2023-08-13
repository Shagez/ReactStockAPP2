import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="nav">
      <Link style={{ margin: "20px" }} to="/stocks">
        <div>Home</div>
      </Link>
      <Link style={{ margin: "20px" }} to="/about">
        <div>About</div>
      </Link>

      <Link style={{ margin: "20px" }} to="/stocks/">
        <div>Dashboard</div>
      </Link>
    </div>
  );
}

export default Navbar;
