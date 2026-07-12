import Layout from "../components/Layout";

function Trips() {
  return (
    <Layout>
      <div
        style={{
          padding: "40px",
          color: "white",
        }}
      >
        <h1>🛣️ Trip Operations</h1>

        <table
          style={{
            width: "100%",
            marginTop: "30px",
            borderCollapse: "collapse",
            background: "#111827",
            color: "white",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #334155",
                  textAlign: "left",
                }}
              >
                Route
              </th>

              <th
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #334155",
                  textAlign: "left",
                }}
              >
                Vehicle
              </th>

              <th
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #334155",
                  textAlign: "left",
                }}
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #334155",
                }}
              >
                Ahmedabad → Surat
              </td>

              <td
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #334155",
                }}
              >
                GJ01AB1234
              </td>

              <td
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #334155",
                }}
              >
                Running
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Trips;