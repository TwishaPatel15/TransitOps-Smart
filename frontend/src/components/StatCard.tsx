type Props = {
  title: string;
  value: string;
  icon: string;
};


function StatCard({ title, value, icon }: Props) {
  return (
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
        width: "220px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }}
    >
      <h2>{icon} {title}</h2>
      <h1>{value}</h1>
    </div>
  );
}

export default StatCard;