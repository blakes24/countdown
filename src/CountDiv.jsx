import "./CountDiv.css";

export const CountDiv = ({ count, label }) => {
  const num = count.toString().padStart(2, "0");

  return (
    <div className="count-card">
      <div className="count">{num}</div>
      <div>{label}</div>
    </div>
  );
};
