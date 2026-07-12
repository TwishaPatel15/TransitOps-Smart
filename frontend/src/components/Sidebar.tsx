import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div
      style={{
        width: "230px",
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "25px"
      }}
    >
      <h2>TransitOps</h2>

      <nav style={{marginTop:"30px"}}>
       <nav style={{marginTop:"30px"}}>

<Link to="/" style={{color:"white"}}>
🏠 Dashboard
</Link>

<br/><br/>

<Link to="/vehicles" style={{color:"white"}}>
🚚 Vehicles
</Link>

<br/><br/>

<Link to="/drivers" style={{color:"white"}}>
👨‍✈️ Drivers
</Link>

<br/>

<Link to="/trips" style={{color:"white"}}>
🛣️ Trips
</Link>

<br/>

<p>🔧 Maintenance</p>

<br/>

<p>📊 Reports</p>

</nav>
      </nav>
    </div>
  );
}

export default Sidebar;