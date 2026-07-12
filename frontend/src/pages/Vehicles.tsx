import Layout from "../components/Layout";


function Vehicles() {
  return (
    <Layout>

      <div
        style={{
          padding: "40px",
          color: "white"
        }}
      >

        <h1>
          🚚 Vehicles Management
        </h1>

        <p>
          Manage your transport fleet
        </p>


        <button
          style={{
            marginTop:"20px",
            padding:"12px 20px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"8px"
          }}
        >
          + Add Vehicle
        </button>


        <table
          style={{
            width: "100%",
    marginTop: "30px",
    borderCollapse: "collapse",
    background: "#111827",
    color: "white",
    borderRadius: "10px",
    overflow: "hidden"
          }}
        >

          <tbody>

          <tr>
           <th
  style={{
    padding:"15px",
    textAlign:"left",
    borderBottom:"1px solid #374151"
  }}
>
  Vehicle Number
</th>

<th
  style={{
    padding:"15px",
    textAlign:"left",
    borderBottom:"1px solid #374151"
  }}
>
  Type
</th>

<th
  style={{
    padding:"15px",
    textAlign:"left",
    borderBottom:"1px solid #374151"
  }}
>
  Status
</th>
          </tr>


          <tr>
           <td style={{padding:"15px"}}>
  GJ01AB1234
</td>

<td style={{padding:"15px"}}>
  Truck
</td>

<td style={{padding:"15px"}}>
  Available
</td>
          </tr>


          <tr>
           <td style={{padding:"15px"}}>
  GJ01AB1234
</td>

<td style={{padding:"15px"}}>
  Truck
</td>

<td style={{padding:"15px"}}>
  Available
</td>
          </tr>


          </tbody>

        </table>

      </div>

    </Layout>
  );
}


export default Vehicles;