import Layout from "../components/Layout";
import StatCard from "../components/StatCard";


function Dashboard() {
  return (
    <Layout> 
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px",
        color: "white"
      }}
    >
      <h1>
        TransitOps Smart Dashboard 🚀
      </h1>

      <p>
        Transport Operations Management System
      </p>


      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >

        <StatCard
          title="Vehicles"
          value="25"
          icon="🚚"
        />

        <StatCard
          title="Drivers"
          value="40"
          icon="👨‍✈️"
        />

        <StatCard
          title="Active Trips"
          value="12"
          icon="🛣️"
        />

        <StatCard
          title="Alerts"
          value="3"
          icon="🔧"
        />

        <StatCard
          title="Revenue"
          value="₹2.5L"
          icon="💰"
        />

      </div>
    </div>
    </Layout>
  );
}

export default Dashboard;