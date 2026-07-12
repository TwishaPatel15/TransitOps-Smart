import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "30px",
        borderRight: "1px solid #1e293b",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "30px",
        }}
      >
        🚚 TransitOps
      </h2>

      <nav
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          🏠 Dashboard
        </Link>

        <Link to="/vehicles" style={{ color: "white", textDecoration: "none" }}>
          🚚 Vehicles
        </Link>

        <Link to="/drivers" style={{ color: "white", textDecoration: "none" }}>
          👨‍✈️ Drivers
        </Link>

        <Link to="/trips" style={{ color: "white", textDecoration: "none" }}>
          🛣️ Trips
        </Link>

        <Link
          to="/maintenance"
          style={{ color: "white", textDecoration: "none" }}
        >
          🔧 Maintenance
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;