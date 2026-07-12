import Layout from "../components/Layout";

function Maintenance() {
  return (
    <Layout>
      <div
        style={{
          padding: "40px",
          color: "white",
        }}
      >
        <h1>🔧 Maintenance Management</h1>

        <p style={{ color: "#94a3b8", marginTop: "8px" }}>
          Track scheduled vehicle maintenance
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          + Schedule Maintenance
        </button>

        <table
          style={{
            width: "100%",
            marginTop: "30px",
            borderCollapse: "collapse",
            background: "#111827",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr>
              <th style={th}>Vehicle</th>
              <th style={th}>Service</th>
              <th style={th}>Date</th>
              <th style={th}>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={td}>GJ01AB1234</td>
              <td style={td}>Engine Check</td>
              <td style={td}>12 July 2026</td>
              <td style={td}>Pending</td>
            </tr>

            <tr>
              <td style={td}>GJ05XY9876</td>
              <td style={td}>Oil Change</td>
              <td style={td}>10 July 2026</td>
              <td style={td}>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

const th = {
  padding: "15px",
  textAlign: "left" as const,
  borderBottom: "1px solid #334155",
};

const td = {
  padding: "15px",
  borderBottom: "1px solid #334155",
};

export default Maintenance;