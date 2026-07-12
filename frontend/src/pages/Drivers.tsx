import Layout from "../components/Layout";

function Drivers(){

return(
<Layout>

<div style={{padding:"40px",color:"white"}}>

<h1>👨‍✈️ Drivers Management</h1>

<p>Manage drivers and availability</p>


<table
style={{
  width: "100%",
  marginTop: "30px",
  borderCollapse: "collapse",
  background: "#111827",
  color: "white"
}}
>

<tbody>

<tr>
<th style={{
padding:"15px",
borderBottom:"1px solid #334155",
textAlign:"left"
}}>Name</th>

<th style={{
padding:"15px",
borderBottom:"1px solid #334155",
textAlign:"left"
}}>License</th>

<th style={{
padding:"15px",
borderBottom:"1px solid #334155",
textAlign:"left"
}}>Status</th>

</tr>


<tr>
<td style={{
padding:"15px",
borderBottom:"1px solid #334155"
}}>ABC Patel</td>

<td style={{
padding:"15px",
borderBottom:"1px solid #334155"
}}>DL123456</td>

<td style={{
padding:"15px",
borderBottom:"1px solid #334155"
}}>Available</td>

</tr>


<tr>
<td style={{
padding:"15px",
borderBottom:"1px solid #334155"
}}>XYZ Shah</td>

<td style={{
padding:"15px",
borderBottom:"1px solid #334155"
}}>DL789012</td>

<td style={{
padding:"15px",
borderBottom:"1px solid #334155"
}}>On Trip</td>

</tr>


</tbody>

</table>


</div>

</Layout>
)

}

export default Drivers;