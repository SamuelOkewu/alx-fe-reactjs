import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      <h2 style={{ margin: 0 }}>My Company</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "#333" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" style={{ textDecoration: "none", color: "#333" }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none", color: "#333" }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;